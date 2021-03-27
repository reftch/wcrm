<template>
	<div :class="classes" @click="click">
		<span v-if="!!icon" class="btn-icon" :class="icon" />
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"

const prefixCls = 'well-btn';

export default defineComponent({
	name: 'Button',
	props: {
    icon: { type: String },
    size: { type: String, default: 'default' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    type: { type: String, default: 'default' }
  },
	setup(props, context) {

		// default, primary, dashed, text, info, success, warning, error
    const classes = computed(() => {    
      return [`${prefixCls}`, `${prefixCls}-${props.type}`,
        {
          [`${prefixCls}-${props.size}`]: props.size !== 'default',
          [`${prefixCls}-disabled`]: props.disabled,
        }
      ];
    });

    const click = () => {
      if (!props.disabled) {
        context.emit('action');
      }
    }

		return {
			classes,
      click
		}
	}
})
</script>
