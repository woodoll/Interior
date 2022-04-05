/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';
import { Input, Select, Radio, DatePicker } from 'antd';

import { productOptProductType } from 'lib/vender/options';
import { productOptMnfctType } from 'lib/vender/options';
import CheckTable from 'lib/common/Table_check';
/* #endregion */

/* #region  styles */
const Goods_listBlock = styled(Responsive)``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AddSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
  p {
    width: 100px;
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

const Goods_list = () => {
  const { RangePicker } = DatePicker;
  return (
    <Goods_listBlock>
      <h1>상품목록</h1>
      <Form>
        <AddSection>
          <p>상품 분류별</p>
          <Select
            style={{ width: '100px' }}
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
          <p>재고상태</p>
          <Radio.Group defaultValue="00">
            <Radio.Button value="00">전체</Radio.Button>
            <Radio.Button value="01">재고있음</Radio.Button>
            <Radio.Button value="02">품절</Radio.Button>
          </Radio.Group>
        </AddSection>
        <AddSection>
          <p>색상계열</p>
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
        </AddSection>
        <AddSection>
          <p>등록일</p> <RangePicker />
        </AddSection>
        <AddSection>
          <p>상세조건</p>{' '}
          <Select
            options={options}
            style={{ width: '200px', heigth: '100%' }}
          />
          <Input style={{ width: '200px', heigth: '100%' }} />
        </AddSection>
        <CheckTable />
      </Form>
    </Goods_listBlock>
  );
};

export default Goods_list;
