import { IMutations } from './types';


export default {
   setCurrentChallengeIndex: (state, index) => {
      state.currentChallengeIndex = index;
   },

   setIsLevelUpModalOpened: (state, isLevelUpModalOpened) => {
      state.isLevelUpModalOpened = isLevelUpModalOpened;
   },

   completeChallenge: (state, XPAmount) => {
      const { current, end } = state.xp;
      const totalXP = XPAmount + current;
      const shoudLevelUp = totalXP >= end;

      state.completedChallenges += 1;

      if (shoudLevelUp) 
      {
         const XPRemaining = totalXP - end;
         const XPToNextLevel = Math.pow((state.level + 1) * 4, 2);

         state.xp = {
            current: XPRemaining,
            start: 0,
            end: XPToNextLevel
         };

         state.level += 1;
         state.isLevelUpModalOpened = true;
      }
      else {
        state.xp = {
           ...state.xp,
           current: totalXP
        } 
      }
   },

   saveCookieData: (state, cookie) => {
      state.level = cookie.level;
      state.xp = cookie.xp;
      state.completedChallenges = cookie.completedChallenges;
   }
} as IMutations;
