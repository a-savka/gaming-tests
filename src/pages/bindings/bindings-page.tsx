import { FC, useMemo } from "react";

import "./bindings-page.scss";
import { User } from "./model/user.model";
import UserInfo from "./user-info.component";

const BindingsPage: FC = () => {

  const user = useMemo(() => {
    return new User(
        'John',
        100500,
        'john@doe.com'
    )
  }, []);

  return <div className="app-page">
    <h3>Bindings test</h3>
    <UserInfo user={ user } />
  </div>
}

export default BindingsPage;