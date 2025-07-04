import React from 'react';
import { GrDocumentMissing } from "react-icons/gr";

import AppHeader from '../../components/AppComponents/AppHeader';
import AppFooter from '../../components/AppComponents/AppFooter';

const PageNotFound: React.FC = () => {
    return (
        <>
            <AppHeader />
            <div className='page-display page-not-found'>
                <div className='pnf-symbol'><GrDocumentMissing/></div>
                <div className='pnf-tag'>Page Not Found</div>
            </div>
            <AppFooter />
        </>
  )
}

export default PageNotFound;
