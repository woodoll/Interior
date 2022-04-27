import React, { useState } from 'react';
import { Table } from 'antd';

import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import { arrayMoveImmutable } from 'array-move';

//  drag function
const DragHandle = SortableHandle(() => (
  <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />
));
const SortableItem = SortableElement((props) => <tr {...props} />);
const SortableBody = SortableContainer((props) => <tbody {...props} />);

const CheckTable = ({ columns, data, onRow }) => {
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

  const dataSource = data;

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(
        [].concat(dataSource),
        oldIndex,
        newIndex,
      ).filter((el) => !!el);
      console.log('Sorted items: ', newData);
      this.setState({ dataSource: newData });
    }
  };

  const DraggableContainer = (props) => (
    <SortableBody
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(
      (x) => x.index === restProps['data-row-key'],
    );
    return <SortableItem index={index} {...restProps} />;
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selecetdRowkeys.length} items` : ''}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        onRow={onRow}
        // rowKey="index"
        // components={{
        //   body: {
        //     wrapper: DraggableContainer,
        //     row: DraggableBodyRow,
        //   },
        // }}
      />
    </div>
  );
};

export default CheckTable;
