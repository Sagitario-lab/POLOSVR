import {Button, Grid, TextField} from "@mui/material";
import {debounce} from "lodash";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../constants/ROUTES.js";


export const Login = () => {
    const [userData, setUserData] = useState('')
    const [passData, setPassData] = useState('')

    const navigate = useNavigate()

    const check = () => {
        if (userData === 'polosur' && passData === 'polopass') {
            navigate(ROUTES.adminDashboard)
            sessionStorage.setItem('adm', 'true')
            console.log('ingreso')
        } else {
            console.log('erroneos datos')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        debounce(check, 1000)();
    };

    return (
        <Grid container justifyContent={'center'}>
            <Grid item xs={7}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <TextField id={'user'} label={'usuario'} variant={'filled'}
                                       onChange={(e) => setUserData(e.target.value)}></TextField>
                        </Grid>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <TextField id={'pass'} label={'contraseña'} variant={'filled'}
                                       onChange={(e) => setPassData(e.target.value)}></TextField>
                        </Grid>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <Button variant={'contained'} type={'submit'}>
                                ingresar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}