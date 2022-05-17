import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const ModalPostCode = ({ setIsModalVisible, disChange }) => {
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

      disChange(zipcode, 'zipCode');
      disChange(data.address, 'addr1');
    };

    return (
      <div>
        <DaumPostcode onComplete={handleComplete} />
      </div>
    );
  };

  return (
    <div>
      <Postcode />
    </div>
  );
};

export default ModalPostCode;
