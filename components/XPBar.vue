<template>
	<header class="pb-10 flex items-center">
		<p class="text-sm">
			{{ `${xp.start} xp` }}
		</p>
		<div class="mx-4 lg:mx-6 flex-1 bg-gray-50 h-1 rounded-md">
			<div class="relative bg-green-500 h-1" :style="{ width: `${getCurrentXpPercentage}%` }">
				<p class="text-sm absolute -right-4 w-max top-2">
					{{ `${xp.current} xp (${getCurrentXpPercentage}%)` }}
				</p>
			</div>
		</div>
		<p class="text-sm">
			{{ `${xp.end} xp` }}
		</p>
	</header>
</template>

<script>
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';


export default Vue.extend({
	name: 'XPBar',
   computed: 
   {
      ...mapState('challenges', ['xp']),
      ...mapGetters('challenges', ['getCurrentXpPercentage'])
   }

});

</script>
