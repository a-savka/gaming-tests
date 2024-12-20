import { FC, useEffect } from "react";

import "./king-game.page.scss";
import { KingGameManager } from "../../phaser/king-game/king.game-manager";


const KingGamePage: FC = () => {

  useEffect(() => {
    const manager = new KingGameManager('kingGameContainer');
    return () => {
      manager.destroy();
    }
  });

  return <div className="app-page">
    <h3>King Game</h3>
    <div id="kingGameContainer" className="king-game-container">
    </div>
  </div>
}

export default KingGamePage;