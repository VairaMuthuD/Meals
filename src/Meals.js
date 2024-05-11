import React, { useEffect, useState, createContext } from 'react'

import Mealslist from './Mealslist'
import Mealdetail from './Mealdetail';
import Singlemeal from './Singlemeal';

const Meals = () => {

  const [meals, setMeals] = useState([])

  const SingleMealDetail = createContext(null);

  const loadMealss = async () => {

    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');

      const res = await response.json();

      console.log(res.categories)

      setMeals(res.categories)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadMealss()
  }, [])



  console.log(meals)

  return (
    <div>

      <SingleMealDetail.Provider value={meals}>
        <Singlemeal />
      </SingleMealDetail.Provider>

      <Mealslist meals={meals} />


    </div>
  )
}

export default Meals