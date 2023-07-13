export function weatherApiUrl(location: string) {
	return `https://api.weatherapi.com/v1/current.json?key=1962a8a3a6aa444f871191513231307&q=${location}&aqi=yes`
}