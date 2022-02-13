import React, { useState } from 'react';
import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import useTranslation from '@/useTranslation';

interface Props {
  toggleDrawer: (open: boolean) => void;
  label: string;
  items?: {
    label: string;
    link: string;
  }[];
}

function DrawerItem({ label, items, toggleDrawer }: Props) {
  const { translate } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => setIsOpen(!isOpen);

  const onClick = (link: string) => {
    window.location.href = link;
    toggleDrawer(false);
  };

  return (
    <>
      <ListItemButton onClick={handleCollapse}>
        <ListItemText primary={translate(label)} />
      </ListItemButton>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((subItem) => (
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => onClick(subItem.link)}
            >
              <ListItemText primary={translate(subItem.label)} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default DrawerItem;
