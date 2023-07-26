import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='orange lighten-4'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo brown-text'>
                    React Shop
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/about' className='brown-text'>
                            {' '}
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/contacts' className='brown-text'>
                            Contacts
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
