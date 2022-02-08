import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import SidebarForm from './SidebarForm';
import { MenuList } from './MenuList';

const SidemenuContainerBLock = styled.div`
  height: 100%;
  background: ${palette.gray[3]};
  overflow: scroll;
  // 스크롤 바 제거
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;

const SidemenuContainer = () => {
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

export default SidemenuContainer;
