// composables/useMultipleTippies.ts
import tippy from 'tippy.js'
import type { Props as TippyOptions } from 'tippy.js'
import { onMounted } from 'vue'

export function useMultipleTippies(selector: string, options?: Partial<TippyOptions>) {
  onMounted(() => {
    tippy(selector, {
      ...options,
    })
  })
}
