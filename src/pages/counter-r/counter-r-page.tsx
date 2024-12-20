import { FC, useEffect } from "react";

import "./counter-r-page.scss";
import CounterRGameManager from "../../phaser/counter-r/counter-r.game-manager";

const CounterRPage: FC = () => {

  useEffect(() => {
    const manager = new CounterRGameManager('phaserContainerR');
    return () => {
      manager.destroy();
    }
  });

  return <div className="app-page">
    <h3>Counter R page</h3>
    <div id="phaserContainerR" className="phaser-container-r">
    </div>
  </div>
}

export default CounterRPage;