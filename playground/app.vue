<template>
  <div>
    <button @click="weatherWidgetStore.changeLocation('London')">Change Location</button>
  </div>
  <div>
    <WeatherWidgetComponent />
  </div>
</template>

<script setup>

const { weatherWidgetStore } = useWeatherWidgetComposable();

</script>
