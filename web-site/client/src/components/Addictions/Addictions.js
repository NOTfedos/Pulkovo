import React from 'react';

import styles from './Addictions.module.css';

import AddictionNav from "./AddictionNav/AddictionNav";
import AddictionBlock from "./AddictionBlock/AddictionBlock";

const Addictions = () => {
    return (
        <div className={`d-flex flex-column flex-grow-1 ${styles.addictions}`}>
            <AddictionNav/>
            <AddictionBlock/>
        </div>
    )
};

export default Addictions;
