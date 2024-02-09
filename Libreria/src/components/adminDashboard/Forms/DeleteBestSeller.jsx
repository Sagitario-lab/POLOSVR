import {Box, Button, Divider, Grid, Modal} from "@mui/material";
import {useState} from "react";
import {useRecoilState} from "recoil";
import {uniq} from "lodash";
import axios from "axios";
import {bestSellers} from "../../../Atoms/atoms.js";
import Snackbar from "@mui/material/Snackbar";

export const DeleteBestSeller = () => {
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    /////////////////////////////////////////////////
    const [bestSellersArr, setBestSellersArr] = useRecoilState(bestSellers)
    const [booksForDelete, setBooksForDelete] = useState([])
    const [openSnack, setOpenSnack] = useState(false);
    const handleOpenClick = () => setOpenSnack(true);

    const handleCloseClick = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    };

    const addToDeleteList = (data) => {
        setBooksForDelete(uniq([...booksForDelete, data], '_id'))
    }

    const deleteFromDeleteList = (id) => {
        const newList = booksForDelete.filter(data => data._id !== id)
        setBooksForDelete(newList)
    }

    const deleteFunc = () => {
        //envia la peticion para borrar a db
        axios.delete('http://localhost:3000/bestsellers', {data: booksForDelete})
            .then((e) => console.log('response: ', e))
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
    };

    return (
        <Grid>
            <Button onClick={handleOpen} color={'error'} variant={'contained'}>BORRAR LIBRO</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container justifyContent={'space-between'} color={'black'}>
                        <Grid item xs={8}>
                            <Grid container>
                                {bestSellersArr && bestSellersArr.map((data, idx) => {
                                    return (
                                        <Grid
                                            item xs={2}
                                            display={'flex'}
                                            justifyContent={'center'}
                                            key={idx}
                                        >
                                            <Button
                                                onClick={() => {
                                                    addToDeleteList(data)
                                                }}
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column'
                                                }}>
                                                <Box component={'img'} alt={data.titulo} src={data.imagen}
                                                     height={'150px'}>
                                                </Box>
                                                <Box>
                                                    {data.titulo}
                                                </Box>
                                            </Button>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Divider direction={'vertical'} width={'2px'} color={'black'}/>
                        <Grid item xs={3}>
                            <Grid container>
                                <Grid item xs={12} display={'flex'} justifyContent={'center'} padding={1}>
                                    <Button color={'error'} variant={'contained'} onClick={() => {
                                        handleOpenClick()
                                        deleteFunc()
                                    }}>
                                        BORRAR Mas vendido
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    {booksForDelete.length >= 1
                                        ?
                                        <Grid container>
                                            {booksForDelete.map((data, idx) => {
                                                return (
                                                    <Grid item xs={4} key={idx}>
                                                        <Button
                                                            onClick={() => deleteFromDeleteList(data._id)}>
                                                            <Box>
                                                                <Box
                                                                    component={'img'}
                                                                    alt={data.titulo}
                                                                    src={data.imagen}
                                                                    height={'100px'}>
                                                                </Box>
                                                                <Box>{data.titulo}</Box>
                                                            </Box>
                                                        </Button>
                                                    </Grid>
                                                )
                                            })}
                                        </Grid>
                                        :
                                        <Box>
                                            Aun no se han seleccionado libros para borrar
                                        </Box>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Snackbar
                        open={openSnack}
                        autoHideDuration={2000}
                        onClose={handleCloseClick}
                        message={booksForDelete.length >= 1 ? "Elementos borrados" : "no hay elementos para borrar"}
                    />
                </Box>
            </Modal>
        </Grid>
    )
}