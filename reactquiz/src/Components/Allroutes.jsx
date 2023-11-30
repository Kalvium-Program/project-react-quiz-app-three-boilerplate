import React from 'react'
import { Routes, Route } from "react-router-dom"
import Quiz from './Quiz'
import ResultPage from './Result'
import Home from './Home'
const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/result' element={<ResultPage/>} />
        </Routes>
    )
}

export default Allroutes
