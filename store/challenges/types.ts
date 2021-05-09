import { MutationTree } from 'vuex';


export interface XP {
   current: number;
   start: number;
   end: number;
}

export interface IChallenge {
   type: string;
   description: string;
   amount: number;
}

export interface ICookie {
   level: number;
   xp: XP;
   completedChallenges: number;
}

export interface IState {
   level: number;
   xp: XP;

   completedChallenges: number;
   currentChallengeIndex: number | null;

   isLevelUpModalOpened: boolean;
   challenges: IChallenge[];
}

export interface IGetters {
   getCompletedChallenges: (state: IState) => number;
   getChallengesLength: (state: IState) => number;
   getCurrentXpPercentage: (state: IState) => number;
   getCurrentChallenge: (state: IState) => IChallenge | null;
}


export type RootState = ReturnType<() => IState>;

export interface IMutations extends MutationTree<RootState> {
   setCurrentChallengeIndex: (state: IState, index: number) => void;
   setIsLevelUpModalOpened: (state: IState, isLevelUpModalOpened: boolean) => void;
   completeChallenge: (state: IState, amount: number) => void;
   saveCookieData: (state: IState, cookie: ICookie) => void;
}
