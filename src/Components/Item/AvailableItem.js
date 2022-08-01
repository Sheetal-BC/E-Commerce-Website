import React from 'react';


import ShopItem from './ShopItem';

import classes from './AvailableItem.module.css'


const DUMMY_ITEMS =[
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    
    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
];

const AvailableItem = () =>{
    const itemList = DUMMY_ITEMS.map(item => 
    <ShopItem 
    key={item.id} 
    id={item.id}
    title={item.title}
    price={item.price}
    imageUrl={item.imageUrl} />
    
    );
    
    return (
        <React.Fragment>
    <div>
    <h3 className={classes.product}>Music</h3>
       <ul className={classes.container}>{itemList}</ul>
    </div>
        </React.Fragment>
    )
}

export default AvailableItem;