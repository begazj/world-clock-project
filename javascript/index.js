function updateTime() {
  // New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //Nairobi
  let nariobiElement = document.querySelector("#nairobi");
  let nariobiDateElement = nariobiElement.querySelector(".date");
  let nariobiTimeElement = nariobiElement.querySelector(".time");
  let nariobiTime = moment().tz("Africa/Nairobi");

  nariobiDateElement.innerHTML = nariobiTime.format("MMMM Do YYYY");
  nariobiTimeElement.innerHTML = nariobiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  //Hyderabad
  let hyderabadElement = document.querySelector("#hyderabad");
  let hyderabadDateElement = hyderabadElement.querySelector(".date");
  let hyderabadTimeElement = hyderabadElement.querySelector(".time");
  let hyderabadTime = moment().tz("Asia/Calcutta");

  hyderabadDateElement.innerHTML = hyderabadTime.format("MMMM Do YYYY");
  hyderabadTimeElement.innerHTML = hyderabadTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
