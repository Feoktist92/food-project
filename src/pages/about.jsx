import { useHistory } from 'react-router-dom';
function About() {
    const { goBack } = useHistory();

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>
                React food project made with API{' '}
                <a
                    href='https://www.themealdb.com'
                    className='brown-text'
                    style={{ textDecoration: 'underline' }}
                    target='__blank'
                >
                    TheMealDB
                </a>
            </h2>
            <button
                className='btn deep-orange lighten-1 black-text'
                onClick={goBack}
            >
                Back
            </button>
        </>
    );
}

export { About };
