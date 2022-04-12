import React from 'react';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

const Checkbox_all = ({ plainOptions, defaultCheckedList }) => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  // const [indeterminate, setIndeterminate] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(true);

  const onChange = (list) => {
    setCheckedList(list);
    // setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    // setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Checkbox
        // indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        전체
      </Checkbox>
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </div>
  );
};

export default Checkbox_all;
