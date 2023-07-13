export function weatherApiUrl(location: string) {
	return `http://api.weatherapi.com/v1/current.json?key=1b7ef8ce906843ff9aa194302231207&q=${location}&aqi=yes`
}