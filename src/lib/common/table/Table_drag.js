import React from 'react';
import { Table, Space } from 'antd';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import { arrayMoveImmutable } from 'array-move';

const DragHandle = SortableHandle(() => (
  <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />
));

const columns = [
  {
    title: '순서변경',
    dataIndex: 'sort',
    width: 60,
    className: 'drag-visible',
    render: () => <DragHandle />,
  },
  {
    title: '이미지',
    dataIndex: 'file',
    className: 'drag-visible',
    width: 200,
  },
  {
    title: '상세정보',
    dataIndex: 'detail',
    render: (text, record) => (
      <Space>
        <p style={{ width: '100px' }}>노출 상품명</p>
        <p>{record.detail.name}</p>
      </Space>
    ),
  },
  {
    title: '삭제',
    key: 'action',
    render: (text) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    file: '이미지영역',
    detail: {
      name: '상품이름',
    },
    index: 0,
  },
  {
    key: '2',
    file: '이미지영역',
    detail: {
      name: '상품이름',
    },
    index: 1,
  },
  {
    key: '3',
    file: '이미지영역',
    detail: {
      name: '상품이름',
    },
    index: 2,
  },
];

const SortableItem = SortableElement((props) => <tr {...props} />);
const SortableBody = SortableContainer((props) => <tbody {...props} />);

const SortableTable = () => {
  const dataSource = data;

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(
        [].concat(dataSource),
        oldIndex,
        newIndex,
      ).filter((el) => !!el);
      console.log('Sorted items: ', newData);
      this.setState({ dataSource: newData });
    }
  };

  const DraggableContainer = (props) => (
    <SortableBody
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(
      (x) => x.index === restProps['data-row-key'],
    );
    return <SortableItem index={index} {...restProps} />;
  };

  return (
    <Table
      pagination={false}
      dataSource={dataSource}
      columns={columns}
      rowKey="index"
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
    />
  );
};

export default SortableTable;
