
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
  screen: {
    background: '#000000',
    border: 0,
    borderRadius: 3,
    marginTop: 30,
    marginLeft: '1.6%',
    marginRight: '68.5%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    width: '240px',
    textAlign: "end",
    fontSize: '45px',
    fontFamily: 'serif',
    height: 48,
    padding: '0 30px',
  },
  button: {
    background: '#C3C3C3',
    border: 0,
    margin: '4px',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  operator: {
    background: '#C3C3C3',
    border: 0,
    margin: '4px',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  delbutton: {
    background: 'linear-gradient(45deg, red 30%, red 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  equalbutton: {
    background: 'linear-gradient(45deg, blue 30%, blue 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: '220px',
    marginLeft: '-4px',
    width: '70px',
    padding: '0 30px',
    display: "inline-block",
  },

  root:{
    flexGrow: 1,
    width: "1000px",
    height: "100px",
    marginLeft: "40%",
    marginRight: "40%",
  },
  
});
