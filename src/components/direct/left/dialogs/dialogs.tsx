import React from 'react';
import Sider from "antd/es/layout/Sider";
import {NavLink} from "react-router-dom";
import {UserOutlined} from "@ant-design/icons";
import styles from "../../../../pages/direct/Direct.module.css";

const Dialogs = () => {
    return (
        <div className={styles.leftColumn}>
            <div className={styles.LeftMainHeader}>
                Search
            </div>

            <div className={styles.ChatFolders}>
                <div className={styles.chatForldersInner}>

                </div>
                    {/*<h1>Dialogs</h1>*/}
                {/*<logoDialogs users={heightusers} combineFunctions={combineFunctions}/>*/}
            </div>
        </div>
    );
};

export default Dialogs;