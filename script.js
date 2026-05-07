const TARGET_DATE = "2026-06-05T15:30:00+03:00";

function formatValue(value) {
  return String(value).padStart(2, "0");
}

function getRemainingTime() {
  const targetTime = new Date(TARGET_DATE).getTime();
  const diff = targetTime - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function updateCountdown() {
  const values = getRemainingTime();

  document.getElementById("days").textContent = formatValue(values.days);
  document.getElementById("hours").textContent = formatValue(values.hours);
  document.getElementById("minutes").textContent = formatValue(values.minutes);
  document.getElementById("seconds").textContent = formatValue(values.seconds);
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
