import React, { Component, useRef, useEffect } from "react";
import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductCallout,
} from "arccorp-vars";

import { PodcastWidget } from "podcast-widget";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function App() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: true,
      loop: true,
      slidesPerView: 5,
      speed: 500,
      cssMode:true,
      //add this
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            color: #2a2b2c;
          }
          .swiper-wrapper {
            overflow: hidden;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <div className="arc-dc-page" style={{ paddingBottom: "0" }}>
      <Stickynav
        title="Direct Connect"
        links={[
          { title: "Overview", url: "#overview" },
          { title: "Media", url: "#media" },
          { title: "Partners", url: "#partners" },
        ]}
        contactUs="Contact Us"
        rightLink="https://www2.arccorp.com/support-training/product-sales-request?Product=AirportIS"
      />

      <ProductJumbo
        className="arc-dc-jumbo"
        backgroundImage="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-jumbo.png"
        title={
          <>
            ARC is <br />
            NDC-Ready
          </>
        }
        subtitle={
          <>
            <span>
              We connect airlines, corporate buyers and travel agencies
            </span>
            , giving them the freedom to implement distribution strategies in a
            way that suits them best.
          </>
        }
        ctaLink="#overview"
        width="100%"
      />

      <ProductText
        body={
          <>
            <hr className="arc-dc-overview-hr" />
            <div>asdf</div>
          </>
        }
        className="bg-color-fog"
        eyebrow="Overview"
        id="overview"
        subTitleClass=""
        subtitle="We pair ARC Direct Connect with NDC, alongside our custom-configured settlement platform, to create unmatched clarity and efficiency for any distribution strategy. Together, we enhance partnerships to deliver richer, personalized traveler experiences. "
        title={
          <>
            Leverage NDC in Your <br />
            Distribution Strategy
          </>
        }
        titleClass="arc-dc-header"
      />

      <ProductText
        body={
          <>
            <div className="row" style={{ marginTop: "60px" }}>
              <div className="col-lg-6"><PodcastWidget /></div>
              <div className="col-lg-6">
                <img src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-video.png" />
              </div>
            </div>
          </>
        }
        className="bg-color-fog"
        eyebrow="Media"
        id="media"
        subTitleClass=""
        subtitle="Explore ARC Direct Connect, omnichannel and NDC-related topics with top industry experts.  "
        title="Gain Deeper Insights"
        titleClass="arc-dc-header"
      />

      <div
        id="features"
        class="bg-img-container lazy"
        data-bg="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-trusted-bg.png"
      >
        <div class="callout-container callout-container-mt2">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h2 class="product-header white">Tailored. Tested. Trusted.</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div
                  class="product-callout-copy white"
                  style={{
                    maxWidth: "815px",
                    fontFamily: "SourceSansPro-Light",
                  }}
                >
                  ARC’s settlement platform features that support additional
                  Direct Connect implementations:
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="sub-callout-container"
          style={{
            paddingTop: "0",
            paddingLeft: "0",
            paddingRight: "0",
            borderTop: "none",
          }}
        >
          <div style={{ maxWidth: "815px" }}>
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="subcallout-card">
                    <div class="d-flex align-items-center">
                      <img
                        src="https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-settlement-1.png"
                        style={{
                          "padding-top": "5px",
                          "padding-bottom": "6px;",
                        }}
                        alt="Flexible credit card billing options"
                      />
                      <div class="subcallout-card-copy">
                        Multiple credit card billing options
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="subcallout-card">
                    <div class="d-flex align-items-center">
                      <img
                        src="https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-settlement-2.png"
                        alt="Customizable transaction modifications"
                      />
                      <div class="subcallout-card-copy">
                        Customizable transaction modifications
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="subcallout-card">
                    <div class="d-flex align-items-center">
                      <img
                        src="https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-settlement-3.png"
                        alt="Acceptance of SPRF (ARC) or RET (BSP) file formats"
                      />
                      <div class="subcallout-card-copy">
                        Acceptance of SPRF (ARC) or RET (BSP) file formats
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="subcallout-card">
                    <div class="d-flex align-items-center">
                      <img
                        src="https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-settlement-4.png"
                        alt="Ability to identify direct connect transactions in IAR and on airline outputs"
                      />
                      <div class="subcallout-card-copy">
                        Ability to identify direct connect transactions in IAR
                        and on airline outputs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="subcallout-card">
                    <div class="d-flex align-items-center">
                      <img
                        src="https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-settlement-5.png"
                        alt="Flexible messaging schema options (NDC or proprietary)"
                      />
                      <div class="subcallout-card-copy">
                        Flexible messaging schema options (NDC or proprietary)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="arc-dc-airlines">
        <div className="container">
          <div className="col-lg-12">
            <h2>COMPANIES THAT PARTNER WITH ARC’S DIRECT CONNECT PROGRAM</h2>

            <div className="arc-dc-airline-logos">
              <swiper-container
               init="false"
                ref={swiperElRef}
              >
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/af_logo.png"
                      alt="Air France"
                      loading="lazy"
                      //style={{ paddingRight: "50px", paddingBottom: "18px;" }}
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/homepage/redesign/ndc/aa_logo.png"
                      alt="American Airlines"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/avianca_logo.png"
                      alt="Avianca"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/ba_logo.png"
                      alt="British Airways"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      src="https://www2.arccorp.com/globalassets/homepage/redesign/ndc/etihad_logo.png"
                      alt="Etihad Airlines"
                      width="80"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/homepage/redesign/ndc/aa_logo.png"
                      alt="American Airlines"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
              </swiper-container>
            </div>
          </div>
        </div>
      </div>

      <div id="partners"></div>
    </div>
  );
}

export default App;
