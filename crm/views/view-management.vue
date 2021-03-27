<template>
  <div class="content">
    <p>Management component</p>

    <p>{{checked}}</p>
    <w-checkbox v-model="checked" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const checked = ref(false);
    return {
      checked
    };
  }
});
</script>