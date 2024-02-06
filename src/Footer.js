import { FaTwitter, FaFacebook, FaPinterest } from 'react-icons/fa'
import img2 from './images/avatar-michelle.jpg'
import { IoIosShareAlt } from 'react-icons/io'

const Footer = ({ handleShare, mobileToggle, setMobileToggle }) => {
  return (
    <div className={!mobileToggle ? 'footer transparent' : 'footer blue'}>
      <div className="footer-container">
        {mobileToggle ? (
          <div className=" head-share">
            <h2>Share</h2>
          </div>
        ) : (
          <img src={img2} alt="Michelle" className="avatar" />
        )}
        <>
          {/*Mobile Toggle sets the display of the share components such that when it is false the component is not shown and when on the component shows don */}
          {mobileToggle ? (
            <div className="share-mobile-icon">
              <FaFacebook />
              <FaTwitter />
              <FaPinterest />
            </div>
          ) : (
            <div className="name-year">
              <h3>Michelle Appleton</h3>
              <p>28 Jun 2020</p>
            </div>
          )}
        </>
      </div>

      <div className="icon">
        <button className="btn">
          <IoIosShareAlt
            className={mobileToggle ? 'btn-icon white' : 'btn-icon'}
            onClick={() => setMobileToggle(!mobileToggle)}
          />
        </button>
      </div>
    </div>
  )
}
export default Footer
