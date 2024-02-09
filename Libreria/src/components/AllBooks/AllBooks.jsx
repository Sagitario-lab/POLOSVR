import {Box, Button, Grid, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useRecoilValue} from 'recoil'
import {allBooks} from '../../Atoms/atoms.js'
import {useEffect, useState} from "react";
import './AllBooks.css'

export const AllBooks = () => {
    const navigate = useNavigate();
    const navigateTo = (route) => navigate(route);
    const arrForFilter = useRecoilValue(allBooks)
    const [array, setArray] = useState([])
    const [book, setBook] = useState('')

    useEffect(() => {
        const bookArr = arrForFilter.filter(data => data.titulo.includes(book))
        setArray(bookArr)
    }, [arrForFilter, book])


    return (
        <Grid container height={'calc(100vh - 92.5px)'}>
            <Grid
                item
                xs={12}
                display={'flex'}
                justifyContent={'center'}
            >
                <Box paddingY={1}>
                    <TextField
                        variant="filled"
                        label={'Libro...'}
                        sx={{backgroundColor: 'rgba(255,255,255,0.3)'}}
                        onChange={(e) => {
                            setBook(e.target.value)
                        }}
                        InputLabelProps={{
                            style: {color: 'white', borderColor: 'white'},
                            sx: {'& fieldset': {borderColor: 'red'}},
                        }}
                        InputProps={{
                            style: {color: 'blue'},
                            sx: {'& fieldset': {borderColor: 'red'}},
                        }}
                    />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    {array.map((data, idx) => {
                        return (
                            <Grid key={idx} item xs={12} sm={6} md={4} xl={2} display={'flex'}
                                  justifyContent={'center'}>
                                <Button onClick={() => navigateTo(`/libro/${data._id}`)}>
                                    <Grid
                                        container
                                        justifyContent={'center'}
                                        sx={{
                                            borderRadius: '5px',
                                            width: '300px',
                                            padding: '5px'
                                        }}
                                        bgcolor={'rgba(255,255,255,0.4)'}
                                    >
                                        <Grid item xs={12}>
                                            <LazyLoadImage
                                                src={data.imagen}
                                                height={'200px'}
                                                alt={data.titulo}
                                            />
                                        </Grid>
                                        <Grid item xs={12} color={'black'} fontWeight={600}>
                                            {data.titulo}
                                        </Grid>
                                    </Grid>
                                </Button>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}