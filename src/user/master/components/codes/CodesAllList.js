/* #region  import */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Input,
  Button,
  PageHeader,
  Breadcrumb,
  Divider,
  Tabs,
  Table,
  Select,
  Switch,
  message,
  Modal,
} from 'antd';
import Responsive from 'lib/styles/Responsive';
/* #endregion */

/* #region  styles */
const CodesAllListBlock = styled(Responsive)``;

const Alignment = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
/* #endregion */
const { Search } = Input;

const { TabPane } = Tabs;

/* #region  CheckModal */

const CheckMadal = ({
  isModalVisible,
  setIsMadalVisible,
  title,
  disMasterCheck,
  masterCheck,
  name,
  nameCheck,
  password,
  disChange,
  onChange,
  disPostProductCode,
  disPostManufacturerCode,
  productType,
}) => {
  const [inputType, setInputType] = useState('');
  const [passInputType, setPassInputType] = useState('');

  const onNameCheck = (e) => {
    console.log('확인 시작');
    if (nameCheck === name) {
      disMasterCheck({ password });
    } else {
      message.error('입력하신 품목명이 틀렸습니다.');
      setInputType('error');
    }
  };

  const onCheck = (e) => {
    if (masterCheck.status === 200) {
      console.log(title);
      if (title === '품목') {
        disPostProductCode({ name });
      } else if (title === '제조사') {
        disPostManufacturerCode({ productType, name });
      }
      message.success('등록에 성공했습니다.');
      console.log('등록성공');
      disChange('', 'password');
      disChange('', 'name');
      disChange('', 'nameCheck');
      setIsMadalVisible(false);
    } else {
      message.error('등록에 실패했습니다.');
    }
  };
  return (
    <Modal
      title={title + ' 등록'}
      visible={isModalVisible}
      footer={[
        <Button key="back" onClick={() => setIsMadalVisible(false)}>
          취소
        </Button>,
        <Button key="check" type="primary" onClick={onCheck}>
          등록
        </Button>,
      ]}
    >
      <p>{title}명 확인을 위해 한번 더 입력해주세요.</p>
      <Input
        status={inputType}
        name="nameCheck"
        value={nameCheck}
        onChange={onChange}
        onKeyUp={() => setInputType(null)}
      />
      <p style={{ marginTop: '1rem' }}>
        마스터 확인을 위해 비밀번호를 입력해주세요.
      </p>
      <Search
        status={passInputType}
        type="password"
        name="password"
        value={password}
        enterButton="인증"
        onChange={onChange}
        onSearch={onNameCheck}
        onKeyUp={() => setPassInputType(null)}
      />
      {masterCheck.status === 200 ? (
        <p style={{ marginTop: '1rem' }}>인증에 성공했습니다!</p>
      ) : null}
    </Modal>
  );
};
/* #endregion */

