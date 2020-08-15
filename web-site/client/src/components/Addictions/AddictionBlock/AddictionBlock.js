import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { saveFile } from "../../../actions/addictionActions";

import styles from './AddictionBlock.module.css';
import Upload from '../../../icons/Upload.svg';

const AddictionBlock = () => {


    const addictionState = useSelector(state => state.addiction);
    const addictionNum = addictionState.addictionNum;
    const addiction = addictionState.loadedAddictions.filter(addiction => addiction.num === addictionNum)[0];

    const dispatch = useDispatch();

    return (
        <div className={styles.addictionBlock}>
            <input type="file" name={`application${addictionNum}`} id={addictionNum} onChange={(event) => dispatch(saveFile(addictionNum, event.target.files[0]))} className={styles.fileInput}/>
            <label htmlFor={addictionNum} className={`${styles.inputLabel}`}><img src={Upload} alt="upload" height="20px"/> Добавить файл</label>
            {
                addiction
                    ?
                    <iframe src={addiction.fileUrl} width="100%" height="100%" scrolling="auto" className={styles.addIframe}/>
                    :
                    <React.Fragment/>
            }

        </div>
    )
};

export default AddictionBlock;
