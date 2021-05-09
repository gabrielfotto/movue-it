import { IGetters } from './types';


export default {
   getCompletedChallenges: state => state.completedChallenges,
   getChallengesLength: state => state.challenges.length,
   getCurrentXpPercentage: state => Number(((state.xp.current / state.xp.end) * 100).toFixed(2)),

   getCurrentChallenge: state => 
      (typeof state.currentChallengeIndex === 'number')
      ? state.challenges[state.currentChallengeIndex]
      : null  
} as IGetters;
