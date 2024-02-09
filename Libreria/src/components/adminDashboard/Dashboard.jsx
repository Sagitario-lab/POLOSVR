import {Grid, Typography} from "@mui/material";
import {AddBook} from "./Forms/AddBook.jsx";
import {DeleteBook} from "./Forms/DeleteBook.jsx";
import {AddBestSeller} from "./Forms/AddBestSeller.jsx";
import {DeleteBestSeller} from "./Forms/DeleteBestSeller.jsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import {Info} from "./Info.jsx";

export const Dashboard = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!sessionStorage.getItem('adm')) {
            navigate('/')
        }
    }, [])
    return (
        <Grid container justifyContent={'center'} color={'black'}>
            <Grid item xs={8}>
                <Grid container justifyContent={'center'} bgcolor={'white !important'}>
                    <Grid item xs={10} display={'flex'} justifyContent={'center'} padding={1}>
                        <Typography type={'h1'}> ADMIN DASHBOARD </Typography>
                        <Tooltip title={<Info/>}>
                            <InfoIcon/>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={6} display={'flex'} justifyContent={'center'} padding={1}>
                        <AddBook/>
                    </Grid>
                    <Grid item xs={6} display={'flex'} justifyContent={'center'} padding={1}>
                        <DeleteBook/>
                    </Grid>
                    <Grid item xs={6} display={'flex'} justifyContent={'center'} padding={1}>
                        <AddBestSeller/>
                    </Grid>
                    <Grid item xs={6} display={'flex'} justifyContent={'center'} padding={1}>
                        <DeleteBestSeller/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}