<template>
   <section class="flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-20">
      <div class="flex flex-col w-full lg:w-1/2">
         <Profile />
         <CompletedChallenges />
         <Countdown @complete="getNewChallenge"/>

         <button 
            v-if="hasCountdownCompleted" 
            class="button completed" 
            disabled
         >
            Cycle completed
         </button>

         <button 
            v-else-if="isCountdownActive" 
            class="button abandon" 
            @click="setCountdownState(false)"
         >
            Abandon cycle
         </button>

         <button 
            v-else 
            class="button start" 
            @click="setCountdownState(true)"
         >
            Start a cycle
         </button>
      </div>

      <Card class="w-full lg:w-1/2" id="challenge" />
   </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex';

import Profile from '~/components/Profile.vue';
import CompletedChallenges from '~/components/CompletedChallenges.vue';
import Countdown from '~/components/Countdown.vue';
import Card from '~/components/Card.vue';


import { 
   playAudio, 
   sendNotification,
   getRandomNumber,
   scrollToElement
} from '~/utils';


interface IHead {
   title: string;
}

export default Vue.extend({
   head(): IHead {
      return {
         title: 'Movue.it'
      }
   },

   components: {
      Profile,
      CompletedChallenges,
      Countdown,
      Card
   },

   mounted() {
      if ('Notification' in window) {
         Notification.requestPermission();
      }
   },

   computed: {
      ...mapState({
         hasCountdownCompleted: 'countdown/hasCompleted',
         isCountdownActive: 'countdown/isActive',
      }),

      ...mapGetters({
         getChallengesLength: 'challenges/getChallengesLength'
      })
   },

   methods: {
      ...mapMutations({
         setCountdownIsActive: 'countdown/setIsActive',
         setCountdownHasCompleted: 'countdown/setHasCompleted',
         setCurrentChallengeIndex: 'challenges/setCurrentChallengeIndex'
      }),

      setCountdownState(flag: boolean) 
      {
         this.setCountdownHasCompleted(false);
         this.setCountdownIsActive(flag);
      },

      getNewChallenge() 
      {
         const index = getRandomNumber(0, this.getChallengesLength);
         this.setCountdownHasCompleted(true);
         this.setCurrentChallengeIndex(index);

         if (Notification?.permission === 'granted') {
            playAudio('/notification.mp3');
            sendNotification('New Challenge', 
            {
               body: 'A new challenge has started! Go complete it!',
					icon: '/favicon.png',
            });
         }

         // To mobile
         this.$nextTick(() => {
            scrollToElement('#challenge');
         });   
      }
   }
});

</script>
