import LogoImg from '../../assets/images/logo.webp'

const logoStyle = {
  float: 'left',
  width: '120px',
  height: '100%',
  objectFit: 'contain',
}

const Logo = (props) => {
  const { style } = props
  return <img src={LogoImg} style={{ ...logoStyle, ...style }} alt="Logo" />
}

export default Logo
