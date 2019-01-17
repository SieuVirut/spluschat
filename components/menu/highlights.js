import { Tabs, Radio } from 'antd';

const TabPane = Tabs.TabPane;

class NewsForStudent extends React.Component {


  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          tabPosition={'left'}
          style={{ height: '70vh' }}
        >
          <TabPane tab="Page" key="2"> Page</TabPane>
          <TabPane tab="Groups" key="3">Groups</TabPane>
          <TabPane tab="Celebrity" key="4">Celebrity</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default NewsForStudent