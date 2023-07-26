import { Link } from 'react-router-dom';

function CategoryItem(props) {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 80)}...</p>
            </div>
            <div className='card-action'>
                <Link
                    to={`/category/${strCategory}`}
                    className='btn orange lighten-3 brown-text'
                >
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export { CategoryItem };
