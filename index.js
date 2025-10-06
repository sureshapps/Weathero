async function getWeather() {
  const city = document.getElementById("city").value;
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    const weatherRes = await fetch(
      `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`
    );
    const weather = await weatherRes.json();

    const currentTemp = weather.current.temp_c;
    const condition = weather.current.condition.text;

    resultDiv.innerHTML = `
      <h3>Weather in ${city}</h3>
      <p>Temperature: ${currentTemp}°C</p>
      <p>Condition: ${condition}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = "Failed to fetch weather. Please try again.";
  }
}
