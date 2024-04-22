const API_KEY = 'ca5c999cb6235171c1b0b0f6e276d2ac';

export async function fetchWeather() {
  try {
    // Fetch weather data for Edmond, Oklahoma
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bethany, US&appid=${API_KEY}&units=metric`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    console.log('Weather data:', data); // Log the entire data object
    return {
      temperature: data.main.temp,
      city: data.name
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}
