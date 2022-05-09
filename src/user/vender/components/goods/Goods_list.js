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
} from 'antd';

import { productOptProductType } from 'lib/vender/options';
import { productOptMnfctType } from 'lib/vender/options';
import CheckTable from 'lib/common/table/Table_check';
/* #endregion */

/* #region  styles */
const Goods_listBlock = styled(Responsive)``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

const AddSection = styled.div`
  display: flex;
  flex-direction: row;
  p {
    width: 100px;
  }

  Select,
  Input {
    width: 100px;
    height: fit-content;
  }
`;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
const Goods_list = () => {
>>>>>>> parent of 872dc29 (04/12)
>>>>>>> 304ed38 (04/27-1)
=======
>>>>>>> 7911096 (05/09)
  const { RangePicker } = DatePicker;
  return (
    <Goods_listBlock>
      <PageHeader className="PageHeader" title="상품목록" />
      <Divider />
      <Form>
        <Space direction="vertical" size={12}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <AddSection style={{ width: '40vw' }}>
              <p>상품 분류별</p>
              <Select
                style={{ width: '100px', marginRight: '1rem' }}
                name="productType"
                options={productOptProductType}
                defaultValue={productOptProductType[0]}
                placeholder="분류"
              />
              <Select
                style={{ width: '100px' }}
                name="mnfctType"
                options={productOptMnfctType}
                defaultValue={productOptMnfctType[0]}
              />
            </AddSection>
            <AddSection>
              <p>색상계열</p>
              <Radio.Group defaultValue="red">
                <Radio.Button value="red" style={{ background: 'red' }} />
                <Radio.Button value="orange" style={{ background: 'orange' }} />
                <Radio.Button value="yellow" style={{ background: 'yellow' }} />
                <Radio.Button value="green" style={{ background: 'green' }} />
                <Radio.Button
                  value="skyblue"
                  style={{ background: 'skyblue' }}
                />
                <Radio.Button value="blue" style={{ background: 'blue' }} />
                <Radio.Button value="purple" style={{ background: 'purple' }} />
                <Radio.Button value="white" style={{ background: 'white' }} />
                <Radio.Button value="black" style={{ background: 'black' }} />
                <Radio.Button value="gray" style={{ background: 'gray' }} />
                <Radio.Button value="pink" style={{ background: 'pink' }} />
                <Radio.Button value="beige" style={{ background: 'beige' }} />
              </Radio.Group>
            </AddSection>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <AddSection style={{ width: '40vw' }}>
              <p>재고상태</p>
              <Radio.Group defaultValue="00">
                <Radio.Button value="00">전체</Radio.Button>
                <Radio.Button value="01">재고있음</Radio.Button>
                <Radio.Button value="02">품절</Radio.Button>
              </Radio.Group>
            </AddSection>
            <AddSection>
              <p>등록일</p> <RangePicker />
            </AddSection>
          </div>
          <AddSection>
            <p>상세조건</p>
            <Select
              options={options}
              style={{ width: '200px', marginRight: '1rem' }}
            />
            <Input style={{ width: '200px' }} />
          </AddSection>
          <div>
            <Button stlye={{ width: '200px' }}>검색</Button>
            <Button>초기화</Button>
          </div>
        </Space>
      </Form>
      <Divider />
      <CheckTable columns={columns} data={goods} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <CheckTable columns={columns} data={goods} />
=======
      <CheckTable />
>>>>>>> parent of 872dc29 (04/12)
>>>>>>> 304ed38 (04/27-1)
=======
>>>>>>> 7911096 (05/09)
    </Goods_listBlock>
  );
};

export default Goods_list;
