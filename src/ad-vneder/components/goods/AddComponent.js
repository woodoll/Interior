import React from 'react';
import styled from 'styled-components';

const AddComponentBlock = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
const AddComponent = ({
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
}) => {
  const onChange = (e) => disChange(e.target.value, e.target.name);
  const onUploadFile = (e) => {
    const file = e.target.files[0];
    return file;
  };
  const onSubmit = (e, file) => {
    // e.preventdefault();
    const formData = new FormData();
    formData.append('productType', productType);
    formData.append('originType', originType);
    formData.append('productType', mnfctType);
    formData.append('mnfctType', colorType);
    formData.append('productName', productName);
    formData.append('displayStatus', displayStatus);
    formData.append('normalPrice', normalPrice);
    formData.append('sellingPrice', sellingPrice);
    formData.append('stockType', stockType);
    formData.append('minQuantity', minQuantity);
    formData.append('maxQuantity', maxQuantity);
    formData.append('pointType', pointType);
    formData.append('optionYn', optionYn);
    formData.append('uploadType', uploadType);
    formData.append('detailContents', detailContents);
    formData.append('file1', file);
    console.log(formData);
    disSubmit({
      formData,
    });
    disChange((e.target.value = ''));
  };
  return (
    <AddComponentBlock>
      <Form
        name="AddProduct"
        target="_blank"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <select name="productType" value={productType} onChange={onChange}>
          <option value="01">페인트</option>
          <option value="02">벽지</option>
          <option value="03">몰딩</option>
          <option value="04">바닥재</option>
          <option value="05">포인트 벽지</option>
          <option value="06">시트지</option>
          <option value="07">액자</option>
        </select>
        <select name="originType" onChange={onChange}>
          <option value="01">한국</option>
          <option value="02">미국</option>
        </select>
        <select name="mnfctType" onChange={onChange}>
          <option value="01">개나리</option>
          <option value="02">신한</option>
          <option value="03">LG</option>
        </select>
        <select name="colorType" onChange={onChange}>
          <option value="01">흰색</option>
          <option value="02">빨강</option>
          <option value="03">주황</option>
          <option value="04">노랑</option>
          <option value="05">초록</option>
          <option value="06">파랑</option>
          <option value="07">남색</option>
          <option value="07">보라</option>
        </select>
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
        <input type="file" name="file1" accept="image/*" onChange={onChange} />
        <input
          name="detailContents"
          placeholder="상품 설명"
          onChange={onUploadFile}
          value={detailContents}
        />
        <button>등록</button>
      </Form>
    </AddComponentBlock>
  );
};

export default AddComponent;
