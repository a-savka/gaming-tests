import { useEffect, useState } from "react";
import { ObservableModel } from "../model/observable-model";

export function useModelUpdates(model: ObservableModel) {
    const [stateId, setStateId] = useState(model.stateId);
    useEffect(() => {
        const handleUpdate = () => {
            setStateId(model.stateId);
        };
        model.subscribe(handleUpdate);

        return () => {
            model.unsubscribe(handleUpdate);
        };
    }, [model]);
    return stateId;
}
