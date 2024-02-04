import img2 from './images/avatar-michelle.jpg'
import { FaShare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <img src={img2} alt="Michelle" className="avatar" />
      <div className="name-year">
        <h3>Michelle Appleton</h3>
        <p>28 Jun 2020</p>
      </div>
      <div className="icon">
        <button className="btn">
          <FaShare className="btn-icon" />
        </button>
      </div>
    </div>
  )
}
export default Footer
