import {FC} from "react"
import Head from 'next/head'
import Header from "./allComp/Header";
import Footer from "./allComp/Footer";

interface ILayout {
    title?: string,
    keywords?: string,
    description?: string

}
const Layout: FC<ILayout> = ({children,description,keywords,title}) => {
  return (
     <>
      <div>
          <Head>
              <title>{title}</title>
              <meta name='keywords' content={keywords}/>
              <meta name='description' content={description}/>
          </Head>
          <Header />
          <div>
              {children}
          </div>
          <Footer />
      </div>
     </>
  )
}
export default Layout
Layout.defaultProps = {
    title: 'E-COMM',
    keywords: 'commercial',
    description: 'Commercial'
}