import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import palette from '../../../styles/palette';

const Container = styled.div`
  width: 200px;
  background: ${palette.gray[3]};

  &.active {
    color: ${palette.gray[6]};
    overflow: auto;
    background: ${palette.gray[5]};
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 100vw;
    height: 50px;
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
  border-bottom: 1px solid ${palette.gray[3]};
  box-sizing: border-box;

  cursor: pointer;

  white-space: pre-wrap;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 50px;
  color: #fff;

  & + & {
  }

  &:hover {
    color: ${palette.gray[6]};
  }

  &.active {
    color: ${palette.gray[6]};
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
  color: ${palette.gray[6]};
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
      color: ${palette.gray[6]};
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
  const history = useHistory();

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
            history.push({
              pathname: `/master/${name}/${menu.url}`,
              state: {
                clicked: idx,
              },
            });
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

export default SidebarForm;
