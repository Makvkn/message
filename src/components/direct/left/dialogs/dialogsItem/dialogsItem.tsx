import React from 'react';
import styles from "../../left.module.css";

const DialogsItem = () => {
    return (
        <div className={styles.dialogsItem}>
            <div className={styles.avatar}>
                <img src="https://t4.ftcdn.net/jpg/03/86/82/73/360_F_386827376_uWOOhKGk6A4UVL5imUBt20Bh8cmODqzx.jpg"
                     alt=""/>
            </div>
            <div className={styles.info}>
                <div className={styles.infoRow}>
                    <div className={styles.nameAnotherUser}>
                        <h3>MyFriend</h3>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.lastMessTime}>
                        <span>12.00</span>
                    </div>
                </div>
                <div className={styles.lastMessage}><p>Last Message</p></div>
            </div>
        </div>
    );
};

export default DialogsItem;