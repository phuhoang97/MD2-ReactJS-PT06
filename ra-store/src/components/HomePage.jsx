// rcc
import React, { Component } from "react";
import HeaderPage from "./HeaderPage";
import SliderPage from "./SliderPage";
import DetailPage from "./DetailPage";
import InfoPage from "./InfoPage";
import FooterPage from "./FooterPage";
import Items from "./Items";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className='hero_area'>
          {/* header section strats */}
          <HeaderPage />
          {/* end header section */}
          {/* slider section */}
          <SliderPage />
          {/* end slider section */}
        </div>
        {/* detail section */}
        <DetailPage />
        {/* end detail section */}
        {/* products section */}
        <section className='products_section'>
          <div className='heading_container'>
            <h2>New Products In Store</h2>
            <p>Featured Product Just Arrived</p>
          </div>
          <div className='container layout_padding'>
            <div className='product_container'>
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
            </div>
          </div>
        </section>
        {/* end products section */}
        {/* find section */}
        <section className='find_section layout_padding-bottom'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 col-md-8 offset-md-2'>
                <div className='find_container'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='find_container-img'>
                        <img src='images/find-img.png' alt='' />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <h3>
                        Find Everything <br />
                        From A to Z
                      </h3>
                      <p>Shop Back to school</p>
                    </div>
                  </div>
                </div>
                <div className='shop_container'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <p>Shoes</p>
                      <h3>Shop by catagories</h3>
                      <div>
                        <a href=''> View More </a>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='shoe_img-box'>
                        <img src='images/shoes.png' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='find_img-box'>
                  <img src='images/find-hero.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end find section */}
        {/* client section */}
        <section className='client_section layout_padding'>
          <div className='container'>
            <h2>What our Customer says</h2>
            <div
              id='carouselExample2Controls'
              className='carousel slide'
              data-ride='carousel'
            >
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='row layout_padding2'>
                    <div className='col-md-6'>
                      <div className='client_box'>
                        <div className='client_id-box'>
                          <div className='client_img-box'>
                            <img src='images/client.png' alt='' />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className='client_detail'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='client_box'>
                        <div className='client_id-box'>
                          <div className='client_img-box'>
                            <img src='images/client.png' alt='' />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className='client_detail'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='row layout_padding2'>
                    <div className='col-md-6'>
                      <div className='client_box'>
                        <div className='client_id-box'>
                          <div className='client_img-box'>
                            <img src='images/client.png' alt='' />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className='client_detail'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='client_box'>
                        <div className='client_id-box'>
                          <div className='client_img-box'>
                            <img src='images/client.png' alt='' />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className='client_detail'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='row layout_padding2'>
                    <div className='col-md-6'>
                      <div className='client_box'>
                        <div className='client_id-box'>
                          <div className='client_img-box'>
                            <img src='images/client.png' alt='' />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className='client_detail'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='client_box'>
                        <div className='client_id-box'>
                          <div className='client_img-box'>
                            <img src='images/client.png' alt='' />
                          </div>
                          <h4>Carlac liyo</h4>
                        </div>
                        <div className='client_detail'>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className='carousel-control-prev'
                href='#carouselExample2Controls'
                role='button'
                data-slide='prev'
              >
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                href='#carouselExample2Controls'
                role='button'
                data-slide='next'
              >
                <span className='sr-only'>Next</span>
              </a>
            </div>
          </div>
          <div className='container'>
            <div className='item_container'>
              <div className='row'>
                <div className='col-sm-7'>
                  <h3>Best offers on any makeup items</h3>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical
                  </p>
                  <div>
                    <a href=''> Shop Now </a>
                  </div>
                </div>
                <div className='col-sm-5'>
                  <div className='item_img-box'>
                    <img src='images/items.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end client section */}
        {/* sign section */}
        <section className='sign_section layout_padding2'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-5'>
                <h3>Sign up for Newsletter</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered
                </p>
              </div>
              <div className='col-md-7'>
                <form action=''>
                  <input type='email' placeholder='Enter your email' />
                  <button>Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end sign section */}
        {/* info section */}
        <InfoPage />
        {/* end info section */}
        {/* footer section */}
        <FooterPage />
        {/* footer section */}
      </>
    );
  }
}
