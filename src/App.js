import { useState } from 'react'
import TeaCup from './TeaCup'
const App = () => {
  const [toggle, setToggle] = useState(false)
  const handleShare = () => {
    setToggle(!toggle)
  }
  return (
    <div className="App">
      <TeaCup handleShare={handleShare} toggle={toggle} />
    </div>
  )
}
export default App
