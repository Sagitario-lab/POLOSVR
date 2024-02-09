import {useState} from "react";
import axios from "axios";
import {Button, Grid, TextField, Typography} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';

export const AddBestSeller = () => {
    const [titulo, setTitulo,] = useState('')
    const [imagen, setImagen] = useState('')
    const [autor, setAutor] = useState('')
    const [resumen, setResumen] = useState('')
    const [editorial, setEditorial] = useState('')
/////////////////////////////////////////////////////////////////
    const [openBest, setOpenBest] = useState(false);
    const handleOpen = () => setOpenBest(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenBest(false);
    };

    const [snackMsg, setSnackMsg] = useState(false)

    const cargarLibro = () => {
        const data = {titulo: titulo, imagen: imagen, autor: autor, resumen: resumen, editorial: editorial}
        axios.post('http://localhost:3000/bestsellers', data, {headers: {ContentType: 'application/json'}})
            .then(res => console.log(res))
    }

    const check = () => {
        if (titulo === '') {
            return false
        }
        if (imagen === '') {
            return false
        }
        if (autor === '') {
            return false
        }
        if (resumen === '') {
            return false
        }
        if (editorial === '') {
            return false
        }
        return true
    }


    return (
        <Grid container justifyContent={'center'}>
            <form>
                <Grid item xs={12}>
                    <Typography fontWeight={'600'}>AGREGAR BEST SELLER</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'titulo'} variant={'filled'} onChange={(e) => {
                        setTitulo(e.target.value)
                    }}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'imagen'} variant={'filled'} onChange={(e) => {
                        setImagen(e.target.value)
                    }}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'autor'} variant={'filled'} onChange={(e) => {
                        setAutor(e.target.value)
                    }}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'resumen'} variant={'filled'} onChange={(e) => {
                        setResumen(e.target.value)
                    }}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'editorial'} variant={'filled'} onChange={(e) => {
                        setEditorial(e.target.value)
                    }}></TextField>
                </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                    <Button variant={'contained'} onClick={() => {
                        if (check()) {
                            setSnackMsg(true)
                            handleOpen()
                            cargarLibro()
                        } else {
                            handleOpen()
                        }
                    }}>Agregar</Button>
                </Grid>
            </form>
            <Snackbar
                open={openBest}
                autoHideDuration={2000}
                onClose={handleClose}
                message={snackMsg ? "Libro agregado a los mas vendidos" : "Faltan datos"}
            />
        </Grid>
    )
}