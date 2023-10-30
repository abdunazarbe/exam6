import React from 'react';
import CategoryCard from '../../components/UI/CatogoryCard';
import './style.scss';

const Categories = () => {
    const leng = [1, 2, 3, 4, 5, 6]
    return (
        <section id='categories'>
            <div className='container mx-auto px-5'>
                <h2>
                    Top <span>Categories</span>
                </h2>

                <p className='categories-text'>
                    12,000+ unique online course list designs
                </p>

                <div className='wrapper'>
                    {
                        leng.map((leng) => {
                            return <CategoryCard key={leng} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Categories