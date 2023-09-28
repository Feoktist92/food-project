import { useHistory } from 'react-router-dom';
import foodIcon from './../icons/food.png';
function About() {
    const { goBack } = useHistory();

    return (
        <>
            <div className='about__wrapper'>
                <h3 className='about__title'>
                    React food project made with API{' '}
                    <a
                        href='https://www.themealdb.com'
                        className='brown-text about__link'
                        target='__blank'
                    >
                        TheMealDB
                        <img
                            src={foodIcon}
                            alt='food'
                            style={{ width: '60px', height: '60px' }}
                        />
                    </a>
                </h3>
                <button
                    className='btn deep-orange lighten-1 black-text'
                    onClick={goBack}
                >
                    Back
                </button>
            </div>
        </>
    );
}

export { About };
