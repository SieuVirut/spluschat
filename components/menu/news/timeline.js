import { Timeline, Icon } from 'antd'

export default () => (
  <Timeline>
    <Timeline.Item>Han nop ho so 2015-09-01</Timeline.Item>
    <Timeline.Item> Han dang ki abccc 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px', color: 'red' }} />} >Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
)
