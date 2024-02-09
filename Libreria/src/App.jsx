import './App.css'
import {useEffect} from "react";
import axios from "axios";
import {allBooks, bestSellers} from "./Atoms/atoms.js";
import {useSetRecoilState} from "recoil";
import don from "./assets/fondo.svg";
import polosur from "./assets/polosvr.png";
import {Navbar} from "./components/Header/Navbar/Navbar.jsx";
import {ROUTES} from "./constants/ROUTES.js";
import {Home} from "./components/home/Home.jsx";
import {SingleBookView} from "./components/Books/SingleBookView.jsx";
import {AllBooks} from "./components/AllBooks/AllBooks.jsx";
import {Login} from "./components/adminDashboard/Login.jsx";
import {Dashboard} from "./components/adminDashboard/Dashboard.jsx";
import {Grid} from "@mui/material";
import {Route, Routes} from 'react-router-dom'

function App() {
    const setAllBooksArr = useSetRecoilState(allBooks)
    const setBestSellersArr = useSetRecoilState(bestSellers)

    useEffect(() => {
        //todos los libros
        axios.get('http://localhost:3000/allbooks').then(res => {
            setAllBooksArr(res.data)
        }).catch(e => console.log(e))
        // //bestSellers
        axios.get('http://localhost:3000/bestsellers').then(res => {
            setBestSellersArr(res.data)
        }).catch(e => console.log(e))
    }, [])


    return (

        <Grid container sx={{width: '100vw', height: '100vh', overflowX: 'hidden',}}>
            <Grid
                item
                xs={12}
                display={'flex'}
                justifyContent={'center'}
                sx={{
                    backgroundImage: `url('${don}')`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <Grid
                    container
                    sx={{
                        backgroundImage: `url(${polosur})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    justifyContent={'center'}
                >
                    <Grid item xs={12}>
                        <Navbar/>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container>
                            <Grid item xs={12} sx={{backdropFilter: 'blur(10px)'}}>
                                <Routes>
                                    <Route path={ROUTES.home} element={<Home/>}/>
                                    <Route path={ROUTES.selectedBook} element={<SingleBookView/>}/>
                                    <Route path={ROUTES.allBooks} element={<AllBooks/>}/>
                                    <Route path={ROUTES.adminLogin} element={<Login/>}/>
                                    <Route path={ROUTES.adminDashboard} element={<Dashboard/>}></Route>
                                </Routes>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default App