import React from 'react';
// import styles from "../../../../pages/direct/Direct.module.css";
import DialogsItem from "./dialogsItem/dialogsItem";
import styles from "../left.module.css";

const Dialogs = () => {
    return (
        <div className={styles.ChatFolders}>
            <div className={styles.chatFoldersInner}>
                <DialogsItem />
                <DialogsItem />
                <DialogsItem />
                <DialogsItem />
                <DialogsItem />
                <DialogsItem />
                <DialogsItem />
            </div>
        </div>
    );
};

export default Dialogs;