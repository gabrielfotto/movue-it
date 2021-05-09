<template>
	<div class="min-h-screen max-w-5xl mx-auto flex flex-col px-5 py-8 md:py-10">
		<XPBar />
		<Nuxt />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import XPBar from '~/components/XPBar.vue';


export default Vue.extend({
	name: 'Default',
	components: {
		XPBar
	},

});

</script>

<style scoped>

</style>
