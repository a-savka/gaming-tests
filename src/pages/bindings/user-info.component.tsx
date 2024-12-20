import { FC } from "react";
import { User } from "./model/user.model";
import { useModelUpdates } from "./hooks/use-model-updates.hook";

interface Props {
    user: User;
}

const UserInfo: FC<Props> = ({ user }) => {
    const stateId = useModelUpdates(user);

    const updateEmail = () => {
        user.email = `john${stateId}@doe.com`;
    }

    return <div>
        <ul>
            <li>{ user.userName }</li>
            <li>{ user.email }</li>
            <li>{ user.ageInSeconds }</li>
            <li>{ stateId }</li>
            <li><button type="button" onClick={ updateEmail }>Update email</button></li>
        </ul>
    </div>
}

export default UserInfo;
