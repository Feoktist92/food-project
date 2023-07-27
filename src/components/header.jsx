import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className='orange lighten-4'>
            <div className='nav-wrapper'>
                <NavLink to='/' className='brand-logo brown-text center'>
                    React Shop
                </NavLink>

                <NavLink to='/about' className='brown-text right '>
                    About
                </NavLink>

                <NavLink to='/contacts' className='brown-text right contacts'>
                    Contacts
                </NavLink>
            </div>
        </nav>
    );
}

export { Header };
