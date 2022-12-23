import React from 'react';
import styles from "../../left.module.css";
// import styles from "../../../../../pages/direct/Direct.module.css";

const Search = () => {
    return (
        <div>
            <i className={styles.searchI}></i>
            <input type="text" placeholder="Search" className={styles.search}/>
        </div>
    );
};

export default Search;