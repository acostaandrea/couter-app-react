const newMesagge = {
  message: 'Hello World',
  title: 'My First App',
}
const mensaje = () => 'Hola mundo desde una función';
export const FirstApp = ({title, subtitle}) => {
  // console.log(title)
  return (
    <>
      <h1>{title}</h1>
      <h3>{subtitle +1}</h3>
      {/* <code>{JSON.stringify(newMesagge)}</code> */}
    </>
  )
}
