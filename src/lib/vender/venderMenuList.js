export const MenuList = [
  {
    key: 'sub1',
    title: '매출분석',
    sub: [
      {
        key: '1',
        title: '기간별 통계',
        url: 'statistics_period',
      },
      {
        key: '2',
        title: '상품별 통계',
        url: 'statistics_product',
      },
    ],
    url: 'non',
  },
  {
    key: 'sub2',
    title: '주문관리',
    sub: [
      {
        key: '3',
        title: '전체 주문리스트',
        url: 'all_list',
      },
      {
        key: '4',
        title: '배송관리',
        url: 'delivery',
      },
      {
        key: '5',
        title: '취소/교환/반품',
        url: 'exchange',
      },
    ],
    url: 'orders',
  },
  {
    key: 'sub3',
    title: '상품관리',
    sub: [
      {
        key: '6',
        title: '상품 리스트',
        url: 'all_list',
      },
      {
        key: '7',
        title: '상품 등록',
        url: 'add',
      },
      {
        key: '8',
        title: '상품 진열',
        url: 'display',
      },
      {
        key: '9',
        title: '진열상품 리스트',
        url: 'display_list',
      },
    ],
    url: 'goods',
  },
  {
    key: 'sub4',
    title: '게시판 관리',
    sub: [
      {
        key: '10',
        title: '상품 문의',
        url: 'goodsqna',
      },
      {
        key: '11',
        title: '상품 리뷰',
        url: 'goodsreview',
      },
    ],
    url: 'board',
  },
];
