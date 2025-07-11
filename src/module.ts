import {
  defineNuxtModule,
  createResolver,
  addComponent,
  addImports,
  addPlugin,
} from "@nuxt/kit";

import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  importThemes: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-tippyjs",
    configKey: "tippyJs",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    importThemes: false
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    const nuxtOptions = _nuxt.options;

    const moduleOptions: ModuleOptions = defu(
      nuxtOptions.runtimeConfig.public.tippyJs || {},
      {
        ..._options
      }
    )

    nuxtOptions.runtimeConfig.public.tippyJs = moduleOptions;
    
    if(moduleOptions.importThemes){
      addPlugin(resolver.resolve("./runtime/themes-plugin"))
    }

    addComponent({
      name: "TippyButton",
      filePath: resolver.resolve("./runtime/components/TippyButton"),
    });

    addImports({
      name: "useMultipleTippies",
      as: "useMultipleTippies",
      from: resolver.resolve("runtime/composables/useMultipleTippies"),
    });
  },
});
