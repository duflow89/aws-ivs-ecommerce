import { useEffect, useRef } from 'react';
import type * as IVSPlayerTypes from 'amazon-ivs-player';

interface Props {
  defaultPlaybackUrl: string;
}

const { isPlayerSupported, create, PlayerEventType } = window.IVSPlayer;

const Player = ({ defaultPlaybackUrl }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null!);
  const player = useRef<IVSPlayerTypes.MediaPlayer | null>(null);

  useEffect(() => {
    if (isPlayerSupported) {
      // IVS Player initialization
      player.current = create();
      console.log(`IVS Player version: ${player.current.getVersion()}`);
      player.current.attachHTMLVideoElement(videoRef.current);

      // Player state change event listeners
      const { ERROR } = PlayerEventType;

      const onPlayerError = (err: IVSPlayerTypes.PlayerError) =>
        console.warn('Player Event - ERROR:', err);

      player.current.addEventListener(ERROR, onPlayerError);

      // Stream set-up and play
      player.current.load(defaultPlaybackUrl);
      // player.current.setVolume(0.5)
      player.current.play();

      return () => {
        player.current?.removeEventListener(ERROR, onPlayerError);
      };
    }
    return () => {};
  }, [defaultPlaybackUrl]);

  if (!isPlayerSupported) {
    console.warn('The current browser does not support the IVS player');
    return null;
  }

  return (
    <video ref={videoRef} controls playsInline>
      <track kind='captions' />
    </video>
  );
};

export default Player;
