import { MutationTree } from 'vuex';


export interface IState {
   time: number;
   isActive: boolean;
   hasCompleted: boolean;
}

export interface IGetters {
   getMinutes: (state: IState) => number;
   getSeconds: (state: IState) => number;
}


export type RootState = ReturnType<() => IState>;

export interface IMutations extends MutationTree<RootState> {
   setTime: (state: IState, time: number) => void;
   resetTime: (state: IState) => void;
   setIsActive: (state: IState, isActive: boolean) => void;
   setHasCompleted: (state: IState, hasCompleted: boolean) => void;
}
