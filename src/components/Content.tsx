import React, {FC} from 'react';
import { MainLayoutProps } from '../layouts/MainLayout';

const Content :FC<MainLayoutProps>= ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export default Content;