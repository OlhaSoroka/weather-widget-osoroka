import { defineNuxtPlugin } from '#app';
import { defineStore } from 'pinia';
import { WeatherData } from './weather-widget.plugin';

export default defineNuxtPlugin(async (nuxtApp) => {
	const weatherWidgetStore = defineStore('weatherWidget', {
		state: () => ({
			_location: '',
			_temp: 0,
			_condition: '',
			_humidity: '',
			_feelsLike: '',
			_isDay: 0,
			_icon: ''
		}),

		getters: {
			location: (state) => state._location,
			temp: (state) => `${state._temp}°`,
			condition: (state) => state._condition,
			humidity: (state) => state._humidity,
			feelsLike: (state) => `${state._feelsLike}°`,
			isDay: (state) => !!state._isDay,
			icon: (state) => state._icon
		},

		actions: {
			async changeLocation(location: string) {

				const { data } = await useFetch<WeatherData>(`http://api.weatherapi.com/v1/current.json?key=1b7ef8ce906843ff9aa194302231207&q=${location}&aqi=yes`);

				if (data?.value) {
					const { value: { location, current } } = data;
					this._location = location.name;
					this._temp = current.temp_c;
					this._condition = current.condition.text;
					this._humidity = current.humidity;
					this._feelsLike = current.feelslike_c;
					this._icon = current.condition.icon;
				}
			},

		},
	})
	nuxtApp.provide('weatherWidgetStore', weatherWidgetStore)
})
