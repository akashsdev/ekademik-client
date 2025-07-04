import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageNotFound from './app/pages/PageNotFound/PageNotFound';
import HomePage from './app/pages/PageNotFound/HomePage/HomePage';

import AppHeader from './app/components/AppComponents/AppHeader';
import AppFooter from './app/components/AppComponents/AppFooter';

const App:React.FC = () => {
  return (
    <>
      {/*--APP IN DISPLAY MODE--*/}
      <div className='app-display'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/*--APP IN WARNING MODE--*/}
      <div className='app-warning'>
        <AppHeader />
        <div className='page-display'>Best viewed in bigger screen</div>
        <AppFooter />
      </div>
    </>
  )
}

export default App;
