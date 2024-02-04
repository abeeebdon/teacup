import { FaTwitter, FaFacebook, FaPinterest } from 'react-icons/fa'
import img2 from './images/avatar-michelle.jpg'
import { IoIosShareAlt } from 'react-icons/io'

const Footer = ({ handleShare, toggle }) => {
  return (
    <div className="footer">
      {toggle ? (
        <div className="footer-container">
          <img src={img2} alt="Michelle" className="avatar" />
          <div className="name-year">
            <h3>Michelle Appleton</h3>
            <p>28 Jun 2020</p>
          </div>
        </div>
      ) : (
        <div className="share-mobile">
          <p>Share</p>
          <div>
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
          </div>
        </div>
      )}

      <div className="icon">
        <button className="btn">
          <IoIosShareAlt className="btn-icon" onClick={() => handleShare()} />
        </button>
      </div>
    </div>
  )
}
export default Footer
