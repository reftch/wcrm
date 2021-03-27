<template>
  <div class="app">
    <w-desktop-management :data="data" />
    <w-app-management />

    <span v-for="desktop in data.desktops" :key="desktop.id">
      <transition name="fade" mode="out-in" appear>
        <w-desktop v-if="desktop.active" :data="desktop"></w-desktop>
      </transition>
    </span>

  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { DesktopManagementProps } from '@/api';
import { views } from '../globalViews';

export default defineComponent({
  name: "Crm",
  setup() {
    const data = ref<DesktopManagementProps>({ desktops: [], components: views });

    return {
      data
    };
  }
});
</script>
