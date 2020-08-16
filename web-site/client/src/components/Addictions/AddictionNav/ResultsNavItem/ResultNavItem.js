import React from "react";
import {useSelector, useDispatch} from "react-redux";

import styles from './ResultNavItem.module.css';
import {setCurrentAddictionNumber} from "../../../../actions/addictionActions";

const ResultNavItem = () => {
    const addictionState = useSelector(state => state.addiction);
    const active = addictionState.addictionNum === "result";
    const available = addictionState.resultsAvailable;

    const dispatch = useDispatch();

    return (
        <div className={`${active ? styles.navItemActive: styles.navItemInactive} ${!available ? styles.navItemUnavailable: ''} ${styles.navItem}`} onClick={available ? () => dispatch(setCurrentAddictionNumber("result")) : null}>
            <span className={styles.navItemText}>Результаты</span>
        </div>
    )

};

export default ResultNavItem;
