import LogoImg from '../../assets/images/logo_shop.jpg'

const logoStyle = {
  // float: 'left',
  width: '200px',
  height: '100%',
  objectFit: 'contain',
}

const Logo = (props) => {
  const { style } = props
  return (
    <>
      <img src={LogoImg} style={{ ...logoStyle, ...style }} alt="Logo" />
    </>
  )
}

export default Logo
