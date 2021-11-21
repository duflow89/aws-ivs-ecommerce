import * as IVSPlayer from 'amazon-ivs-player';

declare global {
  interface Window {
    readonly IVSPlayer: Omit<typeof IVSPlayer, 'create'> & {
      create(): IVSPlayer.MediaPlayer;
    };
  }

  module '*.jpg';
  module '*.jpeg';
  module '*.png';
  module '*.svg';
}
