import { Example } from "../scenes/example.scene";

export class ExampleGameManager {

  private game: Phaser.Game;

  constructor(parentId: string) {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: Example,
      parent: parentId,
      physics: {
          default: 'arcade',
          arcade: {
              gravity: { y: 200 }
          }
      }
    };
    this.game = new Phaser.Game(config as any);
  }

  public destroy() {
    this.game.destroy(true);
  }

}
