<template>
  <div class="well-desktop-management">
    <div class="logo">WELL</div>
    <w-divider mode="vertical" />
    <div v-if="data.desktops.length > 0" class="title">{{title}}</div>
    <w-divider v-if="data.desktops.length > 0" mode="vertical" />
    <w-button id="back-btn" type="icon-only" icon="icon-back" :disabled="isBackDisabled" @action="back" />
    <w-button id="forward-btn" type="icon-only" icon="icon-forward" :disabled="isForwardDisabled" @action="forward" />
    <w-divider mode="vertical" />
    <w-button id="add-btn" type="icon-only" icon="icon-plus" @action="add" />
    <w-button id="remove-btn" type="icon-only" icon="icon-trash" :disabled="data.desktops.length === 0" @action="remove" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  onBeforeMount,
} from "vue";
import { DesktopManagementProps } from "@/api";
import Button from "@/components/button";
import Divider from "@/components/divider";

const useDesktopManagement = (data: DesktopManagementProps) => {
  const isBackDisabled = computed(() => {
    return data.desktops.length < 2 || data.desktops[0].active;
  });

  const isForwardDisabled = computed(() => {
    return (
      data.desktops.length < 2 || data.desktops[data.desktops.length - 1].active
    );
  });

  const add = () => {
    data.desktops.forEach(d => (d.active = false));
    const desktop = { active: true, frames: [], components: data.components };
    data.desktops.push(desktop);
  };

  const remove = () => {
    const idx = data.desktops.findIndex(d => d.active);
    if (idx > -1) {
      data.desktops.splice(idx, 1);
      if (data.desktops.length > 0) {
        const newIdx = data.desktops.length === 1 || idx < 1 ? 0 : idx - 1;
        data.desktops[newIdx].active = true;
      }
    }
  };

  const back = () => {
    for (let i = 0; i < data.desktops.length; i++) {
      if (data.desktops[i].active) {
        data.desktops[i].active = false;
        data.desktops[i - 1].active = true;
        break;
      }
    }
  };

  const forward = () => {
    for (let i = 0; i < data.desktops.length; i++) {
      if (data.desktops[i].active) {
        data.desktops[i].active = false;
        data.desktops[i + 1].active = true;
        break;
      }
    }
  };

  return {
    add,
    remove,
    back,
    forward,
    isBackDisabled,
    isForwardDisabled
  };
};

export default defineComponent({
  name: "DesktopManagement",
  props: {
    data: {
      type: Object as PropType<DesktopManagementProps>,
      default: { desktops: [] }
    }
  },
  setup(props) {
    const {
      back,
      forward,
      isBackDisabled,
      isForwardDisabled
    } = useDesktopManagement(props.data);

    onBeforeMount(() => {
      document.body.addEventListener("keydown", e => {
        if (e.key === "ArrowRight" && e.shiftKey === true && !isForwardDisabled.value) {
          forward();
        } else if (e.key === "ArrowLeft" && e.shiftKey === true && !isBackDisabled.value) {
          back();
        }
      });
    });

    const title = computed(() => {
      const idx = props.data.desktops.findIndex(d => d.active);
      return idx !== -1 ? `Desktop ${idx + 1}` : "";
    });

    return {
      title,
      ...useDesktopManagement(props.data)
    };
  },
  components: {
    "w-button": Button,
    "w-divider": Divider
  }
});
</script>