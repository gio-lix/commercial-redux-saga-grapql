import React from 'react';
import Layout from "../../components/Layout";
import LoginPage from "../../components/pages/account/LoginPage";

const Login = () => {
    return (
        <Layout>
            <div className=' flex justify-center '>
                <LoginPage />
            </div>
        </Layout>
    );
};

export default Login;
