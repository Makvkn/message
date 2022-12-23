import React from 'react';
import styles from "../middle.module.css";

const Chat = () => {
    return (
        <div className={styles.chat}>
            <div className={styles.messagesList}>
                <h1>chat</h1>

                    <div className={styles.anotherMessContainer}>
                        <div className={styles.anotherMess}>
                            <p>Another Message</p>
                        </div>
                    </div>

                    <div className={styles.ownMessContainer}>
                        <div className={styles.ownMess}>
                            <p>Our Message</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Chat;