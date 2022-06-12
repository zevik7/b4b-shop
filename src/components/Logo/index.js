import LogoImg from '../../assets/images/logo_shop.jpg'
import { useNavigate } from 'react-router-dom'

const logoStyle = {
  // float: 'left',
  width: '200px',
  height: '100%',
  objectFit: 'contain',
  cursor: 'pointer',
}

const Logo = (props) => {
  const { style } = props
  const navigate = useNavigate()

  return (
    <>
      <img
        src={LogoImg}
        style={{ ...logoStyle, ...style }}
        alt="Logo"
        onClick={() => navigate('/')}
      />
    </>
  )
}

export default Logo
