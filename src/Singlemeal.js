import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


const Singlemeal = ({ idCategory, strCategoryThumb, strCategory, strCategoryDescription }) => {

    // const detail = useContext(SingleMealDetail)

    // console.log(detail)


    return (

            <div class="card" key={idCategory} style={{ height: '500px'}} >
                <Link to={`/meals/${idCategory}`}>
                    <img src={strCategoryThumb} style={{ height: '200px', width: '200px' }} />
                    <div class="card-body" >
                        <h5 class="card-title">{strCategory}</h5>
                        <p class="card-text">{strCategoryDescription}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </Link>

            </div>
    )
}

export default Singlemeal