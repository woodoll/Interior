/* #region  import */
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuList } from 'lib/vender/venderMenuList';
// import { useNavigate } from 'react-router-dom';

// import palette from 'lib/styles/palette';
// /* #endregion */

import { Menu } from 'antd';
import {
  PieChartOutlined,
  CreditCardOutlined,
  FormatPainterOutlined,
  ProfileOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

const SiderMenu = () => {
  const [openKeys, setOpenKeys] = React.useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ minHeight: '100vh' }}
    >
      <SubMenu
        key={MenuList[0].key}
        icon={<PieChartOutlined />}
        title={MenuList[0].title}
      >
        <Menu.Item key={MenuList[0].sub[0].key}>
          <Link to={`/`}>{MenuList[0].sub[0].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[0].sub[1].key}>
          <Link to={`/`}>{MenuList[0].sub[1].title}</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key={MenuList[1].key}
        icon={<CreditCardOutlined />}
        title={MenuList[1].title}
      >
        <Menu.Item key={MenuList[1].sub[0].key}>
          <Link to={`/orders/all_list`}>{MenuList[1].sub[0].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[1].sub[1].key}>
          <Link to={`/orders/delivery`}>{MenuList[1].sub[1].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[1].sub[2].key}>
          <Link to={`/orders/return`}>{MenuList[1].sub[2].title}</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key={MenuList[2].key}
        icon={<FormatPainterOutlined />}
        title={MenuList[2].title}
      >
        <Menu.Item key={MenuList[2].sub[0].key}>
          <Link to={`/goods/all_list`}>{MenuList[2].sub[0].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[2].sub[1].key}>
          <Link to={`/goods/add`}>{MenuList[2].sub[1].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[2].sub[2].key}>
          <Link to={`/goods/display`}>{MenuList[2].sub[2].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[2].sub[3].key}>
          <Link to={`/goods/display_list`}>{MenuList[2].sub[3].title}</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key={MenuList[3].key}
        icon={<ProfileOutlined />}
        title={MenuList[3].title}
      >
        <Menu.Item key={MenuList[3].sub[0].key}>
          <Link to={`/board/goodsqna`}>{MenuList[3].sub[0].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[3].sub[1].key}>
          <Link to={`/board/goodsreview`}>{MenuList[3].sub[1].title}</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SiderMenu;
