import {Box, Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react'
import {useRecoilValue} from "recoil";
import {allBooks} from "../../Atoms/atoms.js";

export const MultipleBooksView = ({autor}) => {
    const navigate = useNavigate();
    const [libros, setLibros] = useState([])
    const allBooksArr = useRecoilValue(allBooks)

    const navigateTo = (route) => navigate(route);

    useEffect(() => {
        const array = allBooksArr.filter(data => data.autor === autor)
        setLibros(array)
    }, [allBooksArr, autor])

    return (
        <Grid container justifyContent={'center'}>
            <Grid item xs={12}>
                <Grid container sx={{flexWrap: 'wrap'}}>
                    {libros && <>
                        {libros.map((data, idx) => {

                            return (
                                <Grid
                                    key={idx}
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={2}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                >
                                    <Button onClick={() => {
                                        navigateTo(`/libro/${data._id}`)
                                    }}>
                                        <Box component={'img'} src={data.imagen} height={'200px'}></Box>
                                    </Button>
                                </Grid>
                            )
                        })}</>}
                </Grid>
            </Grid>
        </Grid>
    )
}