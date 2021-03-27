<template>
  <div class="well-desktop">
    <frame-management :data="data" />  

    <frame v-for="frame in data.frames" :key="frame.id" 
      :data="frame" 
      @click="active(frame)"
      @active="active(frame)"
      @close-frame="closeFrame(frame)"
    />
    
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from "vue";
import { DesktopProps, FrameProps } from '@/api';
import Frame from '@/components/frame'
import FrameManagement from '@/components/frame-management'

export default defineComponent({
  name: "Desktop",
  props: { 
    data: { type: Object as PropType<DesktopProps>, default: { frames: [], components: [] }}
  },
  setup(props) {

    onMounted(() => {
      // console.log(props.data);
    })

    const active = (frame: FrameProps) => {
      props.data.frames.forEach(f => (f.active = f.id === frame.id));
    };

    const closeFrame = (frame: FrameProps) => {
      const frames = props.data.frames;
      const idx = frames.findIndex(f => f.id === frame.id);
      if (idx !== -1) {
        frames.splice(idx, 1);
      }
    };

    return {
      active,
      closeFrame
    }
  },
  components: {
    Frame,
    FrameManagement
  }
});

</script>

<style lang="less">
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


</style>
