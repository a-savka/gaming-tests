import { useEffect, useState } from "react";
import { ObservableModel } from "../model/observable-model";

export function useThrottledModelUpdates(model: ObservableModel, interval: number) {
    const [stateId, setStateId] = useState(model.stateId);

    useEffect(() => {

        let lastUpdate: number = 0;
        let timeoutRef: number = 0; 
        const handleUpdate = () => {
            const now = Date.now();
            if (now - lastUpdate < interval) {
                if (timeoutRef) {
                    clearTimeout(timeoutRef);
                }
                timeoutRef = setTimeout(() => {
                    setStateId(model.stateId);
                    timeoutRef = 0;
                    lastUpdate = Date.now();
                }, interval - (now - lastUpdate));
            } else {
                setStateId(model.stateId);
                lastUpdate = now;
            }

        };
        model.subscribe(handleUpdate);

        return () => {
            model.unsubscribe(handleUpdate);
        };
    }, [model, interval]);

    return stateId;
}
