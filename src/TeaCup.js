import img1 from './images/drawers.jpg'

const TeaCup = () => {
  return (
    <section>
      <div className="image flex-1">
        <img src={img1} alt="image1" />
      </div>
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
      <div className="footer" id="footer">
        <img
          src="./images/avatar-michelle.jpg"
          alt="Michelle"
          className="avatar"
        />
        <div className="name-year">
          <h3>Michelle Appleton</h3>
          <p>28 Jun 2020</p>
        </div>
        <div className="icon" id="icon">
          <button className="btn" id="share">
            <img src="./images/icon-share.svg" alt="share" />
          </button>
        </div>
      </div>
    </section>
  )
}
export default TeaCup
