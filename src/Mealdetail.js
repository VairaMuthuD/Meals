import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealdetail = () => {

  const[detail, setDetail] = useState([]);

    const params = useParams();

    console.log(params)

    const loadMeal = async()=>{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`);
        const res= await response.json();
        console.log(res)

    }

    useEffect(()=>{
      loadMeal();
    },[params.id])

  return (
    <div>Mealdetail</div>
  )
}

export default Mealdetail