import React from 'react';
import {Layout} from 'antd';
import Chat from "../../components/direct/middle/chat/Chat";
import Author from "../../components/direct/middle/chat/author";
import NewMessage from "../../components/direct/middle/newMessage/NewMessage";
import Dialogs from "../../components/direct/left/dialogs/dialogs";
import {inspect} from "util";
import styles from "./Direct.module.css"

const Direct: React.FC = () => {
    return (
        <div className={styles.direct}>
                <Dialogs />
            <div >
                <Author />
                <Chat/>

                {/*<NewMessage />*/}
            </div>
        </div>
    )
};

export default Direct;

//