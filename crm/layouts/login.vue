<template>
  <div class="login">
    <w-app-management />

    <w-desktop :data="desktop"></w-desktop>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { DesktopProps, FrameProps } from "@/api";

export default defineComponent({
  name: "Login",
  setup() {
    const desktop = ref<DesktopProps>({
      active: true,
      frames: [],
      components: []
    });
    const height = 270;
    const width = 450;

    onMounted(() => {
      const frame: FrameProps = {
        id: 'login',
        top: (window.innerHeight - height) / 2,
        left: (window.innerWidth - width) / 2,
        width: width,
        height: height,
        active: true,
        resizable: false,
        closeable: false,
        moveable: false,
      };
      desktop.value.frames.push(frame);
    });

    return {
      desktop
    };
  }
});
</script>

<style lang="less">
@import "../../src/styles/index.less";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
