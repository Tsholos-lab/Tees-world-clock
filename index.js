function updateTime() {
  // Johannesburg
  let johannesburgElement = document.querySelector("#johanneburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johanneburgTimeElement = johannesburgElement.querySelector(".time");
  let johanneburgTime = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML = johanneburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  // London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
