import { defineNuxtModule, addPlugin, createResolver, addComponent, installModule, addImportsDir } from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxt-module/weather-widget-osoroka',
    configKey: 'weatherWidgetOsoroka',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  async setup () {
    const resolver = createResolver(import.meta.url);
     
    await installModule('@nuxtjs/tailwindcss', {
      configPath: resolver.resolve('./runtime/tailwind.config'),
    })

    await installModule('@pinia/nuxt', {})

    addPlugin(resolver.resolve('./runtime/plugins/weather-widget.plugin'));

    addComponent({
      name: 'WeatherWidgetComponent',
      filePath: resolver.resolve('./runtime/components/WeatherWidgetComponent.vue')
    });

 
    addImportsDir(resolver.resolve('./runtime/composables'))
  }
})
