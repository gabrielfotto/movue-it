import { IGetters } from './types';


export default {
   getMinutes: state => Math.floor(state.time / 60),
   getSeconds: state => state.time % 60
} as IGetters;
