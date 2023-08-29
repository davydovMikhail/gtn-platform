export enum Status {
    Connect,
    Loader,
    Guess,
    Won,
    Fail
}

export interface MainState {
    loader: boolean;
    notification: string;
    status: Status;
    showOK: boolean;
    games: any[];
}

export enum MainActionTypes {
    SET_LOADER = 'SET_LOADER',
    SET_NOTIFICATION = 'SET_NOTIFICATION',
    SET_SHOW_OK = 'SET_SHOW_OK',
    SET_STATUS = 'SET_STATUS',
    PUSH_GAME = 'PUSH_GAME',
    CLEAR_GAMES = 'CLEAR_GAMES'
} 
interface SetLoaderAction {
    type: MainActionTypes.SET_LOADER;
    payload: boolean;
}
interface SetNotificationAction {
    type: MainActionTypes.SET_NOTIFICATION;
    payload: string;
}
interface SetShowOkAction {
    type: MainActionTypes.SET_SHOW_OK;
    payload: boolean;
}
interface PushGameAction {
    type: MainActionTypes.PUSH_GAME;
    payload: any;
}
interface ClearGamesAction {
    type: MainActionTypes.CLEAR_GAMES;
}
interface SetStatusAction {
    type: MainActionTypes.SET_STATUS;
    payload: Status;
}
export type MainAction = 
    SetLoaderAction |
    SetNotificationAction |
    SetShowOkAction |
    SetStatusAction |
    PushGameAction |
    ClearGamesAction;
