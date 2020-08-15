import React from 'react';

import styles from "./Header.module.css";
import Icon from '../../../icons/Icon.svg';
import Apple from '../../../icons/Apple.png';

const Header = () => {
    return (
        <header className={"d-flex fixed-top align-items-center " + styles.pulHeader}>
            <div className={styles.pulIcon}>
                <img src={Icon} alt="icon"/>
            </div>

            <span className={styles.pulText}>Кальянная <img src={Apple} alt="apple" className={styles.appleIcon}/><img src={Apple} alt="apple" className={styles.appleIcon}/>(18+)</span>
        </header>
    );
};

export default Header;
