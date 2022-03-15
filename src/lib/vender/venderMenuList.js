export const VenderMenuList = [
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
