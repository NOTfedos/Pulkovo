import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";

import { saveFile } from "../../../actions/addictionActions";

import styles from './AddictionBlock.module.css';

const AddictionBlock = () => {


    const addictionState = useSelector(state => state.addiction);
    const addictionNum = addictionState.addictionNum;
    const addiction = addictionState.loadedAddictions.filter(addiction => addiction.num === addictionNum)[0];

    const dispatch = useDispatch();

    return (
        <div className={styles.addictionBlock}>
            {
                addiction
                    ?
                    <iframe src={addiction.file} width="100%" height="600px" scrolling="auto"/>
                    :
                    <form encType="multipart/form-data">
                        <label className="label">
                            <span className="title">Добавить файл</span>
                            <input type="file" name="file" onChange={(event) => dispatch(saveFile(addictionNum, event.target.files[0]))}/>
                        </label>
                        <input type="submit"/>
                    </form>
            }

        </div>
    )
};

export default AddictionBlock;
