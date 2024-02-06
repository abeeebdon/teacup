import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa'

const Share = () => {
  return (
    <div className="icon-wrapper">
      <p>Share</p>
      <FaFacebook className="share-icon" />
      <FaTwitter className="share-icon" />
      <FaPinterest className="share-icon" />
    </div>
  )
}
export default Share
