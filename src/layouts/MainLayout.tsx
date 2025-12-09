import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import './MainLayout.scss';

const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className='main-layout'>
            <Header onMenuClick={toggleSidebar} sidebarOpen={sidebarOpen} />
            <div className='main-layout__body'>
                <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
                {sidebarOpen && (
                    <div
                        className='main-layout__overlay'
                        onClick={closeSidebar}
                    />
                )}
                <main className='main-layout__page'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
