/* #region  import */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// /* #endregion */

import { Menu } from 'antd';

const { SubMenu } = Menu;

const Sidebarblock = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

const SiderMenu = ({ menulist }) => {
  const [openKeys, setOpenKeys] = React.useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const menu = menulist.map((main) => {
    return (
      <SubMenu key={main.key} title={main.title} icon={main.icon}>
        {main.sub.map((sublist) => {
          return (
            <Menu.Item key={sublist.key}>
              <Link to={main.url + '/' + sublist.url}>{sublist.title}</Link>
            </Menu.Item>
          );
        })}
      </SubMenu>
    );
  });

  return (
    <Sidebarblock>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ minHeight: '100vh' }}
      >
        {menu}
      </Menu>
    </Sidebarblock>
  );
};

export default SiderMenu;
