import React from 'react';
import Layout from "../../components/Layout";
import LoginPage from "../../components/pages/account/LoginPage";

const Login = () => {
    return (
        <Layout>
            <div className=' flex justify-center px-1'>
                <LoginPage />
            </div>
        </Layout>
    );
};

export default Login;
