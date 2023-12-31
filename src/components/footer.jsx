function Footer() {
    return (
        <footer className='page-footer orange lighten-4'>
            <div className='footer-copyright orange lighten-4'>
                <div className='container brown-text'>
                    © {new Date().getFullYear()} All rights reserved
                    <a
                        className='brown-text right repo'
                        href='https://github.com/Feoktist92/food-project'
                        target='__blank'
                    >
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
