# weather-widget-osoroka

This is a Nuxt module called "Weather Widget" that provides a customizable weather component for your Nuxt applications.

## Features

- Displays current weather information
- Uses Tailwind CSS for styling
- Uses Pinia for state management

## Installation

To install the module, you can use npm or yarn:

```bash
# Using npm
npm i weather-widget-osoroka

```
## Usage

Once installed, you can import and use the Weather Widget component in your Nuxt application.

```vue
<template>
  <div>
    <WeatherWidgetComponnet />
    <button @click="weatherWidgetStore.changeLocation("Your Location")">Change Location</button>
  </div>
</template>

<script setup>
const { weatherWidgetStore } = useWeatherWidgetComposable();
</script>
```

Also you can set default location through nuxt config:

```vue
export default defineNuxtConfig({
  modules: [
    'weather-widget-osoroka',
  ],
  ...
  runtimeConfig: {
    public: {
      defaultLocation: 'Kiev'
    }
  },
})
```
### App link : https://dummy-app-khaki.vercel.app/
