import { useHistory } from 'react-router-dom';
function Contact() {
    const { goBack } = useHistory();
    return (
        <>
            <h3>
                Repository of this project -{' '}
                <a
                    className='brown-text'
                    href='https://github.com/Feoktist92/food-project'
                    target='__blank'
                >
                    GitHub
                </a>
            </h3>
            <h3>
                You can also view another React and JS projects on my{' '}
                <a
                    className='brown-text'
                    href='https://github.com/Feoktist92?tab=repositories'
                    target='__blank'
                >
                    GitHub Page
                </a>
            </h3>
            <button
                className='btn deep-orange lighten-1 black-text'
                onClick={goBack}
            >
                Back
            </button>
        </>
    );
}

export { Contact };
