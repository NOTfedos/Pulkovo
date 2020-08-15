import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentAddictionNumber } from "../../../../actions/addictionActions";

import styles from './AddictionNavItem.module.css';

const AddictionNavItem = (props) => {
    const addictionState = useSelector(state => state.addiction);
    const active = addictionState.addictionNum === props.addictionNum;
    const loaded = addictionState.loadedAddictions.filter(addiction => addiction.num === addictionState.addictionNum)[0];

    const dispatch = useDispatch();

    return (
        <div className={`${active ? styles.navItemActive: styles.navItemInactive} ${loaded ? styles.navItemLoaded: ''} ${styles.navItem}`} onClick={() => dispatch(setCurrentAddictionNumber(props.addictionNum))}>
            <span className={styles.navItemText}>Приложение {props.addictionNum}</span>
        </div>
    );
};

AddictionNavItem.propTypes = {
    addictionNum: PropTypes.number.isRequired
};

export default AddictionNavItem;
