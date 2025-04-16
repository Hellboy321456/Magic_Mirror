/*
Module.register("MMM-RadarPresence", {
  // Default module configuration
  defaults: {
    updateInterval: 5000, // How often to check the radar for updates (in milliseconds)
  },

  start: function() {
    this.motionDetected = false;  // Initialize the motion detection flag
    this.scheduleUpdate();  // Start checking for updates
  },

  // Schedule periodic updates from the backend
  scheduleUpdate: function() {
    setInterval(() => {
      this.sendSocketNotification("CHECK_RADAR");
    }, this.config.updateInterval);
  },

  // Handle incoming socket notifications from the backend
  socketNotificationReceived: function(notification, payload) {
    if (notification === "RADAR_UPDATE") {
      // Update motionDetected status with the payload value
      this.motionDetected = payload;
      this.updateDom();  // Refresh the display to reflect the updated motion state
    }
  },

  // Create the DOM content for displaying the motion detection status
  getDom: function() {
    var wrapper = document.createElement("div");

    if (this.motionDetected) {
      // If motion is detected, show an active message
      wrapper.innerHTML = "Motion Detected!";
      wrapper.className = "bright";  // Highlight with bright styling
    } else {
      // If no motion is detected, show a standby message
      wrapper.innerHTML = "No Motion Detected";
      wrapper.className = "dimmed";  // Dim the message for standby mode
    }

    return wrapper;
  },
});
*/