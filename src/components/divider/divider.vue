<template>
  <span class="divider">
    <div :class="{'vertical': mode === 'vertical', 'horizontal': mode === 'horizontal'}"></div>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "divider",
  props: {
    mode: String
  }
});
</script>