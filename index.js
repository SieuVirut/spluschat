import Head from 'next/head'
import { Layout } from 'antd'
import MyHeader from './components/header'
import MyFooter from './components/footer'

const { Header, Content, Footer } = Layout;
export default ({ children }) =>
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
    <Layout>
      <Header>
        <MyHeader />
      </Header>
      <Content>
        {children}
      </Content>
    <Footer style={{ textAlign: 'center' }}>
      <MyFooter />
    </Footer>
    </Layout>
  </div>
