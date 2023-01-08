import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { AuthContextProvider} from "./components/context/AuthContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <AuthContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </AuthContextProvider>

);

//
//
//
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {BrowserRouter} from "react-router-dom";
// import {Provider} from "react-redux";
// import store from "./redux/store";
// import { AuthContextProvider} from "./components/context/AuthContext";
//
// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     <Provider store={store}>
//         <AuthContextProvider>
//             <React.StrictMode>
//                 <BrowserRouter>
//                     <App/>
//                 </BrowserRouter>
//             </React.StrictMode>
//         </AuthContextProvider>
//     </Provider>
//
//
//
// );
