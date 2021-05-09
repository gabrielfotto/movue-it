<template>
   <section class="flex flex-col flex-1 justify-center items-center py-6 px-10 md:px-16">
      <header class="w-full pb-6 border-b-2 border-background">
         <h2 class="text-xl text-blue font-semibold text-center">
            {{ `Win ${amount} xp` }}
         </h2>
      </header>
      <main class="flex flex-col flex-1 justify-center items-center mt-6">
         <img :src="`icons/${type}.svg`" :alt="type" :style="{ minHeight: '70px' }">
         <h1 class="font-semibold text-3xl text-title mt-6 mb-2">
            Work out
         </h1>
         <p class="text-center text-base leading-6">
            {{ description }}
         </p>
      </main>
      <footer class="flex w-full gap-x-2">
         <button class="button failed" @click="resetChallenges">
            Failed
         </button>
         <button class="button succeeded" @click="challengeSucceeded">
            Completed
         </button>
      </footer>
   </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';

import { IChallenge } from '~/store/challenges/types';


export default Vue.extend<unknown, any, unknown, IChallenge>({
   props: {
      type: {
         type: String,
         required: true
      },
      description: {
         type: String,
         required: true
      },
      amount: {
         type: Number,
         required: true
      }
   },

   computed: {
      ...mapState('challenges', ['level', 'xp', 'completedChallenges'])
   },

   methods: {
      ...mapMutations({
         resetTime: 'countdown/resetTime',
         setIsActive: 'countdown/setIsActive',
         setHasCompleted: 'countdown/setHasCompleted',
         setCurrentChallengeIndex: 'challenges/setCurrentChallengeIndex',
         completeChallenge: 'challenges/completeChallenge'
      }),

      resetChallenges() {
         this.resetTime();
         this.setIsActive(false);
         this.setHasCompleted(false);
         this.setCurrentChallengeIndex(null);
      },

      challengeSucceeded() {
         this.resetChallenges();
         this.completeChallenge(this.amount);
         
      }
   }
})

</script>
