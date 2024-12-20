import { ObservableModel } from "./observable-model";

export class ObservableModelBase implements ObservableModel {

    private _stateId = 0;
    private _listeners: (() => void)[] = [];

    public get stateId() {
        return this._stateId;
    }

    public notify() {
        this._stateId++;
        this._listeners.forEach((listener) => listener());
    }

    public subscribe(listener: () => void) {
        this._listeners.push(listener);
    }

    public unsubscribe(listener: () => void) {
        this._listeners = this._listeners.filter((l) => l !== listener);
    }

}


