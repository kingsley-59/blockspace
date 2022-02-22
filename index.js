

const color = {
    primary: "blue",
    neutral: "#fff"
}

const SocialsBar = () => {

    return (
        <div className="d-flex justify-content-start p-2" style={{display: "none"}}>
            <Row className="hdn-contact-info">
                <Col>
                    <a href="" target="_blank"><i className="fa fa-facebook"></i></a>
                </Col>
                <Col>
                    <a href="" target="_blank"><i className="fa fa-twitter"></i></a>
                </Col>
                <Col>
                    <a href="" target="_blank"><i className="fa fa-youtube"></i></a>
                </Col>
                <Col>
                    <a href="" target="_blank"><i className="fa fa-linkedin"></i></a>
                </Col>
            </Row>
        </div>
    );
}

const LogoBar = () => {
    return (
        <div>
            <div className="site-logo col-md-6 col-sm-8 col-xs-9 p-4">
                <div className="d-flex justify-content-start align-items-center">
                    <img src="./images/logo/logo.jpg" className="mx-3" alt="blospace logo" width="70px" />
                    <div>
                        <span className="text-primary h2">BLOKSPACE</span><br/>
                        <h4 className="text-primary">Security</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Navigation = () => {
    return (
        <div className="navigation">
            
        </div>
    );
}

const Header = () => {

    return (
        <div>
            <SocialsBar />
            <LogoBar />
            <Navigation />
        </div>
    );
}

const BannerSection = () => {

    return (
        <div className="site-section bg-primary" >
            <div className="banner-section align-items-center">
                <Row className="banner-content justify-content-center align-items-center p-3 my-auto">
                    <Col className="banner-text" md={6} sm={12}>
                        <h2 className="text-white text-bold mb-5">BLOCKCHAIN INTEGRATION. SIMPLIFIED.</h2>
                        <p className="text-white text-bold mb-5">
                            BLOK SPACE SECURITY LIMITED is a private limited company based in 12-15 Wenlock Road, 
                            Manchester, England which employs over 10 people. The company started on 2016-04-02. 
                            The company also has a branch at the United States which is manages by the Chief Blockchain Manager. 
                            It's main line of business activity is development of blockchain projects, which provide 
                            security on blockchain project.
                        </p>
                        <ul className="text-white mb-5">
                            <li className="text-white text-bold">Prebuilt Connectors {"&"} APIs</li>
                            <li className="text-white text-bold">Managed Web3 Infrastructure</li>
                            <li className="text-white text-bold">Performance {"&"} Analytics</li>
                            <li className="text-white text-bold">Recover Lost Token</li>
                        </ul>
                        <Button className="p-3 btn-secondary text-white text-bold">PLATFORM OVERVIEW</Button>
                    </Col>
                    <Col className="banner-img" md={6} sm={12}>
                        <img src="./images/banner-hero.png" alt="banner hero" width="80%" className="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const FeaturesSection = () => {
    return (
        <div className="site-section">
            <div className="features-heading-animate text-center p-3">
                <h1 className="text-dark text-bold">Connect <span className="text-secondary text-bold h1">processes</span> with BlockSpaces</h1>
            </div>
            <div className="text-center my-3">
                <h6 className="text-bold">THE PLATFORM</h6>
            </div>
            <div className="row p-5">
                <Col className="text-center p-3 mb-3" md={6} sm={12}>
                    <div className="bs-connect-heading mb-3">
                        {/* <img src="./images/logo/blockspaces-connect.png" alt="" width="" /> */}
                        <h3>BLOKSPACES <br /> CONNECT</h3>
                    </div>
                    <div className="bs-conect-tagline mb-4">
                        <span className="text-bolder font-italic">Connecting businesses to blockchain</span>
                    </div>
                    <div className="bs-connect-hero mb-3">
                        <img src="./images/connect-hero.png" alt="blockspaces connect hero" width="80%" />
                    </div>
                    <p className="mb-3">
                        Pre-built integrations and multi-blockchain connections delivered seamlessly 
                        code-free, coming soon. Reserve a spot in our pilot program.
                    </p>
                    <Button className="btn-secondary text-white text-bold p-3">LEARN MORE</Button>
                </Col>
                <Col className="text-center p-3 mb-3" md={6} sm={12}>
                    <div className="bs-connect-heading mb-3">
                        {/* <img src="./images/logo/blockspaces-build.png" alt="" width="" /> */}
                        <h3>BLOKSPACES <br /> BUILD</h3>
                    </div>
                    <div className="bs-conect-tagline mb-4">
                        <span className="text-bolder font-italic">Building blockchains for businesses</span>
                    </div>
                    <div className="bs-connect-hero mb-3">
                        <img src="./images/build-hero.png" alt="blockspaces build hero" width="80%" />
                    </div>
                    <p className="mb-3">
                        Fully managed blockchain infrastructure and developer tools, complete with 
                        performance analytics and insights, now available.
                    </p>
                    <Button className="btn-secondary text-white text-bold p-3">LEARN MORE</Button>
                </Col>
            </div>
            <Row className="p-5">
                <Col className="text-left mb-3" md={6} sm={12}>
                    <h2 className="text-primary text-bold">A NEW ERA OF BLOCKCHAIN INTEGRATION</h2>
                    <p className="text-justify">
                        As groundbreaking as the internet, blockchain is a transformational change in business 
                        process management. Our vision is a more collaborative, instantaneous, information sharing 
                        world where every entity up and down the business value chain transacts with each other 
                        in an immutable, trusted manner.
                    </p>
                    <p className="text-justify">
                        With BlokSpaces Connect, we take the mystery out of blockchain integration and simplify 
                        data connections between disparate systems.  Delivered with a code-free interface without 
                        requiring significant technical expertise, Connect is built for the specific challenges 
                        of blockchain integration.
                    </p>
                    <p className="text-justify">
                        Interested in being a part of the future of blockchain integration? We are now accepting 
                        reservations for our early access Pilot Program.  Register today!
                    </p>
                </Col>
                <Col className="text-center mb-3" md={6} sm={12}>
                    <img src="./images/illustration.gif" alt="illustration gif" width="80%" />
                    <Button className="btn-secondary text-white text-bold p-3">LEARN MORE</Button>
                </Col>
            </Row>
        </div>
    );
}

const LeadershipSection = () => {
    return (
        <div className="site-section bg-primary-lighter">
            <div className="leadership-main">
                <div className="leadership-heading text-center">
                    <h2>Our Leadership</h2>
                </div>
                <div className="leadership-slides row justify-content-center ">
                    <Col md={3} sm={5} xs={10} className="bg-white text-center rounded m-3">
                        <div className="leadership-hero p-3">
                            <img src="./images/portraits/george.jpg" className="rounded-circle" width="200px" alt="george photo" />
                        </div>
                        <p className="text-bold">George Tyler</p>
                        <p className="text-small text-muted">Chief Executive Officer | Co-Founder</p>
                    </Col>
                    <Col md={3} sm={5} xs={10} className="bg-white text-center rounded m-3">
                        <div className="leadership-hero p-3">
                            <img src="./images/portraits/alice.jpg" className="rounded-circle" width="200px" height="200px" alt="alice photo" />
                        </div>
                        <p className="text-bold">Alice Sosa Sores</p>
                        <p className="text-small text-muted">Chief Blockchain Officer | Co-Founder</p>
                    </Col>
                    <Col md={3} sm={5} xs={10} className="bg-white text-center rounded m-3">
                        <div className="leadership-hero p-3 rounded">
                            <img src="./images/portraits/chen-li.jpg" className="rounded-circle" width="200px" alt="Chen SU Li photo" />
                        </div>
                        <p className="text-bold">Chen Su Li</p>
                        <p className="text-small text-muted">Technical Project Lead</p>
                    </Col>
                </div>
            </div>
        </div>
    );
}

const ClosingSection = () => {
    return (
        <div className="site-section-small my-auto p-4 bg-primary-light">
            <div className="closing-section-mains p-5">
                <h3 className="text-center text-bold mb-4">
                    Interested in being a part of the future of blockchain integration? Subscribe to our newsletter for 
                    updates on product releases, pilot program opportunities, and more.
                </h3>
                <div className="text-center mb-4">
                    <Button className="btn-secondary text-white text-bold p-3 m-auto">LEARN MORE</Button>
                </div>
            </div>
        </div>
    );
}

const Footer = () => {
    return (
        <div className="site-section bg-primary-lighter">
            <Row className="p-2">
                <Col lg={3} md={6} xs={10} className="p-3 mb-4">
                    <h6 className="text-bolder mb-5">WHAT WE DO</h6>
                    <span className="text-small text-muted">BLOCKCHAIN INTEGRATION</span><br/>
                    <span className="text-small text-muted">BUSINESS GROWTH AND INNOVATION</span><br/>
                    <span className="text-small text-muted">WEB 3.0 BLOCKCHAIN TECHNOLOGY</span><br/>
                    <span className="text-small text-muted">ENTERPRISE APPLICATIONS</span><br/>
                    <span className="text-small text-muted">TECHNOLOGY INITIATIVES</span><br/>
                    <span className="text-small text-muted">SECURE BLOCKCHAIN INFRASTRUCTURE SOLUTIONS</span><br/>
                    <span className="text-small text-muted">CAN BLOCKCHAIN HELP FOOD DESERTS?</span><br/>
                </Col>
                <Col lg={3} md={6} xs={10} className="p-3 mb-4">
                    <h6 className="text-bolder mb-5">COMPANY</h6>
                    <span className="text-small text-muted">LEADING BLOCKCHAIN TEAM</span><br/>
                    <span className="text-small text-muted">CAREERS</span><br/>
                    <span className="text-small text-muted">CUSTOMER LOGIN</span><br/>
                </Col>
                <Col lg={3} md={6} xs={10} className="p-3 mb-4">
                    <h6 className="text-bolder mb-5">RESOURCES</h6>
                    <span className="text-small text-muted">CUSTOMER USE CASES</span><br/>
                    <span className="text-small text-muted">IN THE NEWS</span><br/>
                    <span className="text-small text-muted">BLOGS AND ANNOUCEMENTS</span><br/>
                    <span className="text-small text-muted">PODCASTS AND VIDEOS</span><br/>
                </Col>
                <Col lg={3} md={6} xs={10} className="text-center p-3 mb-4">
                    <div className="d-flex justify-content-start align-items-center">
                        <img src="./images/logo/logo.jpg" className="mx-3" alt="blospace logo" width="70px" />
                        <div className="text-left">
                            <span className="text-primary h2">BLOKSPACE</span><br/>
                            <h4 className="text-primary">Security</h4>
                        </div>
                    </div>
                    <span className="text-small text-muted">USA Address: 208 E whiting St, Tampa m, FL. 33602 USA</span><br/>
                    <span className="text-secondary">+19043645460</span><br/>
                    <span className="text-small text-muted">UK Address: 12-15 Wenlock Road, Manchester, England, N17GU</span><br/>
                    <span className="text-secondary">+44 7401 309244</span><br/>
                    <span className="text-secondary">blokspaces.netlify@ccmail.uk</span><br/>
                </Col>
            </Row>
        </div>
    );
}

const FooterExtras = () => {
    return (
        <div className="bg-primary">
            <Row className="p-3">
                <Col md={6} xs={12} className="text-left">
                    <div>©2021 Copyright - BlockSpaces, Inc. | All Rights Reserved.</div>
                    <div>Terms of Service   Privacy Policy    Harassment Policy</div>
                </Col>
                <Col md={6} xs={12} className="text-right d-flex justify-content-center">
                    <div className="f-socials p-3"><i className="fa fa-facebook"></i></div>
                    <div className="f-socials p-3"><i className="fa fa-twitter"></i></div>
                    <div className="f-socials p-3"><i className="fa fa-youtube"></i></div>
                    <div className="f-socials p-3"><i className="fa fa-linkedin"></i></div>
                    <div className="f-socials p-3"><i className="fa fa-sign-in"></i></div>
                </Col>
            </Row>
        </div>
    );
}


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
          <>
          <Header />
          <BannerSection />
          <FeaturesSection />
          <LeadershipSection />
          <ClosingSection />
          <Footer />
          <FooterExtras />
          </>
      );
    }
  }
  
const root = document.getElementById("root");
  
ReactDOM.render(<App />, root);