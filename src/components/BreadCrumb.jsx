import { Box, makeStyles, TextField } from "@material-ui/core";


const useStyles = makeStyles(theme=>({
    component:{
        background:"#F6F6F6",
        '& > *': {
            margin:theme.spacing(1),
        }
    }
}));

const BreadCrumb = ({onDataChanged,onCountChanged})=>{
    const classes= useStyles();
    return (
        <Box m={1} className={classes.component}>
        <TextField
        label="Search Images"
        onChange={(e)=>onDataChanged(e.target.value)}
        />
        <TextField
        label="No of Images"
        onChange={(e)=>onCountChanged(e.target.value)}
        />
        </Box>
    );
}


export default BreadCrumb;