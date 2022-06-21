import React from 'react'
import { Result, Button } from 'antd'
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
        icon={<img src={NotFoundIcon} />}
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
