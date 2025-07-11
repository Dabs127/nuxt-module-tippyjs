<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      margin-top: 300px;
    "
  >
    <span style="width: 150px; text-align: center; margin-bottom: 100px"
      >Este es un ejmplo simplemente del funcionamiento del composable
      useMultipleTippies que te permite compartir estilos con multiples
      elementos de html para no repetir codigo</span
    >
    <div style="display: flex; gap: 200px">
      <button class="tippy-target" data-tippy-content="Este es el botón 1">
        Botón 1
      </button>
      <button class="tippy-target" data-tippy-content="Este es el botón 2">
        Botón 2
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMultipleTippies } from "../../../src/runtime/composables/useMultipleTippies";

useMultipleTippies(".tippy-target", {
  placement: "bottom",
  animation: "scale",
  theme: "tomato",
  delay: [100, 200],
});
</script>

<style>
.tippy-box[data-theme~="tomato"] {
  background-color: tomato;
  color: yellow;
}
</style>
