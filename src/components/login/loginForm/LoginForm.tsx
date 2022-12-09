import {Button, Checkbox, Form, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import store, {RootState} from "../../../redux/store";
import {AuthActionCreators} from "../../../redux/reducers/auth/authActionCreators";
import axios from "axios";
import {IUser} from "../../../redux/reducers/auth/types";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    const dispatch = useDispatch()
//useSelectors
    const useUser = useSelector((state: RootState) => state.authReducer.user)
    const useIsError = useSelector((state: RootState) => state.authReducer.error)
//useState
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();

    const onFinish = async (values: any) => {
        try {
            const response = await axios.get("./users.json")

            let mockUser = response.data.find((user: IUser) => user.username === username && user.password === password)
            if (mockUser) {
                dispatch(AuthActionCreators.setAuth(true))
                dispatch(AuthActionCreators.setUser(mockUser))

                navigate("/direct");

            } else {
                dispatch(AuthActionCreators.setIsError('Username or password is not correct'))
                console.log(useIsError)
            }
        } catch (e) {
            console.log('error', (e))
        }

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input value={username}
                       onChange={(e) => {
                           setUsername(e.target.value)
                       }}
                />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,

                }}
            >
                <Button style={{marginRight: '10px'}} type="primary" htmlType="submit">
                    LogIn
                </Button>
                <Button type="primary" htmlType="submit">
                    Registration
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;