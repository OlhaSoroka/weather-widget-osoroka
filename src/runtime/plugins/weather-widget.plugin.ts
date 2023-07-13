import { defineNuxtPlugin, useFetch } from '#app';
import { defineStore } from 'pinia';
import { WeatherData } from './../models/weather-data.model';
import { weatherApiUrl } from './../models/weather-api-url.model';

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

				const { data } = await useFetch<WeatherData>(weatherApiUrl(location));

				if (data?.value) {
					const { value: { location, current } } = data;
					this._location = location.name;
					this._temp = current.temp_c;
					this._condition = current.condition.text;
					this._humidity = current.humidity;
					this._feelsLike = current.feelslike_c;
					this._icon = current.condition.icon;
					this._isDay= current.is_day;
				}
			},

		},
	})
	nuxtApp.provide('weatherWidgetStore', weatherWidgetStore)
})
