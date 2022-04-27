import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';

const ModalPostCode = ({ setAddress, setZipcode }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const Postcode = () => {
    const handleComplete = (data) => {
      let fullAddress = data.address;
      let extraAddress = '';
      let zipcode = data.zonecode;

      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress +=
            extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        setIsModalVisible(false);
      }

      console.log(data);
      console.log(fullAddress);
      setAddress(fullAddress);
      setZipcode(zipcode);
    };

    return <DaumPostcode onComplete={handleComplete} />;
  };

  return (
    <>
      <Button type="primary" onClick={showModal} style={{ width: '90px' }}>
        우편번호
      </Button>
      <Modal
        title="우편번호 검색"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={
          <Button key="back" onClick={handleCancel}>
            닫기
          </Button>
        }
      >
        <Postcode />
      </Modal>
    </>
  );
};

export default ModalPostCode;
