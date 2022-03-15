/* #region  import */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { productOptProductType } from 'lib/lib_dir';
import { productOptOriginType } from 'lib/lib_dir';
import { productOptMnfctType } from 'lib/lib_dir';
import { productOptColorType } from 'lib/lib_dir';

import { SelectForm } from 'lib/lib_dir';
/* #endregion */

/* #region  styles */
const AddComponentBlock = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
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
    e.preventdefault();
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
      <Form name="AddProduct" encType="multipart/form-data" onSubmit={onSubmit}>
        <SelectForm
          name="productType"
          option={productOptProductType}
          onChange={onChange}
        />
        <SelectForm
          name="originType"
          option={productOptOriginType}
          onChange={onChange}
        />
        <SelectForm
          name="mnfctType"
          option={productOptMnfctType}
          onChange={onChange}
        />
        <SelectForm
          name="colorType"
          option={productOptColorType}
          onChange={onChange}
        />
        <input
          name="productName"
          placeholder="상품이름"
          onChange={onChange}
          value={productName}
        />
        <label>
          <input
            type="radio"
            name="displayStatus"
            value="Y"
            onChange={onChange}
          />
          YES
          <input
            type="radio"
            name="displayStatus"
            value="N"
            onChange={onChange}
          />
          NO
        </label>
        <input
          name="normalPrice"
          placeholder="상품 가격"
          onChange={onChange}
          value={normalPrice}
        />
        <input
          name="discountRate"
          placeholder="할인율"
          onChange={onChange}
          value={discountRate}
        />
        <input
          name="sellingPrice"
          placeholder="할인 가격"
          onChange={onChange}
          value={sellingPrice}
        />
        <label>
          <input type="radio" name="stockType" value="00" onChange={onChange} />
          YES
          <input type="radio" name="stockType" value="01" onChange={onChange} />
          NO
        </label>
        <input
          name="minQuantity"
          placeholder="최소 수량"
          onChange={onChange}
          value={minQuantity}
        />
        <input
          name="maxQuantity"
          placeholder="최대 수량"
          onChange={onChange}
          value={maxQuantity}
        />
        <label>
          <input type="radio" name="pointType" value="00" onChange={onChange} />
          YES
          <input type="radio" name="pointType" value="01" onChange={onChange} />
          NO
        </label>
        <label>
          <input type="radio" name="optionYn" value="Y" onChange={onChange} />
          YES
          <input type="radio" name="optionYn" value="N" onChange={onChange} />
          NO
        </label>
        <label>
          <input
            type="radio"
            name="uploadType"
            value="00"
            onChange={onChange}
          />
          YES
          <input
            type="radio"
            name="uploadType"
            value="01"
            onChange={onChange}
          />
          NO
        </label>
        <input type="file" name="file1" accept="image/*" onChange={onUpload} />
        <input
          name="detailContents"
          placeholder="상품 설명"
          onChange={onChange}
          value={detailContents}
        />
        <button>등록</button>
      </Form>
    </AddComponentBlock>
  );
};

export default VenderAddComponent;
