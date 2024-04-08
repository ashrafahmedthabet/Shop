import "./footer.scss";
const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="top">
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li>Women</li>
              <li>Men</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>FAQ</li>
              <li>Pages</li>
              <li>Stores</li>
              <li>Compare</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="about">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet conse ctetur adipisicing elit, seddo eiusmod tempor
              incididunt ut labore etdolore.
            </p>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet conse ctetur adipisicing elit, seddo eiusmod tempor
              incididunt ut labore etdolore.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h2 className="logo">Lamastore</h2>
            <p className="copyright">© Copyright 2024. All Rights Reserved</p>
          </div>
          <div className="right">
            <img src="images/payment.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
