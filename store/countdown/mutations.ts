import { IMutations } from './types';


export const MINUTES = 0.05;

export default {
   setTime: (state, time) => {
      state.time = time;
   },
   
   resetTime: (state) => {
      state.time = MINUTES * 60;
   },
   
   setIsActive: (state, isActive) => {
      state.isActive = isActive;
   },
   
   setHasCompleted: (state, hasCompleted) => {
      state.hasCompleted = hasCompleted;
   }, 
} as IMutations;
