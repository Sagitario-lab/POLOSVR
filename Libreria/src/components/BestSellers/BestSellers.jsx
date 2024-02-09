import {Box, Button, Grid} from "@mui/material";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {bestSellers, selectedBooksList,} from "../../Atoms/atoms.js";
import {useRecoilState, useRecoilValue} from 'recoil'
import {uniq} from "lodash";
import './BestSellers.css'


export const BestSellers = () => {
    const [newList, setNewList] = useRecoilState(selectedBooksList)
    const bestSellersArr = useRecoilValue(bestSellers)

    const addToList = (book) => {
        const array = uniq([...newList, book])
        setNewList(array)
    }

    return (
        <Grid container color={'white'}>
            <Grid item xs={12} display={'flex'} justifyContent={'center'} overflow={'hidden'}>
                <Carousel autoplay={true} showThumbs={false}>
                    {bestSellersArr.length > 0 && bestSellersArr.map((data, idx) => {
                        return (
                            <Grid
                                container
                                key={idx}
                                padding={{xs: 5, lg: 0}}
                            >
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        justifyContent={'space-evenly'}
                                    >
                                        <Grid item xs={12} lg={4} display={'flex'} justifyContent={'center'}
                                              alignItems={'center'}>
                                            <Box
                                                component={'img'}
                                                src={data.imagen}
                                                alt={data.titulo}
                                                height={'100%'}
                                                sx={{maxWidth: {md: '500px'}}}
                                            ></Box>
                                        </Grid>
                                        <Grid item xs={12} md={12} lg={5}>
                                            <Grid
                                                container
                                                justifyContent={'space-evenly'}
                                                alignItems={'center'}
                                                height={'100%'}
                                            >
                                                <Grid item xs={12}>
                                                    <Box id={'title'} sx={{fontSize: '2rem'}}>
                                                        {data.titulo}
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container sx={{textDecoration: 'underline black'}}>
                                                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                                                            Editorial: {data.editorial}
                                                        </Grid>
                                                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                                                            Autor: {data.autor}
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid
                                                    item xs={12}
                                                    fontWeight={700}
                                                    marginY={{xs: 1, lg: 0}}
                                                    sx={{overflow: 'hidden', height: '290px'}}>
                                                    {data.resumen}
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button
                                                        variant={'contained'}
                                                        onClick={() => addToList(data)}
                                                        color={'grey'}
                                                    >
                                                        Añadir a la lista
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Carousel>
            </Grid>
        </Grid>

    )
}