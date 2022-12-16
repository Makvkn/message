import React from 'react';
import styles from "./Chat.module.css"


const Chat = () => {
    return (
        <div>
            <div>
                <h1>chat</h1>
                <div className={styles.loly}>
                    <p>Our Message</p>
                    <p>Another Message</p>
                </div>
            </div>
        </div>
    );
};

export default Chat;