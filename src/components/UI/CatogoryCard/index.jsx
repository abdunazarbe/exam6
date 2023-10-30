import React from 'react';
import marketing from "../../../assets/icons/najot-talim.svg";
import './style.scss';

const CategoryCard = () => {
    return (
        <div className='category_card'>
            <div className='icon_container'>
                <img src={marketing} alt="Marketing icon" />
            </div>

            <h4>Digtal Marketing</h4>

            <p>25 Courses</p>
        </div>
    )
}

export default CategoryCard