import userEvent from '@testing-library/user-event';
import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
//import coursesData from "../data/coursesData";

export default function Products(){
    // console.log(coursesData);
    // console.log(coursesData[0]);
    
    //State that will be used to store the courses retrieved from the database
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/courses/all')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            //Sets the "courses" state to map the data retrieved from the fetch request in several "CourseCard" components
            setProducts(
                data.map(products => {
                    return(
                        <ProductCard key={products.id} courseProp={products} />
                    )
                })
            )
        })
    }, [])

    
    return (
        <Fragment>
            {products}
        </Fragment>
    )
}