const CodesAllList = ({
  productCode,
  name,
  nameCheck,
  manufacturerCode,
  productType,
  masterCheck,
  password,
  disChange,
  disPostProductCode,
  disPostManufacturerCode,
  disMasterCheck,
  disDeleteCode,
  disInitialize,
  disGetProductCode,
  disGetManufacturerCode,
  upDate,
  disPutProductCode,
  disPutManufacturerCode,
}) => {
  const [isModalVisible, setIsMadalVisible] = useState(false);
  const columns = [
    {
      title: '품목명',
      dataIndex: 'name',
      key: 'name',
      width: '25%',
    },
    {
      title: '품목 코드',
      dataIndex: 'code',
      key: 'code',
      width: '25%',
    },
    {
      title: '생성일자',
      dataIndex: 'createDate',
      key: 'createDate',
      width: '25%',
    },
    {
      title: '사용여부',
      dataIndex: 'useYn',
      key: 'useYn',
      render: (useYn, recode) => (
        <Switch
          checkedChildren="시용"
          unCheckedChildren="미사용"
          checked={useYn === 'Y' ? true : false}
          onChange={(c, e) => {
            console.log(c);
            if (c === false) {
              const uuid = recode.uuid;
              const useYn = 'N';
              disPutProductCode({ uuid, useYn });
            } else if (c === true) {
              const uuid = recode.uuid;
              const useYn = 'Y';
              disPutProductCode({ uuid, useYn });
            }
          }}
        />
      ),
    },
  ];

  const columnsM = [
    {
      title: '제조사명',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: '제조사 코드',
      dataIndex: 'code',
      key: 'code',
      width: '30%',
    },
    {
      title: '사용여부',
      dataIndex: 'useYn',
      key: 'useYn',
      render: (useYn, recode) => (
        <Switch
          checkedChildren="시용"
          unCheckedChildren="미사용"
          checked={useYn === 'Y' ? true : false}
          onChange={(c, e) => {
            console.log(c);
            if (c === false) {
              const uuid = recode.uuid;
              const useYn = 'N';
              disPutManufacturerCode({ uuid, useYn });
            } else if (c === true) {
              const uuid = recode.uuid;
              const useYn = 'Y';
              disPutManufacturerCode({ uuid, useYn });
            }
          }}
        />
      ),
    },
  ];

  const onChange = (e) => {
    disChange(e.target.value, e.target.name);
  };

  const onProductSave = (e) => {
    if (name === '') {
      message.error('품목명을 입력해주세요!');
    } else if (manufacturerCode.length === 0) {
      setIsMadalVisible(true);
    } else {
      for (let i = 0; i < manufacturerCode.length; i++) {
        if (manufacturerCode[i].name === name) {
          message.error(
            '이미 등록된 항목입니다! 중복된 항복은 등록하실 수 없습니다.',
          );
          break;
        } else {
          setIsMadalVisible(true);
        }
      }
    }
  };

  const onManufacturerSave = (e) => {
    if (name === '') {
      message.error('품목명을 입력해주세요!');
    } else if (productCode.length === 0) {
      setIsMadalVisible(true);
    } else {
      for (let i = 0; i < productCode.length; i++) {
        if (productCode[i].name === name) {
          message.error(
            '이미 등록된 항목입니다! 중복된 항복은 등록하실 수 없습니다.',
          );
          break;
        } else {
          setIsMadalVisible(true);
        }
      }
    }
  };
  const onDeleteCode = (e) => {
    disDeleteCode();
    disInitialize();
    message.success('삭제했습니다');
  };
  const onTabClick = (e) => {
    disChange('', 'name');
  };
  return (
    <CodesAllListBlock>
      <PageHeader
        className="PageHeader"
        title="카테고리 관리"
        extra={[
          <Breadcrumb style={{ margin: '16px 0 ' }}>
            <Breadcrumb.Item>홈</Breadcrumb.Item>
            <Breadcrumb.Item>카테고리 관리</Breadcrumb.Item>
          </Breadcrumb>,
        ]}
      />
      <Divider />
      <Tabs defaultActiveKey="1" onTabClick={onTabClick}>
        <TabPane tab="품목 관리" key="1">
          <Alignment>
            <div style={{ width: '100px' }}>품목명 :</div>
            <Input.Group compact>
              <Input
                name="name"
                style={{ width: '15vw' }}
                onChange={onChange}
                value={name}
              />
              <Button type="primary" onClick={onProductSave}>
                추가
              </Button>
              <CheckMadal
                isModalVisible={isModalVisible}
                setIsMadalVisible={setIsMadalVisible}
                title="품목"
                disMasterCheck={disMasterCheck}
                masterCheck={masterCheck}
                password={password}
                onChange={onChange}
                disChange={disChange}
                name={name}
                nameCheck={nameCheck}
                disPostProductCode={disPostProductCode}
                disGetProductCode={disGetProductCode}
                disGetManufacturerCode={disGetManufacturerCode}
                upDate={upDate}
              />
            </Input.Group>
          </Alignment>
          <Table columns={columns} dataSource={productCode} />
        </TabPane>
        <TabPane tab="제조사 관리" key="2">
          <Alignment>
            <div style={{ width: '100px' }}>품목 :</div>
            <Select
              placeholder="품목을 선택해주세요."
              style={{ width: '200px', marginRight: '1rem' }}
              onChange={(v, o) => disChange(v, 'productType')}
            >
              {productCode ? (
                <>
                  {productCode.map((options) => (
                    <>
                      {options.useYn === 'Y' ? (
                        <Select.Option value={options.uuid}>
                          {options.name}
                        </Select.Option>
                      ) : null}
                    </>
                  ))}
                </>
              ) : null}
            </Select>
            <div style={{ width: '100px' }}>제조사명 :</div>
            <Input.Group compact>
              <Input
                name="name"
                style={{ width: '15vw' }}
                onChange={onChange}
                value={name}
              />
              <Button type="primary" onClick={onManufacturerSave}>
                추가
              </Button>
              <CheckMadal
                isModalVisible={isModalVisible}
                setIsMadalVisible={setIsMadalVisible}
                title="제조사"
                disMasterCheck={disMasterCheck}
                masterCheck={masterCheck}
                password={password}
                onChange={onChange}
                disChange={disChange}
                name={name}
                nameCheck={nameCheck}
                disPostManufacturerCode={disPostManufacturerCode}
                productType={productType}
                disGetProductCode={disGetProductCode}
                disGetManufacturerCode={disGetManufacturerCode}
                upDate={upDate}
              />
            </Input.Group>
          </Alignment>
          <Table columns={columnsM} dataSource={manufacturerCode} />
        </TabPane>
      </Tabs>
      <Divider />
      <Button onClick={onDeleteCode} type="primary">
        삭제
      </Button>
      <Divider />
    </CodesAllListBlock>
  );
};

export default CodesAllList;
