import React from 'react';
import ScreenFourRightBlock from './_childs/ScreenFourRightBlock';
import ItemComponent from './_childs/ItemComponent';

const arr3 = [
    {
        id:1,
        title:"Brazil"
    },
    {
        id:2,
        title:"Kenya"
    },
    {
        id:3,
        title:"Columbia"
    },
]

const ScreenFour = (props) => {

    const Items = () => {
        return props.data.map(item=> <ItemComponent item={item}/>)
    }
 
    const Items2 = () => {
        return arr3.map(item=> <ScreenFourRightBlock item={item}/>)
    }

    return (
        <section className="ScreenFour" >
            <div className="search">
                <div className="search_left">
                    <p>Lookiing for</p>
                    <input type="text" placeholder='start typing here...'/>
                </div>
                <div className="search_right">
                    <Items2/>
                </div>
            </div>
            <div className="grid_blocks">
                <Items/>
            </div>
        </section>
    );
};


export default ScreenFour;