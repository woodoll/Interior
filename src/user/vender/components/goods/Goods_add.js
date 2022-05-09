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
import SelectForm from 'lib/common/SelectForm';

import TableAdd from 'lib/common/table/TableAdd';

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
    span: 2,
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

  const onChange = (e) => {
    disChange(e.target.value, e.target.name);
    console.log('상품정보는 = ' + products);
  };
  const onUpload = (e) => {
    console.log('이벤트 내용은 = ' + e.fileList[0].originFileObj);
    disChange(e.fileList[0].originFileObj, 'thumbnail');
  };
  const onValueList = (changedValues, allValues) => {
    disChange(allValues.products, 'products');
    console.log(allValues);
  };

  const onSubmit = (e) => {
    // e.preventdefault();
    const formData = new FormData();
    formData.append('productType', productType);
    formData.append('manufacturerType', manufacturerType);
    formData.append('productGroupNm', productGroupNm);
    formData.append('searchKeyword', searchKeyword);
    formData.append('displayYn', displayYn);
    formData.append('products', products);
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

  const [tableData, setTableData] = useState({});

  products = JSON.stringify(tableData);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const selectOption = [
    {
      label: '페인트',
      value: '00',
    },
    {
      label: '벽지',
      value: '01',
    },
    {
      label: '바닥재',
      value: '02',
    },
  ];

  return (
    <AddComponentBlock>
      <PageHeader className="PageHeader" title="상품 등록" />
      <Divider />
      <Form
        name="basic"
        encType="multipart/form-data"
        labelAlign="left"
        onValuesChange={onValueList}
      >
        <h3>기본정보</h3>
        <Form.Item label="품목분류" {...itemLayout}>
          <Select placeholder="품목분류" placement="bottomLeft">
            <Select.Option value="00">페인트</Select.Option>
            <Select.Option value="01">벽지</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="제조사분류" {...itemLayout}>
          <Select placeholder="제조사분류" name="manufacturerType">
            <Select.Option value="00">페인트</Select.Option>
            <Select.Option value="01">벽지</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="상품그룹명" name="productGroupNm" {...itemLayout}>
          <Input
            name="productGroupNm"
            placeholder="상품그룹명"
            onChange={onChange}
            value={productGroupNm}
          />
        </Form.Item>
        <Form.Item label="검색키워드" name="searchKeyword" {...itemLayout}>
          <Input
            name="searchKeyword"
            placeholder="검색키워드"
            onChange={onChange}
            value={searchKeyword}
          />
        </Form.Item>
        <Form.Item label="진열여부" name="displayYn" {...itemLayout}>
          <Radio.Group Value="Y" onChange={onChange} name="displayYn">
            <Radio.Button value="Y" name="displayYn">
              YES
            </Radio.Button>
            <Radio.Button value="N" name="displayYn">
              NO
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
                  Add field
                </Button>
              </Form.Item>
              {fileds.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: 'flex',
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item {...restField} name={[name, 'productNm']}>
                    <Input
                      name="productNm"
                      placeholder="상품명"
                      style={{ width: 100 }}
                    />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'displayOrder']}>
                    <Input name="displayOrder" placeholder="자체상품코드" />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'colorCode']}>
                    <Select placeholder="색상코드">
                      <Select.Option value={'00'}>아무거나</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'listPrice']}>
                    <Input name="listPrice" placeholder="정가" />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'discountContents']}>
                    <Input name="discountContents" placeholder="할인률" />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'sellingPrice']}>
                    <Input name="sellingPrice" placeholder="판매가격" />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'stockYn']}>
                    <Input name="stockYn" placeholder="재고관리여부" />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'stock']}>
                    <Input name="stock" placeholder="재고수량" />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'detailContents']}>
                    <Input name="detailContents" placeholder="상세설명" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'thumbnail']}
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                  >
                    <Upload
                      name="thumbnail"
                      listType="picture"
                      onChange={onUpload}
                    >
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
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
        <Space direction="vertical" size={12}>
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
              onSubmit();
            }}
            type={'primary'}
          >
            등록
          </Button>
          <Divider />
        </Space>
      </Form>
    </AddComponentBlock>
  );
};

export default VenderAddComponent;
