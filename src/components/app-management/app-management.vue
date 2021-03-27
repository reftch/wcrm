<template>
	<div class="well-app-management">
		<w-button id="share-btn" type="primary">Share</w-button>
		<w-divider mode="vertical" />
		<w-button id="adjust-btn" type="icon-only" icon="icon-adjust"></w-button>
		<w-button id="global-btn" type="icon-only" icon="icon-global"></w-button>
		<w-divider mode="vertical" />
		<w-button id="search-btn" type="icon-only" icon="icon-search"></w-button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from "@/components/button";
import Divider from "@/components/divider";

export default defineComponent({
	name: 'AppManagement',
	components: {
		'w-button': Button,
		"w-divider": Divider
	}
})
</script>