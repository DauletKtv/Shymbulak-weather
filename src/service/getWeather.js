export default async function getWeather() {
  const options = {
    method: 'GET',
    headers: {
      // 'X-RapidAPI-Key': '2c6a9e856emsh24f669204b8e6f9p1e501cjsn88db0c536b57',
      // 'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  }
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/forecast?appid=217bdc3daf04a62d62edad99f9ad31a9&lat=43.128269&lon=77.081425',
    options
  )
  const data = await response.json()

  return data
}
