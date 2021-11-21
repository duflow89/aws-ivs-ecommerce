import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '~/constants/path';
import LogoImg from '~/resources/images/logo.png';

const Intro = () => (
  <div className='intro'>
    <h1 className='intro-logo'>
      <img src={LogoImg} alt='Ucomp Live Commerce' />
    </h1>
    <Link to={ROUTE_PATH.LIVE} className='intro-live-btn'>
      보러가기
    </Link>
  </div>
);

export default Intro;
