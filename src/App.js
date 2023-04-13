import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import { ListItemButton, ListItemText, ListItem, List } from '@mui/material';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <img src={logo} alt="logo" style={{ width: 300, marginBottom: 50 }} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        {/* <Button variant="contained" size="large">Submit</Button> */}
        <IconButton color="primary" aria-label="upload picture" component="label" size="large">
          {/* <input hidden accept="image/*" type="file" /> */}
          <ControlPointRoundedIcon />
        </IconButton>

      </div>
      <List sx={{ bgcolor: 'background.paper', textAlign: 'center' }}>
        {[1, 2, 3].map((value) => (
          <ListItem
            key={value}
            disableGutters
          >
            <ListItemText primary={`Line item ${value}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}



export default App;
