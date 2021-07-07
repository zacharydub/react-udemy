import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";
//const DUMMY_MEALS = [
//  {
//    id: 'm1',
//    name: 'Sushi',
//    description: 'Finest fish and veggies',
//    price: 22.99,
//  },
//  {
//    id: 'm2',
//    name: 'Schnitzel',
//    description: 'A german specialty!',
//    price: 16.5,
//  },
//  {
//    id: 'm3',
//    name: 'Barbecue Burger',
//    description: 'American, raw, meaty',
//    price: 12.99,
//  },
//  {
//    id: 'm4',
//    name: 'Green Bowl',
//    description: 'Healthy...and green...',
//    price: 18.99,
//  },
//];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //this can start as true since we know we do fetch the meals list right away due to useEffect
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    //react doesnt let us have useEffect return a promise/define it as an async func, so we need to nest our async func within another func
    const fetchMeals = async () => {
      const res = await fetch(
        "https://foodorder-l2-default-rtdb.firebaseio.com/meals.json"
      );

      if (!res.ok) {
        throw new Error("something went wrong");
      }

      const data = await res.json();
      //the way firebase works, our data variable returns an object, with each name (m1, m2, m3...) as keys. We want an array so will transform
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    //handling an error inside a promise https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25600070#questions

    //originally we tried using try/catch, but fetchMeals returns a promise, and if throw an error inside a promise it will cause the promise to reject, so we cant use try/catch unless we also use await fetchMeals() - but then we'd need to define the useEffect func as async which we cant do. So instead we use the .catch chaining on fetchMeals
    fetchMeals().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={classes.MealsLoading}>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section>
        <p className={classes.MealsError}>{httpError}</p>
      </section>
    );
  }

  //const mealsList = DUMMY_MEALS.map((meal) => (
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
