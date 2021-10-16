import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#2d313a !important',
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory()

  React.useEffect(() => {
    switch (value) {
      case 0:
        history.push('/')
        break;
    
      case 1:
        history.push('/movies')
        break;
    
      case 2:
        history.push('/series')
        break;
    
      case 3:
        history.push('/search')
        break;
    
      default:
        break;
    }
  }, [value, history])

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        className={classes.root}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color: 'white'}} label='Trending' icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color: 'white'}} label='Movies' icon={<MovieIcon />} />
        <BottomNavigationAction style={{color: 'white'}} label='TV Series' icon={<TvIcon />} />
        <BottomNavigationAction style={{color: 'white'}} label='Search' icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
