import { Types } from 'phaser';
import { Level1, LoadingScene } from './scenes';

export const getKingGameConfig: (parentId: string) => Types.Core.GameConfig = (parentId: string) => {
  return {
    title: 'Phaser game tutorial',
    type: Phaser.WEBGL,
    parent: parentId,
    backgroundColor: '#351f1b',
    scale: {
      mode: Phaser.Scale.ScaleModes.NONE,
      width: 800,
      height: 600,
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
      },
    },
    render: {
      antialiasGL: false,
      pixelArt: true,
    },
    callbacks: {
      // postBoot: () => {
      //   window.sizeChanged();
      // },
    },
    canvasStyle: `display: block; width: 800px; height: 600px;`,
    autoFocus: true,
    audio: {
      disableWebAudio: false,
    },
    scene: [LoadingScene, Level1],
  };
};
