import {Button, Grid} from "@mui/material";
import {useRecoilState} from "recoil";
import {selectedBooksList} from "../../Atoms/atoms.js";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export const SelectedBooks = () => {
    const [bookList, setBookList] = useRecoilState(selectedBooksList)

    const newArr = bookList.map(data => ({...data, cantidad: 0}))

    const deleteBook = (libro) => {
        const filteredArr = newArr.filter(data => data.titulo !== libro)
        setBookList(filteredArr)
    }

    return (
        <Grid container>
            {bookList.length >= 1 ?
                <>
                    <Grid item xs={12} display={'flex'} justifyContent={'center'} fontSize={'2rem'}>
                        LISTA DE LIBROS
                    </Grid>

                    {newArr.map((data, idx) => {
                        return (
                            <Grid
                                item
                                xs={12}
                                key={idx}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                {data.titulo}
                                <Button
                                    onClick={() => deleteBook(data.titulo)}
                                >
                                    <ClearOutlinedIcon/>
                                </Button>
                            </Grid>
                        )
                    })}
                </>
                :
                <Grid container justifyContent={'center'} textAlign={'center'}>
                    <Grid item xs={12}>
                        No hay libros seleccionados
                    </Grid>
                </Grid>}
        </Grid>
    )
}