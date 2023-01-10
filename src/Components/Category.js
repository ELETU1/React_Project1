import React, { useState } from 'react'
import Categories from './Categories';
import Card from './Card';

const Category = () => {
    const [data, setData] = useState(Categories)

    const filterResult = (catItem)=> {
        const result = Categories.filter( (cd) =>{
            return cd.category === catItem
        });

        setData(result)
    }

  return (
    <>
      <h1 className="text-center text-info my-4">Let's Shop</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">

            <div className="col-md-3">
                <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Men')}>Men</button>
                <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Women')} >Women</button>
                <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Children')} >Children</button>
                <button className="btn btn-warning w-100 mb-4" onClick={()=>setData(Categories)}>All</button>
            </div>

            <div className="col-md-9">
                <div className="row">
                    {
                        data.map( (d) =>{
                            return(
                                <Card key={d.id} title={d.title} price={d.price} image={d.image} />
                            )
                        } )
                    }
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Category;
