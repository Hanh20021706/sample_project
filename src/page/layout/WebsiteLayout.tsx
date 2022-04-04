import React from 'react'
import { Outlet } from 'react-router-dom';
import FooterClient from '../../components/FooterClient';
import HeaderClient from '../../components/HeaderClient';

type Props = {};

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <HeaderClient />
          
            <main >
                <Outlet />
            </main>
            <FooterClient />
        </div>
    )
}

export default WebsiteLayout
