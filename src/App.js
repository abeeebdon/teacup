import { useState } from 'react'
import TeaCup from './TeaCup'
const App = () => {
  const [toggle, setToggle] = useState(false)
  const [mobileToggle, setMobileToggle] = useState(false)
  return (
    <div className="App">
      <TeaCup
        setToggle={setToggle}
        toggle={toggle}
        mobileToggle={mobileToggle}
        setMobileToggle={setMobileToggle}
      />
    </div>
  )
}
export default App
