import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';

const BuyProductComponentBlock = styled(Responsive)``;

const ClientBuyProductComponent = ({ products }) => {
  return (
    <BuyProductComponentBlock>
      {products && (
        <>
          {products.map((product) => (
            <div key={product.uuid}>
              <div>{product.productName}</div>
            </div>
          ))}
        </>
      )}
    </BuyProductComponentBlock>
  );
};

export default ClientBuyProductComponent;
