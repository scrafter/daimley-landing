import React from 'react';
import DrawerComponent from '@mui/material/Drawer';
import List from '@mui/material/List';
import { MENU_ITEMS } from '@/components/MainMenu/menuItems';
import DrawerItem from '@/components/MainMenu/Drawer/DrawerItem/DrawerItem';

interface Props {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

function Drawer({ open, toggleDrawer }: Props) {
  return (
    <DrawerComponent
      open={open}
      ModalProps={{ onBackdropClick: () => toggleDrawer(false) }}
    >
      <List style={{ fontSize: `24px`, width: `50vw` }}>
        {MENU_ITEMS.map((item) => (
          <DrawerItem
            label={item.label}
            items={item.subItems}
            toggleDrawer={toggleDrawer}
          />
        ))}
      </List>
    </DrawerComponent>
  );
}

export default Drawer;
