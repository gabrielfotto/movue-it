<template>
	<div class="flex justify-between items-center pb-5 border-b-2 border-gray-line mt-8 lg:mt-14 font-medium">
		<p class="text-lg">Completed challenges</p>
		<p class="text-2xl">{{ getCompletedChallenges }}</p>
	</div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';


export default Vue.extend({
	name: 'CompletedChallenges',
	computed: mapState('challenges', ['getCompletedChallenges'])

});

</script>
