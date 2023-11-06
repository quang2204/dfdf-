var clock = document.querySelector(".number");
var bar = document.querySelector(".bar-seconds");
const number = [];
const bars = [];
for (let i = 1; i < 13; i++) {
  number.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}
clock.innerHTML = number.join("");
for (let i = 1; i < 63; i++) {
  bars.push(`     <span style="--index:${i};"><p></p></span>`);
}
bar.innerHTML = bars.join("");
const hours = document.querySelector(".hand.hours");
const minutes = document.querySelector(".hand.minutes");
const seconds = document.querySelector(".hand.seconds");

function updateTime() {
  let date = new Date();
  let timehours = date.getHours();
  let timeminutes = date.getMinutes();
  let timeseconds = date.getSeconds();

  //   let hourDegrees =
  //     (360 / 12) * (timehours % 12) + (360 / 12) * (timeminutes / 60);
  //   let minuteDegrees =
  //     (360 / 60) * timeminutes + (360 / 60) * (timeseconds / 60);
  //   let secondDegrees = (360 / 60) * timeseconds;

  hours.style.transform = `rotate(${timehours * 30 + timeminutes / 2}deg)`;
  minutes.style.transform = `rotate(${timeminutes * 6}deg)`;
  seconds.style.transform = `rotate(${timeseconds * 6}deg)`;
}

setInterval(updateTime, 1000); // Cập nhật thời gian mỗi giây
updateTime(); // Gọi hàm lần đầu để thiết lập vị trí ban đầu
