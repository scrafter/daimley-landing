import React from 'react';
import useTranslation from '@/useTranslation';
import { MenuItemStyled } from '../MainMenu.styles';
import { Menu, MenuItem as MenuItemComponent } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface Props {
  label: string;
  subItems?: {
    label: string;
    link: string;
  }[];
}

function MenuItem({ label, subItems }: Props) {
  const { translate } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any, link?: string) => {
    if (link) {
      window.location.href = link;
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuItemStyled onClick={(event) => handleClick(event)}>
        {translate(label)}
        {subItems?.length && <ArrowDropDownIcon />}
      </MenuItemStyled>

      <Menu
        sx={{ top: `10px`, left: `50px` }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `basic-button`,
        }}
      >
        {subItems?.map((item) => (
          <MenuItemComponent
            onClick={(event) => handleClick(event, item.link)}
            key={`menu-subItem-${Math.random()}`}
          >
            {translate(item.label)}
          </MenuItemComponent>
        ))}
      </Menu>
    </>
  );
}

export default MenuItem;
