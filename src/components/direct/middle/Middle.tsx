import React from 'react';
import Chat from "./chat/Chat";
import Author from "./author/Author";
import NewMessage from "./newMessage/NewMessage";
import styles from "./middle.module.css";

const Middle = () => {
    return (
        <div className={styles.middleColumn}>
            <Author/>
            <Chat/>
            <NewMessage/>
        </div>
    );
};

export default Middle;