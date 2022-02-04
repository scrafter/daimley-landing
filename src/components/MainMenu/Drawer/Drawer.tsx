import React from 'react';
import DrawerComponent from '@mui/material/Drawer';
import useTranslation from '@/useTranslation';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from '@mui/material';

interface Props {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

function Drawer({ open, toggleDrawer }: Props) {
  const { translate } = useTranslation();

  const onClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <DrawerComponent
      open={open}
      ModalProps={{ onBackdropClick: () => toggleDrawer(false) }}
    >
      <List style={{ fontSize: `24px`, width: `50vw` }}>
        <ListItem onClick={() => onClick(`/`)}>
          <ListItemText primary={translate(`menu.main`)} />
        </ListItem>
        <ListItem onClick={() => onClick(`/trainings`)}>
          <ListItemText primary={translate(`menu.trainings`)} />
        </ListItem>
        <ListItem onClick={() => onClick(`/recruitment`)}>
          <ListItemText primary={translate(`menu.recruitment`)} />
        </ListItem>
        <ListItem onClick={() => onClick(`/about-us`)}>
          <ListItemText primary={translate(`menu.aboutUs`)} />
        </ListItem>
        <ListItem onClick={() => onClick(`/contact`)}>
          <ListItemText primary={translate(`menu.contact`)} />
        </ListItem>
      </List>
    </DrawerComponent>
  );
}

export default Drawer;
