import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';
import { IamportCard } from 'lib/function/payment/IamportCard';
import { IamportVbank } from 'lib/function/payment/IamportVbank';

const BuyProductComponentBlock = styled(Responsive)``;

const ClientBuyProductComponent = ({ products }) => {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  return (
    <BuyProductComponentBlock>
      {products && (
        <>
          {products.map((product) => (
            <div key={product.uuid}>
              <div>{product.productName}</div>
              <IamportCard
                amount={product.normalPrice}
                name={product.productName}
                productCode={product.productCode}
                buyer_name={userInfo.name}
                buyer_tel="01012345678"
                buyer_email="example@example.com"
                buyer_addr="구매자주소"
                buyer_postcode="1234"
              />
              <IamportVbank
                name={product.productName}
                amount={product.normalPrice}
                productCode={product.productCode}
                buyer_name={userInfo.name}
                buyer_tel="01012345678"
                buyer_email="example@example.com"
                buyer_addr="구매자주소"
                buyer_postcode="1234"
              />
            </div>
          ))}
        </>
      )}

      {/* <IamportCard
        amount="100"
        name="상품이름"
        buyer_name="구매자이름"
        buyer_tel="01012345678"
        buyer_email="example@example.com"
        buyer_addr="구매자주소"
        buyer_postcode="1234"
      /> */}
    </BuyProductComponentBlock>
  );
};

export default ClientBuyProductComponent;
