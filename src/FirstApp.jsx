const newMesagge = {
  message: 'Hello World',
  title: 'My First App',
}
const mensaje = () => 'Hola mundo desde una función';
export const FirstApp = () => {
  return (
    <>
      <h1>{mensaje()}</h1>
      {/* <code>{JSON.stringify(newMesagge)}</code> */}
    </>
  )
}
