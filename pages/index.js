import Layout from '../index.js'
import ContainerLeft from '../components/containerLeft'
import ContainerRight from '../components/containerRight'
import '../styles/index.scss'

export default () => (
  <Layout>
    <div className='main-container'>
      {/* <ContainerLeft /> */}
      <ContainerRight />
    </div>
  </Layout>
)
