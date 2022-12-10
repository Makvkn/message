import React from 'react';
import {Layout} from "antd";

const Direct = () => {
    return (
        <Layout hasSider>
            {/*<SiderDialogs />*/}
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                Hello
                {/*<HeaderMessage />*/}
                {/*<ContentMessages  />*/}
                {/*<InputMessage />*/}
            </Layout>
        </Layout>
    );
};

export default Direct;