import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMealById } from '../api';
import { Preloader } from '../components/preloader';

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const { goBack } = useHistory();

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className='recipe'>
                    <img
                        className='recipe__img'
                        src={recipe.strMealThumb}
                        alt={recipe.strMeal}
                    />

                    <h1 className='recipe__header'>{recipe.strMeal}</h1>
                    <h6>
                        <b>Category</b>:{' '}
                        <span className='recipe__category'>
                            {recipe.strCategory}
                        </span>
                    </h6>
                    {recipe.strArea ? (
                        <h6>
                            <b>Area</b>:{' '}
                            <span className='recipe__area'>
                                {recipe.strArea}
                            </span>
                        </h6>
                    ) : null}
                    <p>{recipe.strInstructions}</p>

                    <table className='centered'>
                        <thead>
                            <tr>
                                <th className='table__head'>Ingredient</th>
                                <th className='table__head'>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>

                    {recipe.strYoutube ? (
                        <div className='row youtube'>
                            <h5
                                style={{
                                    margin: '30px 0 15px',
                                    textAlign: 'center',
                                }}
                            >
                                Video Recipe
                            </h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                allowFullScreen
                            />
                        </div>
                    ) : null}
                </div>
            )}
            <button
                className='btn deep-orange lighten-1 black-text'
                onClick={goBack}
            >
                Back
            </button>
        </>
    );
}
export { Recipe };
