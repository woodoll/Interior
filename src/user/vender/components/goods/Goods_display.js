/* #region  import */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Input, Radio, Cascader, Divider, Space, PageHeader } from 'antd';
import Responsive from 'lib/styles/Responsive';

import { productOptProductType } from 'lib/vender/options';
import SortableTable from 'lib/common/table/Table_drag';

/* #endregion */

/* #region  styles */
const AddComponentBlock = styled(Responsive)`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AddSection = styled.div`
  display: flex;
  flex-direction: row;
  p {
    width: 100px;
  }
`;

/* #endregion */
const VenderAddComponent = ({
  productType,
  originType,
  mnfctType,
  colorType,
  productName,
  displayStatus,
  normalPrice,
  discountRate,
  sellingPrice,
  stockType,
  minQuantity,
  maxQuantity,
  pointType,
  optionYn,
  uploadType,
  detailContents,
  file1,
  disSubmit,
  disChange,
  disUpload,
  msgCode,
  setPathUrl,
}) => {
  const navigate = useNavigate();
  const onChange = (e) => disChange(e.target.value, e.target.name);
  const onUpload = (e) => {
    disUpload(e.target.files[0]);
    console.log('file1 = ', file1);
  };
  const onSubmit = (e) => {
    // e.preventdefault();
    const formData = new FormData();
    formData.append('productType', productType);
    formData.append('originType', originType);
    formData.append('mnfctType', mnfctType);
    formData.append('colorType', colorType);
    formData.append('productName', productName);
    formData.append('displayStatus', displayStatus);
    formData.append('normalPrice', normalPrice);
    formData.append('discountRate', discountRate);
    formData.append('sellingPrice', sellingPrice);
    formData.append('stockType', stockType);
    formData.append('minQuantity', minQuantity);
    formData.append('maxQuantity', maxQuantity);
    formData.append('pointType', pointType);
    formData.append('optionYn', optionYn);
    formData.append('uploadType', uploadType);
    formData.append('detailContents', detailContents);
    formData.append('file1', file1);
    disSubmit({
      formData,
    });
    disChange((e.target.value = ''));
  };
  useEffect(() => {
    if (msgCode) {
      navigate('/');
    }
  });

  setPathUrl('상품 진열');

  return (
    <AddComponentBlock>
      <PageHeader className="PageHeader" title="상품진열" />
      <Divider />
      <Form
        name="AddProduct"
        target="_blank"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <Space direction="vertical" size={12}>
          <h3>카테고리 선택</h3>
          <AddSection>
            <Cascader
              style={{ width: '200px' }}
              name="productType"
              options={productOptProductType}
              placeholder="분류"
            />
          </AddSection>
          <h3>기본정보</h3>
          <AddSection>
            <p>진열코드</p>
            <Input
              style={{ width: '200px' }}
              name="productName"
              placeholder="진열코드"
              onChange={onChange}
              value={productName}
              disabled
            />
          </AddSection>
          <AddSection>
            <p>노출상품명</p>
            <Input
              style={{ width: '200px' }}
              name="productName"
              placeholder="노출상품명"
              onChange={onChange}
              value={productName}
            />
          </AddSection>
          <AddSection>
            <p>검색 키워드</p>
            <Input
              style={{ width: '200px' }}
              name="productName"
              placeholder="검색 키워드"
              onChange={onChange}
              value={productName}
            />
          </AddSection>
          <AddSection>
            <p>진열여부</p>
            <Radio.Group defaultValue="Y" onChange={onChange}>
              <Radio.Button value="Y" name="displayStatus">
                진열함
              </Radio.Button>
              <Radio.Button value="N" name="displayStatus">
                진열 안함
              </Radio.Button>
            </Radio.Group>
          </AddSection>
          <Divider />
          <h3>상품선택</h3>
          <SortableTable />
          <Divider />
          <h3>추가옵션</h3>
          <SortableTable />
          <Divider />
          <button>저장</button>
        </Space>
      </Form>
    </AddComponentBlock>
  );
};

export default VenderAddComponent;
