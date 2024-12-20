
export interface ObservableModel {
    subscribe: (listener: () => void) => void;
    unsubscribe: (listener: () => void) => void
    stateId: number;
}
