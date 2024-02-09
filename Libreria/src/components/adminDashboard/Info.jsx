import {Grid} from "@mui/material";

export const Info = () => {
    return (
        <Grid container>
            <ul>
                <Grid item xs={12}>
                    <li>
                        El primer formulario se usa para cargar los libros a la base de datos, ingrese todos los datos y
                        al final dele al botón de "AGREGAR" para añadir el libro, luego, para ver reflejado el cambio,
                        recargue
                        la página.
                    </li>
                </Grid>
                <Grid>
                    <li>
                        En el boton de la derecha, al hacerle clic se abrirá un cartel en el cual tendrá la lista de
                        libros actuales en su página, busque el deseado para eliminarlo y una vez seleccionado se
                        añadirá a una lista a la derecha, simplemente seleccione "BORRAR LIBROS" para eliminarlos.
                    </li>
                </Grid>
                <Grid item xs={12}>
                    <li>
                        El primer formulario se usa para cargar los mas vendidos a la base de datos, ingrese todos los
                        datos y
                        al final dele al botón de "AGREGAR" para añadir el libro mas vendido, luego, para ver reflejado
                        el cambio,
                        recargue la página.
                    </li>
                </Grid>
                <Grid>
                    <li>
                        En el boton de la derecha, al hacerle clic se abrirá un cartel en el cual tendrá la lista de
                        libros actuales en su página, busque el deseado para eliminarlo y una vez seleccionado se
                        añadirá a una lista a la derecha, simplemente seleccione "BORRAR MAS VENDIDO" para eliminarlos.
                    </li>
                </Grid>
            </ul>
        </Grid>
    )
}