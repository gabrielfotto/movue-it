import { IState, IGetters, IMutations } from './types';
import { MINUTES } from './mutations';



export const state = (): IState => ({
   time: MINUTES * 60,
   isActive: false,
   hasCompleted: false
});

// export const getters: IGetters = {
//    getMinutes: state => Math.floor(state.time / 60),
//    getSeconds: state => state.time % 60
// };

// export const mutations: IMutations = {
//    setTime: (state, time) => {
//       state.time = time;
//    },
   
//    resetTime: (state) => {
//       state.time = MINUTES * 60;
//    },
   
//    setIsActive: (state, isActive) => {
//       state.isActive = isActive;
//    },
   
//    setHasCompleted: (state, hasCompleted) => {
//       state.hasCompleted = hasCompleted;
//    }, 
// };
