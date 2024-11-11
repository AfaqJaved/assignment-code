import React, { FC } from 'react';
import MenuItem from './MenuItem';

const MenuItems: FC = () => (
  <>
    <MenuItem title="Home" />
    <MenuItem title="Employees" submenu={['List', 'Add New', 'Reports']} />
    <MenuItem title="Departments" />
    <MenuItem title="Projects" submenu={['Active', 'Completed', 'Upcoming']} />
    <MenuItem title="Settings" />
  </>
);

export default MenuItems;