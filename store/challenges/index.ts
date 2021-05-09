import challenges from '~/assets/challenges/data';
import { IState, IGetters, IMutations } from './types';


export const state = (): IState => ({
   level: 0,
   xp: {
      current: 32,
      start: 0,
      end: 64
   },

   completedChallenges: 0,
   currentChallengeIndex: null,
   isLevelUpModalOpened: false,
   challenges
});

// export const getters = (): IGetters => ({
//    getChallengeLength: state => state.challenges.length,
//    getCurrentXpPercentage: state => Number(((state.xp.current / state.xp.end) * 100).toFixed(2)),

//    getCurrentChallenge: state => 
//       (typeof state.currentChallengeIndex === 'number')
//       ? state.challenges[state.currentChallengeIndex]
//       : null  
// });

// export const mutations: IMutations = {
//    setCurrentChallengeIndex: (state, index) => {
//       state.currentChallengeIndex = index;
//    },

//    setIsLevelUpModalOpened: (state, isLevelUpModalOpened) => {
//       state.isLevelUpModalOpened = isLevelUpModalOpened;
//    },

//    completeChallenge: (state, XPAmount) => {
//       const { current, end } = state.xp;
//       const totalXP = XPAmount + current;
//       const shoudLevelUp = totalXP >= end;

//       if (shoudLevelUp) 
//       {
//          const XPRemaining = totalXP - end;
//          const XPToNextLevel = Math.pow((state.level + 1) * 4, 2);

//          state.xp = {
//             current: XPRemaining,
//             start: 0,
//             end: XPToNextLevel
//          };

//          state.level += 1;
//          state.isLevelUpModalOpened = true;
//       }
//       else {
//         state.xp = {
//            ...state.xp,
//            current: totalXP
//         } 
//       }
//    },

//    saveCookieData: (state, cookie) => {
//       state.level = cookie.level;
//       state.xp = cookie.xp;
//       state.completedChallenges = cookie.completedChallenges;
//    }
// };
