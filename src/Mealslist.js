import React from 'react'
import Singlemeal from './Singlemeal'
import { Link } from 'react-router-dom'

const Mealslist = ({ meals }) => {

    function handleClick(id){
        <Singlemeal value={id} />
    }


    return (
        <div className="container-fluid">

            <div className="row">
                {meals.map((item) => {

                    return <div className="col-4">

                        <div class="card" key={item.idCategory} style={{ height: '500px' }} onClick={() => handleClick(item.idCategory)}>
                            <Link to={`/meals/${item.idCategory}`}>
                                <img src={item.strCategoryThumb} style={{ height: '200px', width: '200px' }} />
                                <div class="card-body" >
                                    <h5 class="card-title">{item.strCategory}</h5>
                                    <p class="card-text">{item.strCategoryDescription}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </Link>

                        </div>
                    </div>

                })}
            </div>

        </div>
    )
}

export default Mealslist