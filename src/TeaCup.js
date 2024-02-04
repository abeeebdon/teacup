import img1 from './images/drawers.jpg'
import img2 from './images/avatar-michelle.jpg'
import { FaShare } from 'react-icons/fa'
import useWindowSize from './hooks/useWindowSize'
import Footer from './Footer'
import Share from './Share'
const TeaCup = ({ handleShare, toggle }) => {
  const { width } = useWindowSize()
  return (
    <main className="tea-cup">
      <div className="image flex-1">
        <img src={img1} alt="image1" />
      </div>
      <div className="flex-2">
        <div className="text">
          <h2>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <div className="relative">
          {toggle && <Share />}
          {width > 600 ? (
            <div className="footer">
              <img src={img2} alt="Michelle" className="avatar" />
              <div className="name-year">
                <h3>Michelle Appleton</h3>
                <p>28 Jun 2020</p>
              </div>
              <div className="icon">
                <button className="btn">
                  <FaShare className="btn-icon" onClick={() => handleShare()} />
                </button>
              </div>
            </div>
          ) : (
            <Footer />
          )}
        </div>
      </div>
    </main>
  )
}
export default TeaCup
