import { vender } from './vender';
import axios from 'axios';

export const addGoods = ({ formData }) => {
  return axios.post(`/vender/goods/saveProduct`, formData, {
    data: FormData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// export const addGoods = ({
//   productType,
//   originType,
//   mnfctType,
//   colorType,
//   productName,
//   displayStatus,
//   normalPrice,
//   sellingPrice,
//   stockType,
//   minQuantity,
//   maxQuantity,
//   pointType,
//   optionYn,
//   uploadType,
//   detailContents,
//   file1,
// }) => {
//   const formData = new FormData();
//   formData.append('productType', productType);
//   formData.append('productType', originType);
//   formData.append('productType', mnfctType);
//   formData.append('productType', colorType);
//   formData.append('productType', productName);
//   formData.append('productType', displayStatus);
//   formData.append('productType', normalPrice);
//   formData.append('productType', sellingPrice);
//   formData.append('productType', stockType);
//   formData.append('productType', minQuantity);
//   formData.append('productType', maxQuantity);
//   formData.append('productType', pointType);
//   formData.append('productType', optionYn);
//   formData.append('productType', uploadType);
//   formData.append('productType', detailContents);
//   formData.append('productType', file1);
//   return vender.post(`/vender/goods/saveProduct`, {
//     data: formData,
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
// };
