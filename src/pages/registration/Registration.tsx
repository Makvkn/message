import React, {FC} from 'react';
import {Layout, Row} from "antd";
import RegistrationForm from "../../components/login/loginForm/RegistrationForm";

const Registration: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <RegistrationForm />
            </Row>
        </Layout>
    );
};

export default Registration;