import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {

    const [searchQuery, setSearchQuery] = useState(null);
    const getQuery = event => setSearchQuery(event.target.value);

    return (
        <section className='banner d-flex align-items-center text-center'>
            <div className='container'>
                <h1 style={{color:'green', fontWeight: 'bold'}}>Nourish your body, <strong style={{color:"red"}}>delight your senses.</strong></h1>
                <p style={{color:'', textAlign: 'center' }}>Welcome to a world of healthy, delicious, and wholesome meals. 
                    Discover a symphony of flavors that nourish your body and delight your taste buds.<br/> 
                    Explore our culinary creations that make every mealtime a celebration of wellness. 
                    Join us in the journey towards a healthier, happier you.</p>

                <div className='search-box col-md-6 my-5 mx-auto'>
                    <input
                        type="text"
                        id="query"
                        onChange={getQuery}
                        className='form-control'
                        placeholder='Search your meals'
                    />
                    <Link to={'/search=' + searchQuery}>
                        <button
                            onClick={() => window.scrollBy(0, 525)}
                            className='btn btn-danger search-btn btn-rounded'
                            style={{
                                background: '#126D3A'}}
                        >
                            Search
                    </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;