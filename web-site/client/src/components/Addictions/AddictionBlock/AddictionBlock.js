import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { saveFile } from "../../../actions/addictionActions";

import styles from './AddictionBlock.module.css';
import Upload from '../../../icons/Upload.svg';

const AddictionBlock = () => {


    const addictionState = useSelector(state => state.addiction);
    const addictionNum = addictionState.addictionNum;
    const loading = addictionState.resultsLoading;
    const addiction = addictionState.loadedAddictions.filter(addiction => addiction.num === addictionNum)[0];

    const dispatch = useDispatch();

    return (
        <div className={styles.addictionBlock}>
            {
                addictionNum !== "result"
                    ?
                    <React.Fragment>
                        <input type="file" name={`application${addictionNum}`} id={addictionNum} onChange={(event) => dispatch(saveFile(addictionNum, event.target.files[0]))} className={styles.fileInput}/>
                        <label htmlFor={addictionNum} className={`${styles.inputLabel}`}><img src={Upload} alt="upload" height="20px"/> Добавить файл</label>
                    </React.Fragment>
                    :
                    <React.Fragment/>
            }

            {
                addiction && !loading
                    ?
                    <iframe src={addiction.fileUrl} width="100%" height="100%" scrolling="auto" className={styles.addIframe}/>
                    :
                    <img src="https://media.tenor.co/videos/2c0704c2acccabedf4d82093214ea315/mp4" alt=""/>
            }

        </div>
    )
};

export default AddictionBlock;
