function showTime() {
    const name = prompt("Lütfen isminizi girin:");
    const myNameDom = document.getElementById("myName");
    
    if (name) {
      myNameDom.textContent = name;
    } else {
      myNameDom.textContent = "Misafir";
    }

    setInterval(updateClock, 1000);
}

function updateClock() {

    const currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false
    };
    const formattedDate = currentDate.toLocaleDateString("tr-TR", options);
    const myClockDom = document.getElementById("myClock");

    myClockDom.textContent = formattedDate;
}
  
showTime();