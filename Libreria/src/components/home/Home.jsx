import {Divider, Grid} from "@mui/material";
import {BestSellers} from "../BestSellers/BestSellers.jsx";
import {AllBooks} from "../AllBooks/AllBooks.jsx";

export const Home = () => {

    return (
        <Grid container justifyContent={'center'} spacing={1}>
            <Grid item xs={12}>
                <BestSellers/>
            </Grid>
            <Grid item xs={12}>
                <Divider color={'gray'} orientation={'horizontal'}/>
            </Grid>
            <Grid item xs={12}>
                <AllBooks/>
            </Grid>
        </Grid>
    )
}