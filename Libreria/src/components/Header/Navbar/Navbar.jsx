import {Badge, Box, Button, ButtonGroup, Grid, Icon, Modal, Typography, useMediaQuery} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import {ROUTES} from "../../../constants/ROUTES.js";
import {useNavigate} from "react-router-dom";
import {useState} from 'react'
import {useRecoilValue} from 'recoil'
import {selectedBooksList} from '../../../Atoms/atoms.js'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {SelectedBooks} from "../../Books/SelectedBooks.jsx";


export const Navbar = () => {
    //navigation
    const navigate = useNavigate();
    const navigateTo = (route) => navigate(route);
    //consultas modal
    const [openConsulta, setOpenConsulta] = useState(false);
    const handleOpenConsulta = () => setOpenConsulta(true);
    const handleCloseConsulta = () => setOpenConsulta(false);
    //lista de libros modal
    const [openLista, setOpenLista] = useState(false);
    const handleOpenLista = () => setOpenLista(true);
    const handleCloseLista = () => setOpenLista(false);
    //////////////////////////////////////////////////////////////////////////
    const listaSeleccionados = useRecoilValue(selectedBooksList)

    const matches = useMediaQuery('(max-width:768px)');

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {sx: '90%', md: '200px'},
        bgcolor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
    };


    return (
        <Grid container
              id={'nav'}
              sx={{backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', color: 'white'}}
              display={'flex'}
              justifyContent={'center'}
        >
            <Grid item xs={11}>
                <Grid container>
                    <Grid item xs={12} md={3} display={'flex'} justifyContent={'center'}>
                        <Button
                            onClick={() => navigateTo(ROUTES.home)}
                            sx={{
                                fontFamily: 'Jacques Francois Shadow, serif',
                                fontSize: {xs: '3.4rem', md: '2.9rem', lg: '3.8'},
                                display: 'flex',
                                alignItems: 'end',
                                padding: '0',
                                margin: '0'
                            }}
                            color={'white'}
                        >
                            POLO SVR
                        </Button>
                    </Grid>

                    {matches && <Grid item xs={12}>
                        <Grid container height={'100%'} padding={1} justifyContent={'center'}>
                            <Grid item xs={2} md={12} display={'flex'} justifyContent={'space-evenly'}
                                  alignItems={'center'}>
                                <Box>
                                    Redes:
                                </Box>
                                <Icon
                                    component={InstagramIcon}
                                    sx={{width: '30px', height: '30px'}}
                                ></Icon>
                            </Grid>
                            <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}
                                  sx={{marginY: '5px'}}>
                                <Button
                                    variant={'contained'}
                                    onClick={() => handleOpenConsulta()}
                                    color={'grey'}
                                >
                                    Info consultas!
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>}

                    <Grid
                        item
                        xs={12}
                        md={7}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'end',
                        }}
                    >
                        <ButtonGroup variant="text" aria-label="text button group" color={'white'}>
                            <Button onClick={() => {
                                navigateTo(ROUTES.home)
                            }} color={'grey'}>
                                Inicio
                            </Button>
                            <Button onClick={() => {
                                navigateTo(ROUTES.allBooks)
                            }} color={'grey'}>
                                Todos los libros
                            </Button>
                            <Button onClick={() => handleOpenLista()} color={'grey'}>
                                Lista {!matches && <>de libros</>}
                                <Badge color="primary" badgeContent={listaSeleccionados.length}>
                                    <FormatListBulletedIcon/>
                                </Badge>
                            </Button>
                        </ButtonGroup>
                    </Grid>
                    {!matches && <Grid item xs={2}>
                        <Grid container height={'100%'} padding={1}>
                            <Grid item xs={12} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
                                <Box>
                                    Redes:
                                </Box>
                                <Icon
                                    component={InstagramIcon}
                                    sx={{width: '30px', height: '30px'}}
                                ></Icon>
                            </Grid>
                            <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}
                                  sx={{marginY: '5px'}}>
                                <Button variant={'contained'} onClick={() => handleOpenConsulta()}
                                        color={'grey'}
                                > Info
                                    consultas!</Button>
                            </Grid>
                        </Grid>
                    </Grid>}
                </Grid>
            </Grid>
            <Modal
                open={openConsulta}
                onClose={handleCloseConsulta}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <Typography variant={'h4'}>Consulte aqui!</Typography>
                        </Grid>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <Typography variant={'h5'}>E-mail</Typography>
                        </Grid>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <ul>
                                <li>direcciondecorreo@gmail.com</li>
                                <li>direcciondecorreo@gmail.com</li>
                                <li>direcciondecorreo@gmail.com</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <Typography variant={'h5'}>Telefonos</Typography>
                        </Grid>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <ul>
                                <li>(+54) 9 11 5867-4923</li>
                                <li>(+54) 9 11 5867-4923</li>
                                <li>(+54) 9 11 5867-4923</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>

            <Modal
                open={openLista}
                onClose={handleCloseLista}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <SelectedBooks/>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Grid>
    )
}