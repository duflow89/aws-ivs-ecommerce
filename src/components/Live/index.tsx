import LiveHeader from './LiveHeader';
import Player from './Player';

const Live = () => {
  const { isPlayerSupported } = window.IVSPlayer;
  console.log(isPlayerSupported);

  return (
    <div className='live'>
      <LiveHeader />
      <div className='live-video'>
        <Player defaultPlaybackUrl='https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.YtnrVcQbttF0.m3u8' />
      </div>
    </div>
  );
};

export default Live;
