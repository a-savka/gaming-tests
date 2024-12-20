
import { getKingGameConfig } from './config';

export class KingGameManager {

  private game: Phaser.Game;

  constructor(parentId: string) {
    this.game = new Phaser.Game(getKingGameConfig(parentId));
  }

  public destroy() {
    this.game.destroy(true);
  }

}
