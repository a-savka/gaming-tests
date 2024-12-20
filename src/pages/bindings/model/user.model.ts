import { ObservableModelBase } from "./observable-model-base";

export class User extends ObservableModelBase {

    private _timerId: number | null = null;

    private _userName: string;
    private _ageInSeconds: number;
    private _email: string;


    constructor(
        userName: string,
        ageInSeconds: number,
        email: string
    ) {
        super();
        this._userName = userName;
        this._ageInSeconds = ageInSeconds;
        this._email = email;
        this.startTimer();
    }

    public get userName() {
        return this._userName;
    }

    public set userName(value: string) {
        this._userName = value;
        this.notify();
    }

    public get ageInSeconds() {
        return this._ageInSeconds;
    }

    public set ageInSeconds(value: number) {
        this._ageInSeconds = value;
        this.notify();
    }

    public get email() {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
        this.notify();
    }

    private startTimer() {
        this.stopTimer();
        this._timerId = setInterval(() => {
            this.ageInSeconds++;
        }, 1000);
    }

    private stopTimer() {
        if (this._timerId !== null) {
            clearTimeout(this._timerId);
        }
    }
}
