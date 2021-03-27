<template>
  <div class="frame" :class="{'active': data.active }" :style="styles">
    <div 
      v-if="data.resizable"
      class="crop-line crop-top-line"
      @mousedown="mousedown($event, 'top')"
      @touchstart="mousedown($event, 'top')"
    ></div>
    <div
      v-if="data.resizable"
      class="crop-line crop-right-line"
      @mousedown="mousedown($event, 'right')"
      @touchstart="mousedown($event, 'right')"
    ></div>
    <div
      v-if="data.resizable"
      class="crop-line crop-bottom-line"
      @mousedown="mousedown($event, 'bottom')"
      @touchstart="mousedown($event, 'bottom')"
    ></div>
    <div
      v-if="data.resizable"
      class="crop-line crop-left-line"
      @mousedown="mousedown($event, 'left')"
      @touchstart="mousedown($event, 'left')"
    ></div>

    <div
      v-if="data.resizable"
      class="crop-corner crop-top-left-corner"
      @mousedown="mousedown($event, 'top-left-corner')"
      @touchstart="mousedown($event, 'top-left-corner')"
    ></div>
    <div
      v-if="data.resizable"
      class="crop-corner crop-top-right-corner"
      @mousedown="mousedown($event, 'top-right-corner')"
      @touchstart="mousedown($event, 'top-right-corner')"
    ></div>
    <div
      v-if="data.resizable"
      class="crop-corner crop-bottom-right-corner"
      @mousedown="mousedown($event, 'bottom-right-corner')"
      @touchstart="mousedown($event, 'bottom-right-corner')"
    ></div>
    <div
      v-if="data.resizable"
      class="crop-corner crop-bottom-left-corner"
      @mousedown="mousedown($event, 'bottom-left-corner')"
      @touchstart="mousedown($event, 'bottom-left-corner')"
    ></div>

    <div
      v-if="!!data.title"
      class="title"
      :class="{'moving': (operation === 'moving' && data.moveable), 'active-title': data.active}"
      @mousedown="mousedown($event, 'moving')"
      @touchstart="mousedown($event, 'moving')"
    >
      {{data.title}}
      <span v-if="data.closeable" class="right-part">
        <w-button type="icon-only" icon="icon-maximize" />
        <w-button type="icon-only" icon="icon-close" @click="$emit('close-frame', data)" />
      </span>
    </div>

    <div>
      <component :is="data.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, SetupContext } from "vue";
import Button from "@/components/button";
import { FrameProps } from "@/api";

const useMouse = (data: FrameProps, context: SetupContext) => {
  const correctionX = ref(0);
  const correctionY = ref(0);
  const operation = ref("");

  const MIN_WIDTH = 200;
  const MIN_HEIGHT = 50;

  const validate = () => {
    if (data.width < MIN_WIDTH) {
      data.width = MIN_WIDTH;
    }
    if (data.height < MIN_HEIGHT) {
      data.height = MIN_HEIGHT;
    }
  };

  const moveFrame = (x: number, y: number) => {
    if (data.moveable) {
      data.top = y - correctionY.value;
      data.left = x - correctionX.value;
    }
  };

  const moveTop = (y: number) => {
    const top = y - correctionY.value;
    data.height += data.top - top;
    data.top = y - correctionY.value;
  };

  const moveLeft = (x: number) => {
    const left = x - correctionX.value;
    data.width += data.left - left;
    data.left = x - correctionX.value;
  };

  const moveBottom = (y: number) => {
    data.height = y - data.top;
  };

  const moveRight = (x: number) => {
    data.width = x - data.left;
  };

  const mousemove = (event: MouseEvent | TouchEvent) => {
    const x =
      event instanceof MouseEvent
        ? (event as MouseEvent).x
        : (event as TouchEvent).touches[0].clientX;
    const y =
      event instanceof MouseEvent
        ? (event as MouseEvent).y
        : (event as TouchEvent).touches[0].clientY;

    if (operation.value === "moving") {
      moveFrame(x, y);
    } else if (operation.value === "top") {
      moveTop(y);
    } else if (operation.value === "left") {
      moveLeft(x);
    } else if (operation.value === "bottom") {
      moveBottom(y);
    } else if (operation.value === "right") {
      moveRight(x);
    } else if (operation.value === "top-left-corner") {
      moveTop(y);
      moveLeft(x);
    } else if (operation.value === "top-right-corner") {
      moveTop(y);
      moveRight(x);
    } else if (operation.value === "bottom-left-corner") {
      moveLeft(x);
      moveBottom(y);
    } else if (operation.value === "bottom-right-corner") {
      moveRight(x);
      moveBottom(y);
    }
    validate();
  };

  const mouseup = () => {
    window.removeEventListener("mouseup", mouseup);
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("touchmove", mousemove);
    window.removeEventListener("touchend", mouseup);
    operation.value = "";
  };

  const mousedown = (event: MouseEvent | TouchEvent, type: string) => {
    context.emit("active", data);
    operation.value = type;
    const x =
      event instanceof MouseEvent
        ? (event as MouseEvent).x
        : (event as TouchEvent).touches[0].clientX;
    const y =
      event instanceof MouseEvent
        ? (event as MouseEvent).y
        : (event as TouchEvent).touches[0].clientY;

    correctionX.value = x - data.left;
    correctionY.value = y - data.top;

    window.addEventListener("mouseup", mouseup);
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("touchmove", mousemove);
    window.addEventListener("touchend", mouseup);
  };

  return {
    mousedown,
    operation
  };
};

export default defineComponent({
  name: "Frame",
  props: {
    data: {
      type: Object as PropType<FrameProps>,
      default: {
        id: 0,
        title: "",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        active: true,
        resiable: true,
        moveable: true,
        closeable: true
      }
    }
  },
  setup(props, context: SetupContext) {
    const styles = computed(() => {
      const zIndex = props.data.active ? "1" : "-999";
      return `top: ${props.data.top}px; left: ${props.data.left}px; 
				width: ${props.data.width}px; height: ${props.data.height}px; 
				z-index: ${zIndex}`;
    });

    const contentStyles = computed(() => {
      return `height: ${props.data.height - 30}px;`;
    });

    return {
      styles,
      contentStyles,
      ...useMouse(props.data, context)
    };
  },
  components: {
    "w-button": Button
  }
});
</script>
