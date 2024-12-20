import { FC, useEffect } from "react";
import { ExampleGameManager } from "../../phaser/games/example.game-manager";

import "./counter-page.scss";

const CounterPage: FC = () => {

  useEffect(() => {
    const manager = new ExampleGameManager('phaserContainer');
    return () => {
      manager.destroy();
    }
  });

  return <div className="app-page">
    <h3>Counter page</h3>
    <div id="phaserContainer" className="phaser-container">
    </div>
  </div>
}

export default CounterPage;