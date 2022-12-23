import React from 'react';
// import styles from "../../../pages/direct/Direct.module.css";
import styles from "./left.module.css"
import Search from "./leftMainHeader/search/search";
import Dialogs from "./dialogs/dialogs";
import LeftMainHeader from "./leftMainHeader/LeftMainHeader";

const Left = () => {
    return (
        <div className={styles.leftColumn}>
            <LeftMainHeader/>
            <Dialogs/>
        </div>
    );
};

export default Left;