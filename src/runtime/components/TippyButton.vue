<template>
  <!-- disabled + workWhileDisabled -->
  <span v-if="props.disabled && props.workWhileDisabled" ref="wrapperRef">
    <button disabled v-bind="$attrs">
      <slot />
    </button>
  </span>

  <!-- disabled + no work -->
  <button
    v-else-if="props.disabled && !props.workWhileDisabled"
    disabled
    v-bind="$attrs"
  >
    <slot />
  </button>

  <!-- normal -->
  <button v-else ref="wrapperRef" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import tippy from "tippy.js";
import type { Instance, Props as TippyOptions } from "tippy.js";
import { ref, watch, nextTick, onMounted } from "vue";

defineOptions({ inheritAttrs: false });

const props = defineProps<{
  content: string;
  workWhileDisabled: boolean;
  disabled?: boolean;
  tippyOptions?: Partial<TippyOptions>;
}>();

const wrapperRef = ref<HTMLElement | null>(null);
let instance: Instance | null = null;

const createTippy = () => {
  if (wrapperRef.value && props.content) {
    instance = tippy(wrapperRef.value, {
      content: props.content,
      theme: 'light',
      interactive: props.workWhileDisabled,
      ...props.tippyOptions,
    }) as Instance;
  }
};

const destroyTippy = () => {
  if (instance) {
    instance.destroy();
    instance = null;
  }
};

onMounted(async () => {
  await nextTick();
  createTippy();
});

watch(
  () => props.workWhileDisabled,
  async () => {
    await nextTick();
    destroyTippy();
    createTippy();
  }
);

watch(
  () => props.content,
  (newContent) => {
    if (instance) {
      instance.setContent(newContent);
    }
  }
);
</script>
