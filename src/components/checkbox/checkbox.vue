<template>
  <label class="well-checkbox">
    <input id="checkbox" type="checkbox" :checked="isChecked" @change="change" />
    <span class="checkmark"></span>
  </label>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: "Checkbox",
  props: {
		modelValue: {},
    val: { type: String }
  },
  setup(props, context) {

    const isChecked = computed(() =>  {
      if (typeof props.modelValue === "boolean") {
        return props.modelValue;
			}
      const value: Array<string> = props.modelValue as string[];
      return value && props.val ? value.includes(props.val) : false;
    });

    const change = () => {
      if (typeof props.modelValue === "boolean") {
        const value = !props.modelValue as boolean;
        context.emit('update:modelValue', value);
      } else {
        //  number of checkboxes
        if (props.modelValue && props.val) {
          const value: Array<string> = props.modelValue as string[];
          const found = value.indexOf(props.val);
          if (found !== -1) {
            value.splice(found, 1);
          } else {
            value.push(props.val);
          }
        }
      }
      context.emit("change", props.modelValue);
    };

    return {
      change,
      isChecked
    }
  }
});
</script>
