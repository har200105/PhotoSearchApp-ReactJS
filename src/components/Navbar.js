import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import CollectionsIcon from '@material-ui/icons/Collections';

const useStyles =makeStyles({
    component:{
        background:'purple'
    }
});

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component} position="static">
        <Toolbar>
        <CollectionsIcon/>
        <Typography variant="h5" style={{marginLeft:10}}>
        Image Finder
        </Typography>
        </Toolbar>
        </AppBar>
    );
}

export default Navbar;