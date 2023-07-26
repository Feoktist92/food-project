import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Preloader } from '../components/preloader';
import { getFilteredCategories } from '../api';
import { MealList } from '../components/meallist';

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const { goBack } = useHistory();

    useEffect(() => {
        getFilteredCategories(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
            <button
                className='btn deep-orange lighten-1 black-text'
                onClick={goBack}
            >
                Back
            </button>
        </>
    );
}

export { Category };
