import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ROUTE_PATH } from '~/constants/path';
import Live from './Live';
import Intro from './Intro';

const App = () => (
  <BrowserRouter>
    <div className='wrap'>
      <Routes>
        <Route path={ROUTE_PATH.ROOT} element={<Intro />} />
        <Route path={ROUTE_PATH.LIVE} element={<Live />} />

        {/* Empty Page Redirect */}
        <Route path='*' element={<Intro />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
