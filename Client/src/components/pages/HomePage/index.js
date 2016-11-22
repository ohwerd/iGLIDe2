import React from 'react'

import { PageTemplate, Header,Hero, Footer, FeatureList,LoginBox } from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />}  footer={<Footer />}>
      <LoginBox/>
    </PageTemplate>
  )
}

export default HomePage
