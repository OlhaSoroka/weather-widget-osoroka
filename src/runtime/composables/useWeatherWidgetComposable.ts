import { useNuxtApp } from "nuxt/app";
import { StoreDefinition } from "pinia";

export function useWeatherWidgetComposable() {
	const nuxtApp = useNuxtApp();
	const weatherWidgetStore = nuxtApp.$weatherWidgetStore as StoreDefinition;

	const store = weatherWidgetStore();
	const config = useRuntimeConfig();

	// Read value from config and set default location
	store.changeLocation(config.public.defaultLocation);
	
	return {
		weatherWidgetStore: store,
	}
}