/* #region  import */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Responsive from 'lib/styles/Responsive';
import styled from 'styled-components';
import {
  Input,
  Radio,
  InputNumber,
  Select,
  Divider,
  Space,
  Button,
  Switch,
  PageHeader,
  Form,
  Upload,
} from 'antd';

import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';

/* #endregion */

/* #region  styles */
const AddComponentBlock = styled(Responsive)`
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

const itemLayout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 4,
  },
};

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

  const onChange = (e, o) => {
    disChange(e.target.value, e.target.name);
    console.log('내용은 = ' + e);
    console.log(o);
  };
  const onValueList = (changedValues, allValues) => {
    const value = Object.values(changedValues)[0];
    const key = Object.keys(changedValues)[0];
    if (allValues.products) {
      disChange(allValues.products, 'products');
      console.log(allValues);
      console.log(changedValues);
    } else {
      disChange(value, key);
      console.log(allValues);
      console.log(changedValues);
    }
  };

  // const uploadSuccess = (e) => {
  //   console.log(e.fileList[0].originFileObj);
  // };

  const onSubmit = (e) => {
    // e.preventdefault();
    const formData = new FormData();
    formData.append('productType', productType);
    formData.append('manufacturerType', manufacturerType);
    formData.append('productGroupNm', productGroupNm);
    formData.append('searchKeyword', searchKeyword);
    formData.append('displayYn', displayYn);
    formData.append('products', JSON.stringify(products));
    console.log('상품정보는 = ' + products);
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

  const normFile = (e) => {
    console.log('Upload event:', e);
    // const UploadLegnth = e.fileList.legnth;
    // e.fileList.length === 1 && setUpload(true);
    return e.fileList[0].originFileObj;
  };

  const onFinish = (values) => {
    console.log(values);
    onSubmit(values);
  };

  return (
    <AddComponentBlock>
      <PageHeader className="PageHeader" title="상품 등록" />
      <Divider />
      <Form
        name="basic"
        encType="multipart/form-data"
        labelAlign="left"
        onValuesChange={onValueList}
        onFinish={onFinish}
      >
        <h3>기본정보</h3>
        <Form.Item
          label="품목분류"
          {...itemLayout}
          name="productType"
          rules={[{ required: true, message: '품목을 선택해주세요.' }]}
        >
          <Select placeholder="품목분류" name="productType">
            <Select.Option value="00">페인트</Select.Option>
            <Select.Option value="01">벽지</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="제조사분류"
          {...itemLayout}
          name="manufacturerType"
          rules={[{ required: true, message: '제조사를 선택해주세요.' }]}
        >
          <Select placeholder="제조사분류" name="manufacturerType">
            <Select.Option value="00">페인트</Select.Option>
            <Select.Option value="01">벽지</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="상품그룹명"
          name="productGroupNm"
          {...itemLayout}
          rules={[{ required: true, message: '그룹명을 입력해주세요.' }]}
        >
          <Input
            name="productGroupNm"
            placeholder="상품그룹명"
            value={productGroupNm}
          />
        </Form.Item>
        <Form.Item label="검색키워드" name="searchKeyword" {...itemLayout}>
          <Input
            name="searchKeyword"
            placeholder="검색키워드"
            value={searchKeyword}
          />
        </Form.Item>
        <Form.Item
          label="진열여부"
          name="displayYn"
          {...itemLayout}
          rules={[{ required: true, message: '진열여부를 선택해주세요.' }]}
        >
          <Radio.Group Value="Y" name="displayYn">
            <Radio.Button value="Y" name="displayYn">
              진열함
            </Radio.Button>
            <Radio.Button value="N" name="displayYn">
              진열안함
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Divider />
        <Form.List name="products" style={{ width: '100%' }}>
          {(fileds, { add, remove }) => (
            <>
              <h3>판매상품 목록</h3>
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                  style={{ width: '100%' }}
                >
                  상세항목 추가하기
                </Button>
              </Form.Item>
              {fileds.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: 'flex',
                    marginBottom: 8,
                    alignItems: 'baseline',
                    padding: '0',
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, 'productNm']}
                    style={{ margin: '0' }}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Input
                      name="productNm"
                      placeholder="상품명"
                      style={{ width: 100 }}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'displayOrder']}
                    style={{ margin: '0' }}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Input
                      name="displayOrder"
                      type="number"
                      placeholder="진열순서"
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'skyCode']}
                    style={{ margin: '0' }}
                  >
                    <Input name="skyCode" placeholder="자체상품코드" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'colorCode']}
                    style={{ margin: '0' }}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Select placeholder="색상코드">
                      <Select.Option value={'00'}>색상</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'listPrice']}
                    style={{ margin: '0' }}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Input name="listPrice" type="number" placeholder="정가" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'discountRate']}
                    style={{ margin: '0' }}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Input
                      name="discountRate"
                      type="number"
                      placeholder="할인률"
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'sellingPrice']}
                    style={{ margin: '0' }}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Input
                      name="sellingPrice"
                      type="number"
                      placeholder="판매가격"
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'stockYn']}
                    style={{ margin: '0' }}
                    rules={[
                      {
                        required: true,
                        message: '',
                      },
                    ]}
                  >
                    <Input name="stockYn" placeholder="재고관리여부" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'stock']}
                    style={{ margin: '0' }}
                  >
                    <Input name="stock" type="number" placeholder="재고수량" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'detailContents']}
                    style={{ margin: '0' }}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Input name="detailContents" placeholder="상세설명" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'thumbnail']}
                    valuePropName="originFileObj"
                    getValueFromEvent={normFile}
                    style={{ margin: '0' }}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Upload
                      name="thumbnail"
                      // onChange={uploadSuccess}
                      style={{ marginTop: '0' }}
                      beforeUpload={() => {
                        return false;
                      }}
                    >
                      {/* {UploadLegnth < 1 ? ( */}
                      <Button style={{ margin: '0' }} icon={<UploadOutlined />}>
                        파일 올리기
                      </Button>
                      {/* ) : null} */}
                    </Upload>
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => remove(name)}
                    style={{ marginRight: '1rem', color: 'red' }}
                  />
                </Space>
              ))}
            </>
          )}
        </Form.List>
        <Divider />
        <Form.Item label="상품 세부정보" name="" {...itemLayout}>
          <Switch
            checkedChildren="ON"
            unCheckedChildren="OFF"
            checkes={disable}
            onChange={() => {
              setDisable(!disable);
            }}
          />
        </Form.Item>
        <Form.Item label="개당 용량" name="" {...itemLayout}>
          <Input
            style={{ width: '200px' }}
            placeholder="개당 용량"
            onChange={onChange}
            disabled={disable}
          />
        </Form.Item>
        <Form.Item label="광택" name="" {...itemLayout}>
          <Radio.Group onChange={onChange} disabled={disable}>
            <Radio.Button value="00">YES</Radio.Button>
            <Radio.Button value="01">NO</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="향균여부" name="" {...itemLayout}>
          <InputNumber
            min={0}
            type="number"
            style={{ width: '200px' }}
            disabled={disable}
          />
        </Form.Item>
        <Divider />
        <Button type={'primary'} htmlType="submit">
          등록
        </Button>
      </Form>
      <Divider style={{ borderColor: '#fff' }} />
    </AddComponentBlock>
  );
};

export default VenderAddComponent;
