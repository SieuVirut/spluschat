import { Tabs } from 'antd';
import TimeLine from './news/timeline'
import CheckList from './news/checklist'

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
          <TabPane tab="Time Line" key="1"> <TimeLine /> </TabPane>
          <TabPane tab="Hồ sơ chuẩn bị" key="6"> <CheckList /> </TabPane>
          <TabPane tab="Thu tục nhập học" key="2">Content of tab 2</TabPane>
          <TabPane tab="Đăng kí KTX" key="3">Content of tab 3</TabPane>
          <TabPane tab="Các chú ý" key="4">Content of tab 4</TabPane>
          <TabPane tab="Cách di chuyển" key="5">Content of tab 5</TabPane>
          <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
          <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
          <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
          <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
          <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
          <TabPane tab="Tab 6" key="12">Content of tab 6</TabPane>
          <TabPane tab="Tab 7" key="13">Content of tab 7</TabPane>
          <TabPane tab="Tab 8" key="14">Content of tab 8</TabPane>
          <TabPane tab="Tab 9" key="15">Content of tab 9</TabPane>
          <TabPane tab="Tab 10" key="16">Content of tab 10</TabPane>
          <TabPane tab="Tab 11" key="17">Content of tab 11</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default NewsForStudent