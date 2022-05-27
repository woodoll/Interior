import React from 'react';
import { Table, Tag, Space, Collapse } from 'antd';
import CommentModule from '../Comment';

const { Panel } = Collapse;

const columns = [
  {
    title: '답변상태',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        <Tag color="geekblue" key={tags}>
          {tags}
        </Tag>
      </>
    ),
  },
  {
    title: '상품정보',
    dataIndex: 'info',
    render: (info) => (
      <div style={{ minWidth: '60vw' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ background: '#dedede', marginRight: '1rem' }}>
              이미지 영역
            </div>
            <div>
              <p>상품이름</p>
              <p>판매처</p>
            </div>
          </div>
          <div>
            <p>YYMMDD</p>
          </div>
        </div>
        <div>
          <p>문의내용</p>
          <Collapse>
            <Panel header="답변하기">
              <CommentModule />
            </Panel>
          </Collapse>
        </div>
      </div>
    ),
  },
];

const data = [
  {
    key: '0',
    tags: '답변대기',
    info: '상품내용',
  },
  {
    key: '1',
    tags: '답변완료',
    info: '상품내용',
  },
];

const TableTag = () => {
  return <Table columns={columns} dataSource={data}></Table>;
};

export default TableTag;
