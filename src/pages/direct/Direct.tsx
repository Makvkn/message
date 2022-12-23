import React from 'react';
import styles from "./Direct.module.css"
import Left from "../../components/direct/left/left";
import Middle from "../../components/direct/middle/Middle";

const Direct = () => {
    return (
        <div className={styles.direct}>
            <Left/>
            <Middle/>
        </div>
    )
};

export default Direct;

//