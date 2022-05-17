/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';
import {
  Input,
  Select,
  Radio,
  DatePicker,
  Button,
  Divider,
  Space,
  PageHeader,
  Form,
  Breadcrumb,
  Table,
} from 'antd';

import { productOptProductType } from 'lib/vender/options';
import { productOptMnfctType } from 'lib/vender/options';
import CheckTable from 'lib/common/table/Table_check';
/* #endregion */

/* #region  styles */
const Goods_listBlock = styled(Responsive)``;

const AddSection = styled.div`
  display: flex;
  flex-direction: row;
  p {
    width: 100px;
  }
`;

const itemLayout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 7,
  },
};
/* #endregion */

const options = [
  {
    value: '00',
    label: '상품명',
    value: '01',
    label: '상품코드',
    value: '02',
    label: '자체상품코드',
  },
];

const columns = [
  // {
  //   title: '이미지',
  //   dataIndex: 'smallImage',
  //   render: (goods) => (
  //     <div
  //       style={{
  //         border: '1px solid red',
  //         width: '100px',
  //         height: '100px',
  //       }}
  //     >
  //       <img src={`http://localhost:8081/${goods.smallImage}`} />
  //     </div>
  //   ),
  // },
  {
    title: '상품이름',
    dataIndex: 'productName',
  },
  {
    title: '상품코드',
    dataIndex: 'productCode',
  },
  {
    title: '등록일시',
    dataIndex: 'createDate',
  },
  {
    title: '판매가',
    dataIndex: 'sellingPrice',
  },
];
const Goods_list = ({ goods }) => {
  const { RangePicker } = DatePicker;
  const dataProduct = goods;
  console.log(dataProduct);

  return (
    <Goods_listBlock>
      <PageHeader
        className="PageHeader"
        title="상품목록"
        extra={[
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>홈</Breadcrumb.Item>
            <Breadcrumb.Item>상품 관리</Breadcrumb.Item>
            <Breadcrumb.Item>상품 리스트</Breadcrumb.Item>
          </Breadcrumb>,
        ]}
      />
      <Divider />
      <Form name="all_list" encType="multipart/form-data" labelAlign="left">
        <Form.Item label="상품 분류별" {...itemLayout} name="productValue">
          <Select
            style={{ width: '100px', marginRight: '1rem' }}
            name="productType"
            options={productOptProductType}
            defaultValue={productOptProductType[0]}
            placeholder="분류"
          />
        </Form.Item>
        <Form.Item label="색상계열" {...itemLayout} name="colorOption">
          <Radio.Group defaultValue="red">
            <Radio.Button value="red" style={{ background: 'red' }} />
            <Radio.Button value="orange" style={{ background: 'orange' }} />
            <Radio.Button value="yellow" style={{ background: 'yellow' }} />
            <Radio.Button value="green" style={{ background: 'green' }} />
            <Radio.Button value="skyblue" style={{ background: 'skyblue' }} />
            <Radio.Button value="blue" style={{ background: 'blue' }} />
            <Radio.Button value="purple" style={{ background: 'purple' }} />
            <Radio.Button value="white" style={{ background: 'white' }} />
            <Radio.Button value="black" style={{ background: 'black' }} />
            <Radio.Button value="gray" style={{ background: 'gray' }} />
            <Radio.Button value="pink" style={{ background: 'pink' }} />
            <Radio.Button value="beige" style={{ background: 'beige' }} />
          </Radio.Group>
        </Form.Item>
        <Form.Item label="재고상태" {...itemLayout} name="stockStatus">
          <Radio.Group defaultValue="00">
            <Radio.Button value="00">전체</Radio.Button>
            <Radio.Button value="01">재고있음</Radio.Button>
            <Radio.Button value="02">품절</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="등록일" {...itemLayout} name="dateSearch">
          <RangePicker />
        </Form.Item>
        <Form.Item label="상세조건" {...itemLayout} name="detailSearch">
          <Input />
        </Form.Item>
        <div>
          <Button type="primary">검색</Button>
          <Button>초기화</Button>
        </div>
      </Form>
      <Divider />
      <Table columns={columns} dataSource={dataProduct} />
    </Goods_listBlock>
  );
};

export default Goods_list;
