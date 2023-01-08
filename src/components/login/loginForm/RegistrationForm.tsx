import {Button, Checkbox, Form, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import store, {RootState} from "../../../redux/store";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"
import {initializeApp} from "firebase/app";
import {auth} from "./../../../firebase"

import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
//useSelectors
    const useUser = useSelector((state: RootState) => state.authReducer.user)
    const useIsError = useSelector((state: RootState) => state.authReducer.error)
//useState
    const [err, setErr] = useState(false)
    const [password, setPassword] = useState('')




    const [username, setUsername] = useState('')
    const onFinish = async (values: any) => {
        console.log(values)
        try {
            // navigate("/direct")
            const email = values.email
            const password = values.password
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const db = getFirestore()
            createUserWithEmailAndPassword(auth, email, password)

                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    // ..
                });
             setDoc(doc(db, "messenger", res.user.uid), {
                uid: res.user.uid,
                username: values.username,
                email: res.user.email,
                password: values.password
            });
        } catch (e) {
            console.log("Error", (e))
            setErr(true)
        }


        // loginAcc(auth, email, password)

    }

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
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input
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
            {/*<div style={{marginTop: '25px',marginLeft: '100px', marginBottom: '25px'}}>*/}
            {/*    <img style={{width: '30px'}} src="/avatar_def.svg" alt=""/>*/}
            {/*    <span style={{marginTop: '10px', marginLeft:"10px"}}>Add an Avatar</span>*/}
            {/*</div>*/}
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