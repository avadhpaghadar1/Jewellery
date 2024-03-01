import { Button } from "@mui/material";
import logo from "../../Images/allurelogo.png";
import first_img from "../../Images/home_first_section.jpg";
import home_ring from "../../Images/home_ring.jpg";
import jewellery_earing from "../../Images/jewellery_earing.jpg";
import jewellery_bangle from "../../Images/jewellery_bangle.jpg";
import jewellery_ring from "../../Images/jewellery_ring.jpg";
import third_section_up from "../../Images/third_section_up.jpg";
import third_section_down from "../../Images/third_section_down.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="first_section">
        <div className="first_section_left">
          <p className="first_section_left_head">
            <b>
              LUXURY
              <br /> JEWELLERY
              <br /> PRODUCT
            </b>
          </p>
          <div class="vertical-line"></div>
          <p className="first_section_left_description">
            Indulge in opulence with our luxury jewellery collection. Each piece
            exudes elegance and sophistication, crafted with exquisite detail to
            elevate your style and make a statement.
          </p>
          <Button>
            <a href="#read">Read More</a>
          </Button>
        </div>
        <div className="first_section_right">
          <img
            className="first_section_right_image_one"
            src={first_img}
            alt="No-File"
          />
          <img
            className="first_section_right_image_second"
            src={home_ring}
            alt="No-File"
          />
        </div>
      </div>
      <div className="second_section">
        <div className="second_section_head">
          <p className="head_section_one">JEWELLERY COLLECTION</p>
          <p className="head_section_second">
            "Embrace timeless elegance with our exquisite jewellery collection.
            Each piece is crafted with passion and artistry, designed to adorn
            you with beauty and sophistication, making every moment special."
          </p>
        </div>
        <div className="second_section_item">
          <div className="item_component">
            <img src={jewellery_ring} alt="No-File"></img>
            <div className="item_component_description">
              <div>
                <h4>
                  RING
                  <br /> COLLECTION
                </h4>
                <p>
                  Elegant rings that sparkle with timeless beauty and exquisite
                  craftsmanship.
                </p>
                <Link to="/Rings">
                  <Button>See More</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="item_component">
            <div className="item_component_description">
              <h4>
                BANGLE
                <br /> COLLECTION
              </h4>
              <p>
                Explore our bangles collection, where elegance meets
                sophistication in every design.
              </p>
              <Link to="/Bangles">
                <Button>See More</Button>
              </Link>
            </div>
            <img src={jewellery_earing} alt="No-File"></img>
          </div>
          <div className="item_component">
            <img src={jewellery_bangle} alt="No-File"></img>
            <div className="item_component_description">
              <h4>
                NECKLACE
                <br />
                COLLECTION
              </h4>
              <p>
                Dazzle with our necklace collection, featuring stunning designs
                for every style.
              </p>
              <Link to="/Necklaces">
                <Button>See More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="third_section" id="read">
        <div className="about_one">
          <div className="about_one_img">
            <img src={third_section_up} alt="No-File"></img>
          </div>
          <div className="about_one_description">
            <h4>POLISHED DIAMOND</h4>
            <br />
            <p>
              Discover the brilliance of polished diamonds with our exquisite
              collection. Each diamond is meticulously cut and polished to
              perfection, revealing its natural beauty and sparkle. Our diamonds
              are ethically sourced and expertly crafted into stunning jewelry
              pieces that you'll cherish for a lifetime. Whether you're looking
              for a classic solitaire ring, elegant earrings, or a statement
              necklace, our polished diamonds will add a touch of luxury and
              sophistication to any outfit.
            </p>
          </div>
        </div>
        <div className="about_two">
          <div className="about_two_description">
            <h4>DIAMOND JEWELLERY</h4>
            <br />
            <p>
              Elevate your look with our exquisite diamond jewelry collection.
              Our stunning diamond rings, earrings, necklaces, and bracelets are
              expertly crafted to perfection, showcasing the brilliance of
              diamonds in captivating designs. Whether you're looking for a
              timeless solitaire ring, a glamorous pair of diamond earrings, or
              a statement diamond necklace, our collection offers something for
              every style. Add a touch of luxury and sparkle to your ensemble
              with our beautiful diamond jewelry pieces.
            </p>
          </div>
          <div className="about_two_img">
            <img src={third_section_down} alt="No-File"></img>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="fourth_section">
          <div className="fourth_section_left">
            <img src={logo} alt="No-File"></img>
            <ul>
              <li>
                <Link to="mailto:allurejewels750@gmail.com">
                  <MailIcon />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/allurejewelsofficial?igsh=eGpianpnbDk4ZDcw">
                  <InstagramIcon />
                </Link>
              </li>
              <li>
                <Link to="whatsapp://send?phone=+919979276765">
                  <WhatsAppIcon />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/allurejewels750?mibextid=ZbWKwL">
                  <FacebookIcon />
                </Link>
              </li>
            </ul>
          </div>
          <div className="fourth_section_center">
            <h3>About Us</h3>
            <p>
              Allure Jewels is a premier diamond jewellery manufacturing
              company, dedicated to crafting exquisite pieces that captivate.
              With precision and passion, we create timeless treasures that
              radiate elegance and allure.
            </p>
          </div>
          <div className="fourth_section_right">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="Rings">Rings</Link>
              </li>
              <li>
                <Link to="Necklaces">Necklaces</Link>
              </li>
              <li>
                <Link to="Bangles">Bangles</Link>
              </li>
              <li>
                <Link to="Bracelets">Bracelets</Link>
              </li>
            </ul>
          </div>
        </div>
  
      </div>
    </>
  );
};
export default Home;
