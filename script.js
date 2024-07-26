async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = 'fb5984670657947663e6fa3fd3a73507'; // Substitua com sua chave de API do OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const date = new Date().toLocaleDateString();
      const cityName = data.name;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;

      document.getElementById('date').innerText = `Data: ${date}`;
      document.getElementById('city-name').innerText = `Cidade: ${cityName}`;
      document.getElementById('temperature').innerText = `Temperatura: ${temperature} °C`;
      document.getElementById('humidity').innerText = `Umidade: ${humidity}%`;
    } else {
      alert('Cidade não encontrada!');
    }
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    alert('Erro ao buscar os dados. Por favor, tente novamente.');
  }
}