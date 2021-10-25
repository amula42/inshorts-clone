import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import categories from '../data/category';
import { Setcatg } from '../App';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const fname = useContext(Setcatg);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 , padding:1}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem
          sx={{borderRadius:1, height:40, textTransform:'capitalize'}}
          button
          onClick={() => fname(text)}
          key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      
        <React.Fragment key={"left"}>
            <Button sx={{color:'#000000'}} onClick={toggleDrawer("left", true)}>
              <MenuSharpIcon />
            </Button>
            <ThemeProvider theme={theme}>
                <SwipeableDrawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
                >
                {list("left")}
                </SwipeableDrawer>
            </ThemeProvider>
        </React.Fragment>
   
    </div>
  );
}
