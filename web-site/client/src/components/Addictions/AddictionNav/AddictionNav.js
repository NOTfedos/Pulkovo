import React from 'react';

import styles from './AddictionNav.module.css';

import AddictionNavItem from "./AddictionNavItem/AddictionNavItem";

const AddictionNav = () => {
    return (
        <div className={`d-flex ${styles.addictionNav} align-items-end`}>
            {
                [1, 2, 3, 4, 5].map(num =>
                    <AddictionNavItem addictionNum={num} key={num}/>
                )
            }
        </div>
    )
};

export default AddictionNav;
