import { Grid } from '@material-ui/core';
import Image from './Image';


const Images = ({ data }) => {
    return(
        <Grid container>
        {
    data.map(image => ( 
        <Grid xs={3} item key={image.id} ><Image image={image}/></Grid>
    ))
        }
        </Grid>
    );
}

export default Images;