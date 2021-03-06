/* #region  import */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  Input,
  Radio,
  Cascader,
  Divider,
  Space,
  PageHeader,
  Breadcrumb,
} from 'antd';
import Responsive from 'lib/styles/Responsive';

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

  return (
    <AddComponentBlock>
      <PageHeader
        className="PageHeader"
        title="?????? ??????"
        extra={[
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>???</Breadcrumb.Item>
            <Breadcrumb.Item>?????? ??????</Breadcrumb.Item>
            <Breadcrumb.Item>?????? ??????</Breadcrumb.Item>
          </Breadcrumb>,
        ]}
      />
      <Divider />
      <Form
        name="AddProduct"
        target="_blank"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <Space direction="vertical" size={12}>
          <h3>???????????? ??????</h3>
          {/* <AddSection>
            <Cascader
              style={{ width: '200px' }}
              name="productType"
              options={productOptProductType}
              placeholder="??????"
            />
          </AddSection> */}
          <h3>????????????</h3>
          <AddSection>
            <p>????????????</p>
            <Input
              style={{ width: '200px' }}
              name="productName"
              placeholder="????????????"
              onChange={onChange}
              value={productName}
              disabled
            />
          </AddSection>
          <AddSection>
            <p>???????????????</p>
            <Input
              style={{ width: '200px' }}
              name="productName"
              placeholder="???????????????"
              onChange={onChange}
              value={productName}
            />
          </AddSection>
          <AddSection>
            <p>?????? ?????????</p>
            <Input
              style={{ width: '200px' }}
              name="productName"
              placeholder="?????? ?????????"
              onChange={onChange}
              value={productName}
            />
          </AddSection>
          <AddSection>
            <p>????????????</p>
            <Radio.Group defaultValue="Y" onChange={onChange}>
              <Radio.Button value="Y" name="displayStatus">
                ?????????
              </Radio.Button>
              <Radio.Button value="N" name="displayStatus">
                ?????? ??????
              </Radio.Button>
            </Radio.Group>
          </AddSection>
          <Divider />
          <h3>????????????</h3>
          <SortableTable />
          <Divider />
          <h3>????????????</h3>
          <SortableTable />
          <Divider />
          <button>??????</button>
        </Space>
      </Form>
    </AddComponentBlock>
  );
};

export default VenderAddComponent;
