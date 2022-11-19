function updateTime() {
  // New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Nairobi
  let nairobiElement = document.querySelector("#nairobi");
  if (nairobiElement) {
    let nairobiDateElement = nairobiElement.querySelector(".date");
    let nairobiTimeElement = nairobiElement.querySelector(".time");
    let nairobiTime = moment().tz("Africa/Nairobi");

    nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
    nairobiTimeElement.innerHTML = nairobiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Hyderabad
  let hyderabadElement = document.querySelector("#hyderabad");
  if (hyderabadElement) {
    let hyderabadDateElement = hyderabadElement.querySelector(".date");
    let hyderabadTimeElement = hyderabadElement.querySelector(".time");
    let hyderabadTime = moment().tz("Asia/Calcutta");

    hyderabadDateElement.innerHTML = hyderabadTime.format("MMMM Do YYYY");
    hyderabadTimeElement.innerHTML = hyderabadTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

let cityInterval;
function updateCity(event) {
  clearInterval(cityInterval);
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  updateCityTime(cityTimeZone);
  cityInterval = setInterval(() => updateCityTime(cityTimeZone), 1000);
}
function updateCityTime(cityTimeZone) {
  //console.log(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
          
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <small>${cityTime.format("A")}</small></div>
          </div>
        </div>
        <div>
        <a href="/" class="homepage-link">Home</a>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
