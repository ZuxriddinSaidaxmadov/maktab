import React, { useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import AOS from "aos";
import Zoom from "react-reveal/Zoom";
import logotip from "../Images/Logotip1.png";

const NavbarHead = () => {
  useEffect(() => {
    AOS.init();
  });
  const myStyle = {
    color: "white",
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div data-aos="fade-up">
      <div id="topbar" class="d-flex align-items-center fixed-top">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-phone d-flex align-items-center">
              <a href="tel:712705617">tel: 71-270-56-17</a>
            </i>
            <i class="bi bi-clock d-flex align-items-center ms-4">
              <span></span>
            </i>
          </div>
          <div class="languages d-none d-md-flex align-items-center">
            <IconButton color="primary">
              <a href="#">
                <TelegramIcon />
              </a>
            </IconButton>
            <IconButton color="primary">
              <a href="#">
                <InstagramIcon />
              </a>
            </IconButton>
          </div>
        </div>
      </div>

      {/* <!-- ======= Header ======= --> */}
      <header id="header" class="fixed-top d-flex align-items-cente">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 class="logo me-auto me-lg-0">
            <a href="#">Kasb hunar</a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          <a href="index.html" class="logo me-auto me-lg-0"></a>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto" href="/">
                  Asosiy
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/ustoz">
                  Ustozlar
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/yangiliklar">
                  yangiliklar
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/galereya">
                  galereya
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#chefs">
                  sertifikatlar
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#gallery">
                  rasmlar
                </a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>yo'nalishlar</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="#contact">
                  aloqa
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle">
              {/* MobileMenu */}
              <div>
                <IconButton
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon style={myStyle} />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
              {/* MobileMenu */}
            </i>
          </nav>
          <a
            href="#book-a-table"
            class="book-a-table-btn scrollto d-none d-lg-flex"
            style={{ border: "solid 1px white" }}
          >
            Comentariya
          </a>
        </div>
      </header>

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="row">
            <div class="col-lg-8">
              <h1>
                <span id="kasbText">
                  {" "}
                  <Zoom top cascade>
                    Chilomzor
                  </Zoom>
                </span>
                <Zoom top cascade>
                  <span>2-son kasb hunar maktabi</span>
                </Zoom>{" "}
              </h1>

              {/* <h2>Chilonzor tumanidagi 2-sonli kasb hunar maktabining rasmiy sayti</h2> */}

              <div class="btns">
                {/* <a href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a> */}
                {/* <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a> */}
              </div>
            </div>
            <div
              class="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={logotip} width={250} style={{ borderRadius: "50%" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavbarHead;
