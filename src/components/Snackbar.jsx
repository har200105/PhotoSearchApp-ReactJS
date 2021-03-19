import { Snackbar} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

const Snackbars = ({open, setSnack}) => {

    const handleClose=()=>{
        setSnack(false);
    }
    return (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <MuiAlert severity="info" onClose={handleClose}>
        Number of Images Should be between 3-200
        </MuiAlert>
        </Snackbar>
    );
}


export default Snackbars;
