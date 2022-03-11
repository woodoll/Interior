import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import palette from '../../../styles/palette';

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

  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }

  @media (max-width: 1024px) {
    width: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
  }
`;

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

const SidebarForm = ({
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
        {lists.map((menu, idx) => {
          const handleLink = (e, idx) => {
            setClickedIdx(idx);
            navigate(`/vender/${name}/${menu.url}`);
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
  );
};

const SidebarSection = () => {
  const [activeIndex, setActiveIndex] = useState();
  const [onActive, setOnActive] = useState(false);

  const MenuList = [
    {
      name: 'order',
      title: '주문 관리',
      lists: [
        {
          title: '전체 주문내역',
          url: 'all_list',
        },
        {
          title: '무통장 입금',
          url: 'bank',
        },
        {
          title: '배송처리',
          url: 'delivery',
        },
        {
          title: '교환요청',
          url: 'exchange',
        },
        {
          title: '주문취소',
          url: 'cancel',
        },
        {
          title: '환불요청',
          url: 'refund',
        },
      ],
    },
    {
      name: 'goods',
      title: '상품 관리',
      lists: [
        {
          title: '전체 상품목록',
          url: 'all_list',
        },
        {
          title: '상품 등록',
          url: 'add',
        },
      ],
    },
  ];

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
