<template>
   <p class="w-1/2 flex gap-x-1">
      <span 
         class="w-1/2 bg-white rounded-md flex items-center justify-center py-3"
         v-for="(digit, index) in splittedDigits" 
         :key="index"
      >
         {{ digit }}
      </span>
   </p>
</template>

<script lang="ts">
import Vue from 'vue';
import { splitValue } from '~/utils';


export default Vue.extend({
   name: 'CountdownDigit',
   props: {
      digit: {
         type: Number,
         required: true
      }
   },

   computed: {
      splittedDigits(): string[] {
         return splitValue(this.digit);
      }
   }
});

</script>
