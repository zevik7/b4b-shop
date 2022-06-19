import LoadingGif from '../../assets/images/system/loading.gif'

const loadingStyle = {
  width: '100%',
  objectFit: 'contain',
}

const LoadingAnimation = () => {
  return <img style={loadingStyle} src={LoadingGif} alt="Loading animation" />
}

export default LoadingAnimation
