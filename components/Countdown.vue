<template>
   <div class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani">
		<CountdownDigit :digit="getMinutes" />
		<span class="bg-background px-2">:</span>
		<CountdownDigit :digit="getSeconds" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex';

import CountdownDigit from '~/components/CountdownDigit.vue';


let TIMEOUT: ReturnType<typeof setTimeout>;

export default Vue.extend({
	name: 'Countdown',
	components: {
		CountdownDigit
	},

	computed: {
		...mapState('countdown', [
			'time',
			'isActive'
		]),

		...mapGetters('countdown', [
			'getMinutes',
			'getSeconds'
		])
	},

	methods: {
		...mapMutations('countdown', [
			'setTime',
			'resetTime'
		]),

		run(flag: boolean) {
			if (this.isActive && flag) 
			{
				TIMEOUT = setTimeout(() => {
					this.setTime(this.time - 1);
				},
				1000);
			}
			else {
				clearTimeout(TIMEOUT);
			}
		}
	},

	watch: {
		isActive(newValue: boolean) {
			this.run(newValue);

			if (!newValue) {
				this.resetTime();
			}
		},

		time(newValue: number) {
			if (newValue > 0) {
				this.run(true);
			}
			else {
				this.$emit('complete');
			}
		}
	}
	
});
</script>
