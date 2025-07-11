<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      gap: 50px;
      width: 100%;
      align-items: center;
      margin-top: 300px;
    "
  >
    <span style="width: 200px; text-align: center;"
      >En esta parte se muestra el funcionamiento de que si se encuentra
      disabled el boton, el usuario con un prop puede escoger si el tooltip
      aparece o no</span
    >
    <div>
      <TippyButton
        content="Good boy"
        :work-while-disabled="workWhileDisabledRef"
        :disabled="disabledEnabled"
      >
        Hover me
      </TippyButton>

      <button style="margin: 20px 20px;" @click="workWhileDisabledRef = !workWhileDisabledRef">
        Toggle: {{ workWhileDisabledRef }}
      </button>
      <button @click="disabledEnabled = !disabledEnabled">
        Toggle: {{ disabledEnabled }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const workWhileDisabledRef = ref<boolean>(true);
const disabledEnabled = ref(false);
</script>
