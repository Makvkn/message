import React from 'react';
import Search from "./search/search";

import Settings from "./settings/Settings";
import styles from "../left.module.css";
const LeftMainHeader = () => {
    return (
        <div className={styles.leftMainHeader}>
            <Settings/>
            <Search/>
        </div>
    );
};

export default LeftMainHeader;