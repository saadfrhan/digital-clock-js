function updateClock() {
  const clockElement = document.getElementById("clock")!;
  const now = new Date();

  let hours: string = (now.getHours() % 12 || 12).toString();
  let minutes: string = now.getMinutes().toString().padStart(2, '0'); 

  const period = now.getHours() >= 12 ? "PM" : "AM";

  clockElement.textContent = `${hours}:${minutes} ${period}`;
}

setInterval(updateClock, 1000);

updateClock();
