<template>
  <div class="well-frame-management">
    <span v-for="c in data.components" :key="c.id">
      <w-button v-if="c.id !== '-' && !!c.icon" type="icon-only" :icon="c.icon" @action="open(c.id)" />
      <w-divider v-if="c.id === '-'" mode="horizontal" />
    </span>
    <!-- <w-button id="buttons-btn" type="icon-only" icon="icon-click" @action="open('Components')" />
    <w-button id="divider-btn" type="icon-only" icon="icon-divider" @action="open('Divider')" />
    <w-divider mode="horizontal" />
    <w-button id="adjust-btn" type="icon-only" icon="icon-adjust"></w-button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted } from "vue";
import { DesktopProps, FrameProps } from "@/api";
import Button from "@/components/button";
import Divider from "@/components/divider";

export default defineComponent({
  name: "FrameManagement",
  props: {
    data: {
      type: Object as PropType<DesktopProps>,
      default: { frames: [], components: [], active: true }
    }
  },
  setup(props) {
    onMounted(() => {
      // console.log(props.data)
    })

    const open = (id: string) => {
      const frames = props.data.frames;
      frames.forEach(f => f.active = false);
      const frame: FrameProps = {
        id: id,
        title: id,
        top: 50 + Math.floor(Math.random() * 200) + 1,
        left: 0 + Math.floor(Math.random() * 400) + 1,
        width: 900,
        height: 500,
        active: true,
        moveable: true,
        resizable: true,
        closeable: true
      };
      frames.push(frame);
    };

    return {
      open
    };
  },
  components: {
    "w-button": Button,
    "w-divider": Divider
  }
});
</script>