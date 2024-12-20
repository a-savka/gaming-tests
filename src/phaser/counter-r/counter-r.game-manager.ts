
import Phaser from 'phaser';
import store from '../../state';
import { increment } from '../../state/counter-r/counterRSlice';

export default class CounterRGameManager {
  private game: Phaser.Game | null = null;
  private counterText: Phaser.GameObjects.Text | null = null;
  private unsubscribe: (() => void) | null = null;

  constructor(containerId: string) {
    const that = this;
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: containerId,
      scene: {
        preload: function() { that.preload(this) },
        create: function() { that.create(this) },
      },
    });
  }

  private preload(scene: Phaser.Scene): void {
    scene.load.setBaseURL('https://labs.phaser.io');
    scene.load.image('logo', 'assets/sprites/phaser3-logo.png');
  }

  private create(scene: Phaser.Scene): void {
    const logo = scene.add.image(400, 300, 'logo');
    logo.setInteractive();

    logo.on('pointerdown', () => {
      store.dispatch(increment());
    });

    const current = store.getState().counter.value;

    this.counterText = scene.add.text(400, 50, `Counter: ${ current }`, {
      font: '32px Arial',
      color: '#ffffff',
    }).setOrigin(0.5, 0.5);

    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      this.counterText?.setText(`Counter: ${state.counter.value}`);
    });

  }

  destroy(): void {
    this.game?.destroy(true);
    this.unsubscribe?.();
    this.game = null;
  }
}
