import React, { useState } from 'react';
import { Table, Button } from 'antd';

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `상품명 ${i}`,
    address: `상품상세 ${i}`,
  });
}

const CheckTable = ({ columns }) => {
  const [selecetdRowkeys, setSelectedRowkeys] = useState([]);

  const onSelectChange = () => {
    console.log('selectedRowKeys changed: ', selecetdRowkeys);
    setSelectedRowkeys(!selecetdRowkeys);
  };

  const rowSelection = {
    selecetdRowkeys,
    onChange: onSelectChange,
  };

  const hasSelected = selecetdRowkeys.length > 0;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selecetdRowkeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default CheckTable;
