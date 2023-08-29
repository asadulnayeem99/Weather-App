const button = document.getElementById("btn");
button.addEventListener("click", function () {
  const input = document.getElementById("in").value;
  console.log(input);
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input +
      "&appid=86d434c60dd5805401af28ecb1b6bf68"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const cityName = data.name;
      const Temp = data.main.temp;
      const hum = data.main.humidity;
      const desc = data.weather[0].description;
      const pic = data.weather[0].icon;
      const url = `https://openweathermap.org/img/wn/${pic}@2x.png`;
      const tem = Number((Temp - 273.15).toFixed(2));
        const imgDiv = document.getElementById("img");
        imgDiv.src = url;
      //   imgDiv.innerHTML = ""
      //   const imgs = document.createElement("img");
      //   imgs.src = url;
      //   imgs.height = 100;
      //   imgDiv.appendChild(imgs);
      const date = document.getElementById("date");
      setInterval(() => {
        date.innerHTML = new Date().toLocaleTimeString();
      }, 1000);
      document.getElementById("temp").innerHTML = tem;
      document.getElementById("city").innerHTML = cityName;
      document.getElementById("obostha").innerHTML = data.weather[0].main;
      console.log(data.weather[0].main);
      document.getElementById("humidity").innerHTML = hum;
      document.getElementById("speed").innerHTML = data.wind.speed;
      const im = document.querySelectorAll("#ss");
      im.src = url;
    });
});
