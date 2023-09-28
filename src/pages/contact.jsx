import { useHistory } from 'react-router-dom';
import gitHubIcon from './../icons/github.svg';
import tgIcon from './../icons/telegram.svg';
import hhIcon from './../icons/headhunter.svg';

function Contact() {
    const { goBack } = useHistory();
    return (
        <>
            <div className='contact__wrapper'>
                <div className='contact__item'>
                    <h4>Repository of this project </h4>
                    <a
                        className='icon brown-text'
                        href='https://github.com/Feoktist92/food-project'
                        target='__blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='icon__img'
                            src={gitHubIcon}
                            alt='github'
                        />
                    </a>
                </div>
                <div className='contact__item'>
                    <h4>View another React and JS projects</h4>
                    <a
                        className='icon brown-text'
                        href='https://github.com/Feoktist92?tab=repositories'
                        target='__blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='icon__img'
                            src={gitHubIcon}
                            alt='github'
                        />
                    </a>
                </div>
                <div className='contact__item'>
                    <h4>Telegram </h4>
                    <a
                        className='icon brown-text'
                        href='https://t.me/feoktistov_igor92'
                        target='__blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='icon__img'
                            src={tgIcon}
                            alt='telegram'
                        />
                    </a>
                </div>
                <div className='contact__item'>
                    <h4>Resume </h4>
                    <a
                        className='icon brown-text'
                        href='https://hh.ru/resume/ded9d9ffff020d9de60039ed1f4c7542555747'
                        target='__blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='icon__img hhIcon'
                            src={hhIcon}
                            alt='headhunter'
                        />
                    </a>
                </div>
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

export { Contact };
