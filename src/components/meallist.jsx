import { Meal } from './meal';

function MealList({ meals }) {
    return (
        <div className='list'>
            {meals.map((meal) => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    );
}
export { MealList };
