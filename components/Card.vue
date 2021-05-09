<template> 
   <div class="bg-white rounded-md flex flex-1 w-full mt-8 lg:mt-0 shadow-sm">
      <Challenge v-if="getCurrentChallenge" v-bind="getCurrentChallenge" />
      <StartCycle v-else/>
      <LevelUpModal />
   </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import Challenge from '~/components/Challenge.vue';
import StartCycle from '~/components/StartCycle.vue';
import LevelUpModal from '~/components/LevelUpModal.vue';


export default Vue.extend({
   name: 'Card',
   components: {
      Challenge,
      StartCycle,
      LevelUpModal
   },

   computed: {
      ...mapGetters('challenges', ['getCurrentChallenge'])
   }
})

</script>
