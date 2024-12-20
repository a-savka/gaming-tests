import { FC } from "react";
import { User } from "./model/user.model";
// import { useModelUpdates } from "./hooks/use-model-updates.hook";
import { useThrottledModelUpdates } from "./hooks/use-throttled-model-updates";

interface Props {
    user: User;
}

const UserInfo: FC<Props> = ({ user }) => {
    // const stateId = useModelUpdates(user);
    const stateId =  useThrottledModelUpdates(user, 500);

    const updateEmail = () => {
        user.email = `john${stateId}@doe.com`;
    }

    return <div>
        <ul>
            <li>{ user.userName }</li>
            <li>{ user.email }</li>
            <li>{ user.ageInSeconds }</li>
            <li>{ user.stateId }</li>
            <li><button type="button" onClick={ updateEmail }>Update email</button></li>
        </ul>
    </div>
}

export default UserInfo;
