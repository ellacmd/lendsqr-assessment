import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import './MainLayout.scss';

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <Header />
            <div className='main-layout__body'>
                <Sidebar />
                <main className='main-layout__page'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
