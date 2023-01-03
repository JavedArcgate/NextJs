import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
// import styles from '../styles/custom.scss'
import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import banner from '../assets/images/home-banner.PNG'
// import banner from '../../public/images/home-banner.PNG'
import deliveryFood from '../../public/images/delivery-food.png'
import easyOrder from '../../public/images/easy-order.png'
import fastDelivery from '../../public/images/fast-delivery.png'
import Slider from './slider'
import styles from '../styles/Home.module.scss'
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>

      <main className={styles.main}>
        <Form className="w-100 my-lg-5 my-sm-5 my-5  px-4 d-none">
          <Row>
            <Col xs={12} lg={5}>
              <div >
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fa fa-clone me-2" aria-hidden="true">Icon</i>
                  <Form.Control placeholder="City" />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
            </Col>
            <Col xs={12} lg={3}>
              <div className="d-flex justify-content-lg-end mt-2">
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                  <label className="custom-control-label ms-2" htmlFor="customSwitch1">Edit mode</label>
                </div>
                <a href="" className="px-4">Add task +</a>
              </div>
            </Col>
          </Row>
        </Form>
        <Header />
        <Row className="w-100 mt-4">
          <Col xs={12} lg={6}>
            <div className="pe-lg-3">
              <h1 className="fw-bolder px-lg-5 pt-4" style={{ fontSize: '65px' }}>Don't wanna Make you have A bad day</h1>
              <h3 className="px-lg-5 pt-3 text-muted" >Our job is delivering a delicious food with fast, free delivery and easy. </h3>
              <div className="px-lg-5 pt-4">
                <Button variant="warning rounded-pill px-4 text-light fw-bold">Order Now</Button>
                <Button variant="outline-warning rounded-pill px-4 mx-lg-3 mx-md-3 fw-bold">How to Order</Button>
                <div className="d-flex py-4 align-items-center my-4">
                  <div>
                    <img src="https://loremflickr.com/g/65/65/tiger" className="rounded-circle" />
                    <img src="https://loremflickr.com/g/65/65/cat" className="rounded-circle ml-30" />
                    <img src="https://loremflickr.com/g/65/65/rio" className="rounded-circle ml-30" />
                  </div>
                  <div className="ms-3">
                    <h5 className="fw-bold mb-0">Customer Review</h5>
                    <h6 className="mb-0"><i className="fas fa-star text-warning"></i> 4.8 <small className="text-muted">(5K reviews)</small></h6>
                  </div>
                </div>

              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} className="text-lg-end"><Image src={banner} alt="Picture of the author"
          /></Col>
        </Row>
        <Row>
          <Col lg={12} className="text-center"><small className="text-muted">Support by:</small></Col>
        </Row>
        <Row className="container align-items-center justify-content-between mt-4 mb-5 pb-5">
          <Col xs={4} lg={2} className="mx-3  my-lg-1 my-sm-3 my-3"><img src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg" className="img-fluid" /></Col>
          <Col xs={4} lg={2} className="mx-3  my-lg-1 my-sm-3 my-3"><img src="https://www.clipartmax.com/png/full/358-3584570_logo-grab-png-grab-logo.png" className="img-fluid" /></Col>
          <Col xs={4} lg={2} className="mx-3  my-lg-1 my-sm-3 my-3"><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Dana_logo.png" className="img-fluid" /></Col>
          <Col xs={4} lg={2} className="mx-3  my-lg-1 my-sm-3 my-3"><img src="https://www.freepnglogos.com/uploads/shopee-logo-png/shopee-logo-digital-economy-forum-mdcc-1.png" className="img-fluid" /></Col>
          <Col xs={4} lg={2} className="mx-3  my-lg-1 my-sm-3 my-3"><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Zomato_company_logo.png" className="img-fluid" /></Col>
        </Row>

        <section className="my-5 container align-items-center justify-content-between mt-4 mb-5 pb-5">
          <Row>
            <Col lg={12} className="text-center mb-2"><small className="text-warning">— Our Services —</small></Col>
            <Col lg={12} className="text-center"><h3 className="fw-bold">Our serve just for you</h3></Col>
          </Row>
          <Row className="my-5">
            <Col lg={4} md={12} className="text-center px-5">
              <Image src={deliveryFood} />
              <h3 className="fw-bold my-4">Delivery Food</h3>
              <h5 className="text-muted">Lorem ipsum dolor a sit amet consecteture</h5>
            </Col>
            <Col lg={4} md={12} className="text-center px-5">
              <Image src={easyOrder} />
              <h3 className="fw-bold my-4">Ease to Order</h3>
              <h5 className="text-muted">Lorem ipsum dolor a sit amet consecteture</h5>
            </Col>
            <Col lg={4} md={12} className="text-center px-5">
              <Image src={fastDelivery} />
              <h3 className="fw-bold my-4">Fastest Delivery</h3>
              <h5 className="text-muted">Lorem ipsum dolor a sit amet consecteture</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <li>First list item</li>
                <li>Second list item</li>
                <li>Third list item</li>
                <li>Fourth list item</li>
                <li>Fifth list item</li>
              </ul>
            </Col>
          </Row>
        </section>

        <section className="container py-5">
          <Slider />
        </section>
      </main>
      <Footer />
    </div>
  )
}
