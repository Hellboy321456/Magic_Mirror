// js/standby-monitor.js
setInterval(() => {
    fetch("/standby.flag")
      .then((res) => {
        if (res.status === 200) {
          document.body.style.opacity = "0.1"; // dim display
        } else {
          document.body.style.opacity = "1"; // normal
        }
      })
      .catch(() => {
        document.body.style.opacity = "1"; // fallback
      });
  }, 3000); // every 3 seconds
  