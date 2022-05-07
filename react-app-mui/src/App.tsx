import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Axios from "axios";
import React from "react";
import Home from './pages/home/Home';
import GlobalStyles from "./components/GlobalStyles.styled";
import Items from "./components/items/Items";
import {Provider} from "react-redux";
import store from "./components/store/store";
import TaskForm from "./pages/faskForm/TaskForm";


Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const App: React.FC = () => {
    return (<Provider store={store}>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}>
                        <Route path="" element={<Navigate to={'active'}/>}/>
                        <Route path="active" element={<Items active={true}/>}/>
                        <Route path="inactive" element={<Items active={false}/>}/>
                        <Route path="add-form" element={<TaskForm type={"add"}/>}/>
                        <Route path="display-form" element={<TaskForm type={"display"}/>}/>
                        <Route path="edit-form" element={<TaskForm type={"edit"}/>}/>
                    </Route>
                    <Route path="*" element={<Navigate to={'active'}/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;