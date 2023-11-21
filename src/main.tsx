import React from 'react'
import ReactDOM from 'react-dom/client';
import 'reset-css';
import '@/assets/styles/global.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import 'virtual:windi.css';
import { getProductsApi } from '@/api/login.ts'
import { ConfigProvider } from 'antd';

getProductsApi().then(res => {
    console.log(res)
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <BrowserRouter>
                <ConfigProvider theme={{
                    token: {
                        colorPrimary: '#43C1C0',
                        fontSize:12
                    }
                }}>
                    <App />
                </ConfigProvider>
            </BrowserRouter>
        </React.StrictMode>,
    )
})


