/* #region  import */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
// import palette from 'lib/styles/palette';
// /* #endregion */

import { Menu } from 'antd';
import {
  PieChartOutlined,
  CreditCardOutlined,
  FormatPainterOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
=======
import palette from 'lib/styles/palette';
/* #endregion */

/* #region  styles */
const SidemenuContainerBLock = styled.div`
  width: 200px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  background: ${palette.blue[5]};
  overflow-y: scroll;
  // 스크롤 바 제거
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
>>>>>>> parent of 872dc29 (04/12)

<<<<<<< HEAD
=======
  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }

<<<<<<< HEAD
>>>>>>> 304ed38 (04/27-1)
// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];
=======
  @media (max-width: 1024px) {
    width: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
  }
`;
>>>>>>> parent of 872dc29 (04/12)

const Container = styled.div`
  width: 100%;
  background: ${palette.blue[5]};
  color: ${palette.blue[0]};

  &.active {
    color: ${palette.blue[7]};
    overflow: auto;
    background: ${palette.blue[9]};
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 100vw;
    position: sticky;
    top: 0;
    font-size: 16px;
  }
`;

const FirstMenu = styled.div`
  width: 100%;
  height: 50px;
  padding-left: 0.625rem;
  overflow: hidden;
  border-bottom: 1px solid ${palette.blue[3]};
  box-sizing: border-box;

  cursor: pointer;

  white-space: pre-wrap;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 50px;
  color: inherit;

  &:hover {
    color: ${palette.blue[6]};
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    width: 20vw;
    height: 50px;
    line-height: 50px;
    padding: 0;
    text-align: center;
  }
`;

const SecondMenu = styled.div`
  display: block;
  width: 100%;
  padding: 0.25rem;

  &.closed {
    display: none;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

const List = styled.div`
  cursor: pointer;
  white-space: pre-wrap;
  color: ${palette.blue[6]};
  padding: 0.5rem;
  transition: 0.25s;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;

  & + & {
  }

  &:hover {
  }

  ${(props) =>
    props.active &&
    css`
      color: ${palette.blue[6]};
    `}

  @media screen and (max-width: 768px) {
    margin: 0.125rem 0;
    padding: 0;
    font-size: 0.75em;
    text-align: center;
  }
`;

/* #endregion */

const SidebarForm = ({
  pageuser,
  title,
  name,
  lists,
  active,
  activeIndex,
  setActiveIndex,
  onActive,
  onToggle,
  idx,
}) => {
  const navigate = useNavigate();

  const [clickedIdx, setClickedIdx] = useState();

  const handleClick = () => {
    setActiveIndex(idx);
    setClickedIdx(null);
    onToggle();
  };

  return (
    <Container className={active}>
      <FirstMenu onClick={handleClick}>{title}</FirstMenu>
      <SecondMenu
        className={idx === activeIndex && onActive === true ? '' : 'closed'}
      >
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 304ed38 (04/27-1)
        <Menu.Item key={MenuList[0].sub[0].key}>
          <Link to={`/vender/`}>{MenuList[0].sub[0].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[0].sub[1].key}>
          <Link to={`/vender/`}>{MenuList[0].sub[1].title}</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key={MenuList[1].key}
        icon={<CreditCardOutlined />}
        title={MenuList[1].title}
      >
        <Menu.Item key={MenuList[1].sub[0].key}>
          <Link to={`/vender/orders/all_list`}>{MenuList[1].sub[0].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[1].sub[1].key}>
          <Link to={`/vender/orders/delivery`}>{MenuList[1].sub[1].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[1].sub[2].key}>
          <Link to={`/vender/orders/return`}>{MenuList[1].sub[2].title}</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key={MenuList[2].key}
        icon={<FormatPainterOutlined />}
        title={MenuList[2].title}
      >
        <Menu.Item key={MenuList[2].sub[0].key}>
          <Link to={`/vender/goods/all_list`}>{MenuList[2].sub[0].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[2].sub[1].key}>
          <Link to={`/vender/goods/add`}>{MenuList[2].sub[1].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[2].sub[2].key}>
          <Link to={`/vender/goods/display`}>{MenuList[2].sub[2].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[2].sub[3].key}>
          <Link to={`/vender/goods/display_list`}>
            {MenuList[2].sub[3].title}
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key={MenuList[3].key}
        icon={<ProfileOutlined />}
        title={MenuList[3].title}
      >
        <Menu.Item key={MenuList[3].sub[0].key}>
          <Link to={`/vender/board/goodsqna`}>{MenuList[3].sub[0].title}</Link>
        </Menu.Item>
        <Menu.Item key={MenuList[3].sub[1].key}>
          <Link to={`/vender/board/goodsreview`}>
            {MenuList[3].sub[1].title}
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
=======
        {lists.map((menu, idx) => {
          const handleLink = (e, idx) => {
            setClickedIdx(idx);
            navigate(`/${pageuser}/${name}/${menu.url}`);
          };
          return (
            <List
              key={idx}
              onClick={(e) => handleLink(e, idx)}
              className={clickedIdx === idx ? 'strong' : ''}
            >
              {menu.title}
            </List>
          );
        })}
      </SecondMenu>
    </Container>
>>>>>>> parent of 872dc29 (04/12)
  );
};

const SidebarSection = ({ MenuList, pageuser }) => {
  const [activeIndex, setActiveIndex] = useState();
  const [onActive, setOnActive] = useState(false);

  return (
    <SidemenuContainerBLock>
      {MenuList.map((item, idx) => {
        const onToggle = () => {
          if (idx === activeIndex && onActive === true) {
            setOnActive(false);
          } else {
            setOnActive(true);
          }
        };

        const active = idx === activeIndex && onActive === true ? 'active' : '';
        return (
          <SidebarForm
            pageuser={pageuser}
            key={idx}
            title={item.title}
            idx={idx}
            name={item.name}
            lists={item.lists}
            active={active}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            onActive={onActive}
            setOnActive={setOnActive}
            onToggle={onToggle}
          />
        );
      })}
    </SidemenuContainerBLock>
  );
};

export default SidebarSection;
