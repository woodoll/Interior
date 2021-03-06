/* #region  import */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  Select,
  Input,
  Radio,
  InputNumber,
  Space,
  PageHeader,
  Divider,
  Breadcrumb,
} from 'antd';
import Responsive from 'lib/styles/Responsive';

import UploadFile from 'lib/common/upload/Upload';
import Wysiwyg from 'lib/common/Wysiwyg';
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
            <Select
              style={{ width: '100px' }}
              name="productType"
              options={productOptProductType}
              defaultValue={productOptProductType[0]}
            />
            <Select
              name="mnfctType"
              options={productOptMnfctType}
              defaultValue={productOptMnfctType[0]}
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
            <p>??????????????????</p>
            <Input
              style={{ width: '200px' }}
              name="productName"
              placeholder="??????????????????"
              onChange={onChange}
              value={productName}
            />
          </AddSection>
          <AddSection>
            <p>?????????</p>
            <Input
              style={{ width: '200px' }}
              name="productName"
              placeholder="????????????"
              onChange={onChange}
              value={productName}
            />
          </AddSection>
          <AddSection>
            <p>????????????</p>
            <Radio.Group onChange={onChange} defaultValue="red">
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
          <h3>??????????????????</h3>
          <h3>???????????? / ??????/ ???????????? ??????</h3>
          <AddSection>
            <p>??????/ ?????????</p>
            <Input
              style={{ width: '100px' }}
              name="normalPrice"
              placeholder="?????? ??????"
              onChange={onChange}
              value={normalPrice}
            />
            <Input
              style={{ width: '100px' }}
              name="discountRate"
              placeholder="?????????"
              onChange={onChange}
              value={discountRate}
            />
            <p style={{ marginLeft: '1rem' }}>?????????</p>
            <Input
              style={{ width: '200px' }}
              name="sellingPrice"
              placeholder="?????? ??????"
              onChange={onChange}
              value={sellingPrice}
            />
          </AddSection>
          <AddSection>
            <p>???????????? ??????</p>
            <Radio.Group defaultValue="00" onChange={onChange}>
              <Radio.Button value="00" name="stockType">
                YES
              </Radio.Button>
              <Radio.Button value="01" name="stockType">
                NO
              </Radio.Button>
            </Radio.Group>
            <p style={{ marginLeft: '1rem' }}>?????????</p>
            <InputNumber min={0} type="number" style={{ width: '200px' }} />
          </AddSection>
          <h3>?????? ????????? ??????</h3>
          <UploadFile name="file1" accept="image/*" onChange={onUpload} />
          <UploadFile />
          <h3>????????????</h3>
          <Wysiwyg
            name="detailContents"
            onChange={onChange}
            value={detailContents}
          />
          <button>??????</button>
        </Space>
      </Form>
    </AddComponentBlock>
  );
};

export default VenderAddComponent;
