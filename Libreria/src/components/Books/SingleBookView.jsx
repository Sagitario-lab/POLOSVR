import {Box, Button, Divider, Grid} from "@mui/material";
import {MultipleBooksView} from '../Books/MultipleBooksView.jsx'
import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react'
import {useRecoilState, useRecoilValue} from "recoil";
import {allBooks, selectedBooksList} from "../../Atoms/atoms.js";
import {uniq} from "lodash";

export const SingleBookView = () => {
    const {id} = useParams()
    const [selectedBook, setSelectedBook] = useState()
    const booksArr = useRecoilValue(allBooks)
    const [newList, setNewList] = useRecoilState(selectedBooksList)


    useEffect(() => {
        const selectBook = booksArr.find(data => {
            return data._id == id
        })
        setSelectedBook(selectBook)
    }, [id])

    const addToList = (book) => {
        const array = uniq([...newList, book])
        setNewList(array)
    }


    return (
        <Grid container color={'black'} justifyContent={'center'}>
            <Grid item xs={12} display={'flex'} justifyContent={'space-evenly'} flexWrap={'wrap'}
                  bgcolor={'rgba(255,255,255,0.6)'}>
                {selectedBook && <Grid container justifyContent={'center'}>
                    <Grid item xs={12} md={4} bgcolor={'red'}>
                        <Box component={'img'} src={selectedBook.imagen} alt={selectedBook.titulo}
                             height={'100%'} width={'100%'}></Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={7}
                        display={'flex'}
                        justifyContent={'space-around'}
                        flexDirection={'column'}
                    >
                        <Grid container>
                            <Grid item xs={12} display={'flex'} textAlign={'center'} justifyContent={'center'}
                                  fontSize={'2rem'}>
                                {selectedBook.titulo}
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container sx={{textDecoration: 'underline black'}}>
                                    <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                                        Editorial: {selectedBook.editorial}
                                    </Grid>
                                    <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                                        Autor: {selectedBook.autor}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'center'}>
                            <Grid item xs={12} padding={{xs: 1, md: 0}} md={9} textAlign={'center'}>
                                {selectedBook.resumen}
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'center'}>
                            <Grid item xs={12} margin={{xs: 1, md: 0}} md={3}>
                                <Grid container justifyContent={'center'} textAlign={'center'}>
                                    <Grid item xs={12}>
                                        {selectedBook.precio}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant={'contained'}
                                            onClick={() => addToList(selectedBook)}
                                            color={'grey'}
                                        >
                                            Añadir a la lista
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider color={'black'} orientation={'horizontal'}/>
                    </Grid>
                    <Grid item xs={12}>
                        <MultipleBooksView autor={selectedBook.autor}/>
                    </Grid>
                </Grid>}
            </Grid>
        </Grid>
    )
}