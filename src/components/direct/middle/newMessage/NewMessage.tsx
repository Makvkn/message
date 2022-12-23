import React from 'react';
import styles from "../middle.module.css";

const NewMessage = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <input  type="text" placeholder={'Please'}/>
                <button >Send Message</button>
            </div>

        </div>

    );
};

export default NewMessage;