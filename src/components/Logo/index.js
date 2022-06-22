import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import LogoImg from '../../assets/images/system/main-logo.png'

const logoStyle = {
  padding: '8px',
  width: '200px',
  maxHeight: '64px',
  objectFit: 'contain',
  cursor: 'pointer',
  transition: 'all 0.2s linear',
}
const Logo = (props) => {
  const { style } = props
  const navigate = useNavigate()

  return (
    <>
      <motion.div whileHover={{ scale: 1.1 }}>
        <img
          src={LogoImg}
          style={{ ...logoStyle, ...style }}
          alt="Shop logo"
          onClick={() => navigate('/')}
          className="shop-logo"
        />
      </motion.div>
    </>
  )
}

export default Logo
