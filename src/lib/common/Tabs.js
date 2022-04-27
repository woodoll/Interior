import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const SubTabs = ({ page1, pageName1, page2, pageName2 }) => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab={pageName1} key="1">
      {page1}
    </TabPane>
    <TabPane tab={pageName2} key="2">
      {page2}
    </TabPane>
  </Tabs>
);

export default SubTabs;
