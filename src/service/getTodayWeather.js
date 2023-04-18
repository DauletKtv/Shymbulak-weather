export default async function getTodayWeather() {
  const options = {
    method: 'GET',
    headers: {
      // 'X-RapidAPI-Key': '2c6a9e856emsh24f669204b8e6f9p1e501cjsn88db0c536b57',
      // 'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  }
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=43.128269&lon=77.081425&appid=c8abafea5d734f1f52a9e3742007d3bd&lang=ru ',
    options
  )
  const data = await response.json()
  // .then((response) => response.json())
  // .then((response) => response)
  // .catch((err) => console.error(err))
  return data
}
