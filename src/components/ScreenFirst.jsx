import React from 'react';
import Footer from './Footer';

const ScreenFirst = () => {
    return (
        <section className="firstScreen" >
            <Footer/>
            <div className="heading">
                <h1>Everything You Love About Coffee</h1>
                <img src="/icons/beens.svg" alt="" />
                <p>
                    We makes every day full of energy and taste
                    Want to try our beans?  
                </p>
                <button>
                    More
                </button>
            </div>
        </section>
    );
};


export default ScreenFirst;