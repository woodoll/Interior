/* #region  import */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Responsive from 'lib/styles/Responsive';
import styled from 'styled-components';
import {
  Input,
  Radio,
  InputNumber,
  Divider,
  Space,
  Button,
  Switch,
  PageHeader,
} from 'antd';

import Table_add from 'lib/common/table/Table_add';

/* #endregion */

/* #region  styles */
const AddComponentBlock = styled(Responsive)`
  width: 100%;
`;

const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AddSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    width: 100px;
  }
`;

/* #endregion */
const VenderAddComponent = ({
  productType,
  manufacturerType,
  productGroupNm,
  searchKeyword,
  displayYn,
  products,
  disSubmit,
  disChange,
  msgCode,
}) => {
  const navigate = useNavigate();
  const onChange = (e) => disChange(e.target.value, e.target.name);

  const onSubmit = (e) => {
    // e.preventdefault();
    const formData = new FormData();
    formData.append('productType', productType);
    formData.append('manufacturerType', manufacturerType);
    formData.append('productGroupNm', productGroupNm);
    formData.append('searchKeyword', searchKeyword);
    formData.append('displayYn', displayYn);
    formData.append('products', Array.form(products));

    disSubmit({
      formData,
    });
  };

  useEffect(() => {
    if (msgCode) {
      navigate('/');
    }
  });

  const [disable, setDisable] = useState(true);

  const [tableData, setTableData] = useState({});

  products = tableData;

  return (
    <AddComponentBlock>
      <PageHeader className="PageHeader" title="상품 등록" />
      <Divider />
      <MainForm
        name="AddProduct"
        target="_blank"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <Space direction="vertical" size={12}>
          <h3>기본정보</h3>
          <AddSection>
            <p>품목분류</p>
            <Input
              style={{ width: '200px' }}
              name="productType"
              placeholder="품목분류"
              onChange={onChange}
              value={productType}
            />
          </AddSection>
          <AddSection>
            <p>제조사분류</p>
            <Input
              style={{ width: '200px' }}
              name="manufacturerType"
              placeholder="제조사분류"
              onChange={onChange}
              value={manufacturerType}
            />
          </AddSection>
          <AddSection>
            <p>상품그룹명</p>
            <Input
              style={{ width: '200px' }}
              name="productGroupNm"
              placeholder="상품그룹명"
              onChange={onChange}
              value={productGroupNm}
            />
          </AddSection>
          <AddSection>
            <p>검색키워드</p>
            <Input
              style={{ width: '200px' }}
              name="searchKeyword"
              placeholder="검색키워드"
              onChange={onChange}
              value={searchKeyword}
            />
          </AddSection>
          <AddSection>
            <p>진열여부</p>
            <Radio.Group Value="00" onChange={onChange} name="displayYn">
              <Radio.Button value="00" name="displayYn">
                YES
              </Radio.Button>
              <Radio.Button value="01" name="displayYn">
                NO
              </Radio.Button>
            </Radio.Group>
          </AddSection>
          <Divider />
          <h3>판매상품 목록</h3>
          <Table_add
            setTableData={setTableData}
            name="products"
            value={JSON.stringify(products)}
            onChange={onChange}
          />

          <Divider />
          <AddSection>
            <h3 style={{ marginRight: '12px' }}>상품 세부정보</h3>
            <Switch
              checkedChildren="ON"
              unCheckedChildren="OFF"
              checkes={disable}
              onChange={() => {
                setDisable(!disable);
              }}
            />
          </AddSection>
          <AddSection>
            <p>개당 용량</p>
            <Input
              style={{ width: '200px' }}
              placeholder="개당 용량"
              onChange={onChange}
              disabled={disable}
            />
            &nbsp; ml
          </AddSection>
          <AddSection>
            <p>광택</p>
            <Radio.Group onChange={onChange} disabled={disable}>
              <Radio.Button value="00">YES</Radio.Button>
              <Radio.Button value="01">NO</Radio.Button>
            </Radio.Group>
          </AddSection>
          <AddSection>
            <p>향균여부</p>
            <InputNumber
              min={0}
              type="number"
              style={{ width: '200px' }}
              disabled={disable}
            />
          </AddSection>
          <Divider />
          <Button
            onClick={() => {
              console.log('버튼이 눌렸습니다');
              console.log(products);
              onSubmit();
            }}
            type={'primary'}
          >
            등록
          </Button>
          <Divider />
        </Space>
      </MainForm>
    </AddComponentBlock>
  );
};

export default VenderAddComponent;
