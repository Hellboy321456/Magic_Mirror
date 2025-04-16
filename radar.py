import serial
import time
import os

# 🔧 Config
COM_PORT = "COM4"
BAUD_RATE = 115200
TIMEOUT = 1
TURN_OFF_DELAY = 2
FAR_ZONE_TIMEOUT = 2
STANDBY_FLAG_PATH = "C:/MagicMirror/standby.flag"

#  State
last_detected_time = None
far_zone_start = None
in_standby = False

#  Serial connection
ser = serial.Serial(COM_PORT, BAUD_RATE, timeout=TIMEOUT)
print(f"Listening on {COM_PORT} at {BAUD_RATE} baud...")


#  Standby handlers
def enter_standby():
    global in_standby
    if not in_standby:
        open(STANDBY_FLAG_PATH, 'w').close()
        in_standby = True
        print(" Entering standby mode...")

def exit_standby():
    global in_standby
    if in_standby and os.path.exists(STANDBY_FLAG_PATH):
        os.remove(STANDBY_FLAG_PATH)
        in_standby = False
        print("✨ Exiting standby mode...")

#  Main loop
def check_radar():
    global last_detected_time, far_zone_start

    while True:
        try:
            data = ser.readline().decode('utf-8').strip()
            if data:
                print(f" Received: {data}")

                if data.startswith("occ,") or data.startswith("mov,"):
                    parts = data.split(",")[1].strip().split(" ")
                    if len(parts) >= 2:
                        try:
                            zone = int(parts[0])
                        except ValueError:
                            continue  # Ignore malformed lines

                        # Reset timer for any valid input
                        last_detected_time = time.time()

                        # Activity in close zone (0-2) → immediately exit standby
                        if zone in [0, 1, 2]:
                            print(f" Activity in close zone {zone}. Exiting standby.")
                            far_zone_start = None
                            exit_standby()
                        else:
                            # Activity in far zone → start or continue timeout
                            print(f" Activity in far zone {zone}. Monitoring timeout...")
                            if far_zone_start is None:
                                far_zone_start = time.time()
                            elif time.time() - far_zone_start > FAR_ZONE_TIMEOUT:
                                print(" Far zone activity only. Timeout passed. Entering standby.")
                                enter_standby()
                                last_detected_time = None
                                far_zone_start = None

        except Exception as e:
            print(f" Error: {e}")

        # No activity at all for a while → enter standby
        if last_detected_time and (time.time() - last_detected_time > TURN_OFF_DELAY):
            print(" No activity detected. Forcing standby.")
            enter_standby()
            last_detected_time = None
            far_zone_start = None

        time.sleep(1)

#  Start
if __name__ == "__main__":
    check_radar()
