<template>
	<div class=" ww-flex ww-justify-center">
		<div :class="[weatherWidgetStore.isDay ? 'ww-bg-sky-200':'ww-bg-slate-900 ww-text-white']" class="ww-w-72 ww-text-center ww-bg-neutral-200 ww-p-10 ww-shadow-md ww-rounded-3xl">
			<div class="ww-font-bold ww-text-2xl">{{ weatherWidgetStore.location }}</div>
			<div class=" ww-flex ww-justify-center ww"><img :src="weatherWidgetStore.icon" /></div>
			<div class="ww-font-bold">{{ weatherWidgetStore.temp }}</div>
			<div class="ww-mt-3 ww-font-light">{{ weatherWidgetStore.condition }}</div>
			<div class="ww-flex ww-justify-between ww-mt-3 ">
				<div>
					<div class="ww-font-normal">Humidity</div>
					<div>{{ weatherWidgetStore.humidity }}%</div>
				</div>
				<div>
					<div class="ww-font-normal">Feels like</div>
					<div>{{ weatherWidgetStore.feelsLike }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {useWeatherWidgetComposable} from '#imports';
const { weatherWidgetStore } = useWeatherWidgetComposable();

</script>

<style  scoped></style>