import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='orange lighten-4'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo brown-text center'>
                    React Food
                </Link>
                <Link to='/about' className='brown-text right about '>
                    About
                </Link>
                <Link to='/contacts' className='brown-text right contacts'>
                    Contacts
                </Link>
            </div>
        </nav>
    );
}

export { Header };
