import PropTypes from 'prop-types'

const newMesagge = {
  message: 'Hello World',
  title: 'My First App',
}
const mensaje = () => 'Hola mundo desde una función';
export const FirstApp = ({title="No hay título", subtitle="No hay subtítulo"}) => {  
  return (
    <>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {/* <code>{JSON.stringify(newMesagge)}</code> */}
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
// ya no se hace asi
// FirstApp.defaultProps = {
//   title: 'No hay título',
//   subtitle: 'No hay subtítulo',
// }
