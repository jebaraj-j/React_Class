import './App.css'
import Employee from './employee'

 
const Card = () => {
  return (
    <div>
      <h2>Card Component</h2>
    </div>
  )
}

const App = () => {
 

  return(
  <>
  <Card/>
  <h2>Functional Arrow Component </h2>
  <Employee name="Jebaraj J" email="jebaraj.j2004@gmail.com" city="Tirunelveli"/>


  </>
)}
export default App
