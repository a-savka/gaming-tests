import { FC, useEffect } from "react";

import "./counter-z-page.scss";
import CounterZGameManager from "../../phaser/counter-z/counter-z.game-manager";

const CounterZPage: FC = () => {

  useEffect(() => {
    const manager = new CounterZGameManager('phaserContainerR');
    return () => {
      manager.destroy();
    }
  });

  return <div className="app-page">
    <h3>Counter Z page</h3>
    <div id="phaserContainerR" className="phaser-container-z">
    </div>
  </div>
}

export default CounterZPage;