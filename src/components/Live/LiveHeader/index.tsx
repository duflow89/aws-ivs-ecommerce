import {
  IoPlayOutline,
  IoVolumeHighOutline,
  IoShareSocialOutline,
  IoCloseOutline,
} from 'react-icons/io5';
import thumbnailImg from '~/resources/images/sample_thumbnail01.jpg';

const LiveHeader = () => (
  <div className='live-header'>
    <div className='live-header-row1'>
      <span className='live-status status-live'>LIVE</span>
      <div className='live-view-count'>
        <IoPlayOutline className='live-view-count-icon' />
        <span>215,516</span>
      </div>
      <div className='live-menu'>
        <button type='button' className='live-menu-btn'>
          <IoVolumeHighOutline />
        </button>
        <button type='button' className='live-menu-btn'>
          <IoShareSocialOutline />
        </button>
        <button type='button' className='live-menu-btn'>
          <IoCloseOutline />
        </button>
      </div>
    </div>

    <div className='live-header-row2'>
      <h1 className='live-title'>위드코로나! 유럽에서의 노마드 라이프를 즐겨 ✈️ 😎</h1>
      <div className='live-bj-thumbnail'>
        <img src={thumbnailImg} alt='인플루언써 썸네일' />
      </div>
      <div className='live-bj'>
        <div className='live-bj-name'>인플루언써</div>
        <button type='button' className='live-bj-follow'>
          Follow
        </button>
      </div>
    </div>
  </div>
);

export default LiveHeader;
