import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import NotFoundIcon from '../../assets/images/system/idiot-bike.gif'
import { HomeFooter, HomeNavigation } from '../../components'

const NoMatch = () => {
  const navigate = useNavigate()

  return (
    <>
      <HomeNavigation />
      <Result
        style={{
          paddingTop: '128px',
        }}
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        icon={<img alt="No match icon" src={NotFoundIcon} />}
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            Back Home
          </Button>
        }
      />
      <HomeFooter />
    </>
  )
}

export default NoMatch
