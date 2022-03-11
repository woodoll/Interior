import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import palette from '../../../styles/palette';

const SidemenuContainerBLock = styled.div`
  width: 200px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  background: ${palette.gray[7]};
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
  background: ${palette.gray[5]};
  color: ${palette.gray[0]};
  flex-grow: 1;

  &.active {
    color: ${palette.gray[7]};
    overflow: auto;
    background: ${palette.gray[9]};
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
  border-bottom: 1px solid ${palette.gray[3]};
  box-sizing: border-box;

  cursor: pointer;

  white-space: pre-wrap;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 50px;
  color: inherit;

  &:hover {
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
            navigate(`/master/${name}/${menu.url}`);
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
      name: 'venders',
      title: '판매사 관리',
      lists: [
        {
          title: '판매사 전체',
          url: 'all_list',
        },
        {
          title: '판매사 추가',
          url: 'approve',
        },
        {
          title: '판매사 복원',
          url: 'restore',
        },
      ],
    },
    {
      name: 'dealers',
      title: '시공자 관리',
      lists: [
        {
          title: '전체 시공자',
          url: 'all_list',
        },
        {
          title: '시공자 추가',
          url: 'add',
        },
        {
          title: '시공자 수정',
          url: 'update',
        },
        {
          title: '시공자 제거',
          url: 'remove',
        },
      ],
    },
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
        {
          title: '상품 제거',
          url: 'remove',
        },
        {
          title: '진열 여부',
          url: 'display',
        },
        {
          title: '우선 순위',
          url: 'priority',
        },
      ],
    },
    {
      name: 'customers',
      title: '고객관리',
      lists: [
        {
          title: '전체 회원',
          url: 'all_list',
        },
        {
          title: '탈퇴 회원',
          url: 'out_list',
        },
        {
          title: '자격정지 회원',
          url: 'stop_list',
        },
        {
          title: '상품 후기',
          url: 'reviews',
        },
        {
          title: '상품 문의',
          url: 'questions',
        },
        {
          title: 'SNS 로그인 연동',
          url: 'sns_login',
        },
      ],
    },
    {
      name: 'point',
      title: '적립금 관리',
      lists: [
        {
          title: '전체 적립금',
          url: 'all_list',
        },
        {
          title: '적립금 직권 지금',
          url: 'add',
        },
        {
          title: '적립금 직권 차감',
          url: 'remove',
        },
        {
          title: '적립금 관리',
          url: 'config',
        },
      ],
    },
    {
      name: ' promotion',
      title: '프로모션',
      lists: [
        {
          title: '전체 프로모션',
          url: 'all_list',
        },
        {
          title: '프로모션 추가',
          url: 'add',
        },
        {
          title: '프로모션 삭제',
          url: 'remove',
        },
        {
          title: '프로모션 수정',
          url: 'update',
        },
      ],
    },
    {
      name: 'design',
      title: '디자인 관리',
      lists: [
        {
          title: '메인화면',
          url: 'main',
        },
        {
          title: '베너관리',
          url: 'banner',
        },
      ],
    },
    {
      name: 'popup',
      title: '팝업 관리',
      lists: [
        {
          title: '팝업 내역',
          url: 'all_list',
        },
        {
          title: '팝업 추가',
          url: 'add',
        },
        {
          title: '팝업 삭제',
          url: 'remove',
        },
        {
          title: '팝업 수정',
          url: 'update',
        },
      ],
    },
    {
      name: 'boaed',
      title: '게시판 관리',
      lists: [
        {
          title: '공지사항',
          url: 'info',
        },
        {
          title: 'Q&A',
          url: 'qna',
        },
        {
          title: 'FAQ',
          url: 'faq',
        },
        {
          title: '웹진',
          url: 'webjin',
        },
      ],
    },
    {
      name: 'sales',
      title: '매출 분석',
      lists: [
        {
          title: '기간별 통계',
          url: 'period',
        },
        {
          title: '상품별 통계',
          url: 'goods',
        },
        {
          title: '판매사별 통계',
          url: 'venders',
        },
      ],
    },
    {
      name: 'visit',
      title: '접속 통계',
      lists: [
        {
          title: '접속 통계',
          url: 'entire',
        },
        {
          title: '방문/가입 현황',
          url: 'visit',
        },
        {
          title: '개별방문 기록',
          url: 'detail',
        },
        {
          title: '포털유입 현황',
          url: 'portal',
        },
        {
          title: '포털 키워드 분석',
          url: 'keyword',
        },
      ],
    },
    {
      name: 'service',
      title: '서비스',
      lists: [
        {
          title: '전자결재(PG)',
          url: 'pg',
        },
        {
          title: '무통장/계좌 설정',
          url: 'bank',
        },
        {
          title: '문자(SMS)',
          url: 'sms',
        },
        {
          title: '고객용 자동발송(SMS)',
          url: 'sms_customers',
        },
        {
          title: '제조사 자동발송(SMS)',
          url: 'ses_venders',
        },
        {
          title: '시공업자 자동발송(SMS)',
          url: 'sms_dealers',
        },
        {
          title: '배송/택배',
          url: 'delivery',
        },
      ],
    },
    {
      name: 'config',
      title: '환경설정',
      lists: [
        {
          title: '기본 설정',
          url: 'basic',
        },
        {
          title: '약관/개인정보 처리',
          url: 'policy',
        },
        {
          title: '환불 및 교환/반품 안내',
          url: 'return',
        },
        {
          title: '서비스 연동',
          url: 'service',
        },
        {
          title: '지역별 배송비 설정',
          url: 'delivery',
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
