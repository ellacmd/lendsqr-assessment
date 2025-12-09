import { Link } from 'react-router-dom';
import searchIcon from '@/assets/search.svg';
import notificationIcon from '@/assets/notification.svg';
import avatarImg from '@/assets/avatar.svg';
import menuIcon from '@/assets/menu.svg';
import closeIcon from '@/assets/close.svg';
import logoSrc from '@/assets/lendsqr-logo.svg';
import './Header.scss';
import chevronDownIcon from '@/assets/chevron-down.svg';

type HeaderProps = {
    onMenuClick?: () => void;
    sidebarOpen?: boolean;
};

const Header = ({ onMenuClick, sidebarOpen = false }: HeaderProps) => {
    return (
        <header className='app-header'>
            <Link
                to='/dashboard'
                className='app-header__logo app-header__logo--mobile'>
                <img src={logoSrc} alt='Lendsqr' />
            </Link>

            <Link
                to='/dashboard'
                className='app-header__logo app-header__logo--desktop'>
                <img src={logoSrc} alt='Lendsqr' />
            </Link>

            <button
                type='button'
                className='app-header__menu'
                aria-label={sidebarOpen ? 'Close menu' : 'Menu'}
                onClick={onMenuClick}>
                <img src={sidebarOpen ? closeIcon : menuIcon} alt='' />
            </button>
            <div className='app-header__search'>
                <input
                    type='search'
                    placeholder='Search for anything'
                    className='app-header__search-input'
                />
                <button type='submit' className='app-header__search-button'>
                    <img src={searchIcon} alt='Search' />
                </button>
            </div>

            <nav className='app-header__actions'>
                <a href='/' className='app-header__docs'>
                    Docs
                </a>

                <button
                    type='button'
                    className='app-header__notification'
                    aria-label='Notifications'>
                    <img src={notificationIcon} alt='' />
                </button>

                <div className='app-header__profile'>
                    <img
                        src={avatarImg}
                        alt='Adedeji'
                        className='app-header__avatar'
                    />
                    <div className='app-header__profile-text'>
                        <span className='app-header__profile-name'>
                            Adedeji{' '}
                            <img
                                src={chevronDownIcon}
                                alt=''
                                className='app-header__icon'
                            />
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
