import { Checkbox, Row, Col } from 'antd';


function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

export default () => (
  <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row>
      <Col span={24}><Checkbox value="A">Anh 3x4</Checkbox></Col>
      <Col span={24}><Checkbox value="B">CMT</Checkbox></Col>
      <Col span={24}><Checkbox value="C">C</Checkbox></Col>
      <Col span={24}><Checkbox value="D">D</Checkbox></Col>
      <Col span={24}><Checkbox value="E">E</Checkbox></Col>
    </Row>
  </Checkbox.Group>
)