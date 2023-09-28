import { NavLink } from 'react-router-dom';

function Header() {
    const activeLink = 'brown-text right nav-list__link active';
    const normalLink = 'brown-text right nav-list__link';
    return (
        <nav className='orange lighten-4'>
            <div className='nav-wrapper'>
                <NavLink to='/' className='brand-logo brown-text center logo'>
                    React Food
                </NavLink>
                <NavLink
                    to='/about'
                    className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to='/contacts'
                    className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                    }
                >
                    Contacts
                </NavLink>
            </div>
        </nav>
    );
}

export { Header };
