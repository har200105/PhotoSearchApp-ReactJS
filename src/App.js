import {Box} from '@material-ui/core';
import {useEffect,useState} from 'react';
import Navbar from './components/Navbar';
import BreadCrumb from './components/BreadCrumb';
import {getImages} from './services/api';
import Images from './components/Images';
import Snackbar from './components/Snackbar';

function App() {

  const[data,setData]=useState([]);
  const[count,setCount]=useState(20);
  const[text,setText]=useState('mountains');
  const[open,setSnack] = useState(false);
  useEffect(()=>{
    if(count<3 || count >200){
      setSnack(true);
      return ;
    }
    setSnack(false);
    getImages(text,count).then(response=>{
      setData(response.data.hits);
      console.log(response.data.hits);
    },[text,count]);
  });
  const onDataChanged=(text)=>{
   setText(text); 
  }

  const onCountChanged=(count)=>{
    setCount(count);
  }
    return (
      <Box>
      <Navbar/>
      <BreadCrumb onDataChanged={onDataChanged}  onCountChanged={onCountChanged}/>
      <Images data={data}/>
      <Snackbar open={open} setSnack={setSnack}/>
      </Box>
      );
    }
    
export default App;
