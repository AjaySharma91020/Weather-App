document.getElementById("calcBtn").addEventListener("click", () => {
    const api_key = "b70acd07cce5674de7b4e83c10ccc0f4";
    const city_name = document.getElementById("city").value;
    const url_string = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;
    console.log(document.getElementById("city").value);
    fetch(url_string)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("request successful");
          return response.json();
        }
        else{
          document.getElementById("result").innerHTML = `Bad Request`;
        }
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        document.getElementById("result").innerHTML = `Temperature in ${jsonResponse.name} is ${Math.round(jsonResponse.main.temp - 273)} °C`;;
      })
      .catch((error) => {
        console.log(error.errorMessage);
      });
  });
  