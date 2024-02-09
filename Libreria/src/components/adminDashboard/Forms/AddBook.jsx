import {Button, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';

export const AddBook = () => {
    const [titulo, setTitulo,] = useState('')
    const [imagen, setImagen] = useState('')
    const [autor, setAutor] = useState('')
    const [resumen, setResumen] = useState('')
    const [editorial, setEditorial] = useState('')
/////////////////////////////////////////////////////////////////
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const [snackMsg, setSnackMsg] = useState(false)

    const cargarLibro = () => {
        const data = {titulo: titulo, imagen: imagen, autor: autor, resumen: resumen, editorial: editorial}

        axios.post('http://localhost:3000/allbooks', data, {headers: {ContentType: 'application/json'}})
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
        <Grid
            container
            justifyContent={'center'}
        >
            <form>
                <Grid item xs={12}>
                    <Typography fontWeight={'600'}>AGREGAR LIBRO</Typography>
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
                        check()
                        if (check()) {
                            setSnackMsg(true)
                            handleOpen()
                            cargarLibro()
                        } else {
                            console.log('false')
                            handleOpen()
                        }

                    }}>Agregar</Button>
                </Grid>
            </form>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message={snackMsg ? "Libro agregado" : "Faltan datos"}
            />
        </Grid>
    )
}