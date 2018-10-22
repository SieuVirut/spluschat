import { Tabs } from 'antd'
import NewsForStudent from '../components/menu/newsForStudent'
import AboutSchool from '../components/menu/aboutSchool'
import Photos from '../components/menu/photos'
import Highlight from '../components/menu/highlights'

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default () => (
  <div className='container-left'>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Về USSH" key="1"> <AboutSchool /> </TabPane>
      <TabPane tab="Dành cho tân SV" key="2"> <NewsForStudent /> </TabPane>
      <TabPane tab="Nổi bật" key="3"><Highlight /></TabPane>
      <TabPane tab="Hình ảnh" key="4"> <Photos /> </TabPane>
    </Tabs>
  </div>
)