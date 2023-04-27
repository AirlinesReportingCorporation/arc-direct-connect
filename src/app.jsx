import React, { Component, useRef, useEffect, useState } from "react";
import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductCallout,
} from "arccorp-vars";

import Modal from "react-modal";

import { PodcastWidget } from "podcast-widget";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

var switcherContent = {
  airlines: {
    data: [
      {
        title: "Enhanced Partnerships",
        copy: "Provides a flexible, secure means to report and/or settle transactions and creates a seamless agency workflow ",
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-9.png",
      },
      {
        title: "Flexible Distribution",
        copy: (
          <>
            Distribute content to agencies using any{" "}
            aggregator or direct API, whether NDC or another
            proprietary schema{" "}
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-7.png",
      },
      {
        title: "Configurable",
        copy: (
          <>
            Set business rules related to the processing and
            settlement of NDC transactions{" "}
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-3.png",
      },

      {
        title: "Minimize Risk",
        copy: "NDC transactions sent to ARC are included in ARC’s agency and carrier agreements and our revenue integrity monitoring ",
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-5.png",
      },
      {
        title: "Verify Participation Status",
        copy: (
          <>
            Access ARC’s Ticketing Authority API, giving you the assurance of
            knowing you’re working with an ARC-accredited agency
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-1.png",
      },
      {
        title: "Expedited Commissions",
        copy: (
          <>
            Upfront commission settlement on NDC transactions
            sent to ARC for reporting and settlement purposes{" "}
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-12.png",
      },
    ],
  },
  agency: {
    data: [
      {
        title: "Seamless Agency Workflow",
        copy: (
          <>
            Flexible, secure solution to report and/or settle
            NDC transactions with airlines
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-9.png",
      },
      {
        title: "Expedited Commissions",
        copy: (
          <>
            Upfront commission settlement on NDC transactions
            sent to ARC for reporting and settlement purposes{" "}
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-12.png",
      },
      {
        title: "View the Difference",
        copy: (
          <>
            
              Ability to differentiate between NDC and GDS transactions
            {" "}
            within IAR and other agency reports
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-8.png",
      },
      {
        title: "Extended Insights",
        copy: (
          <>
            60 months of viewership in DRS and IAR for all NDC
            transactions sent to ARC for reporting and settlement{" "}
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-11.png",
      },
      {
        title: "Dedicated Support",
        copy: (
          <>
            Access to the ARC Customer Care Center for NDC
            transaction inquiries{" "}
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-6.png",
      },
    ],
  },
  corporate: {
    data: [
      {
        title: "Shared Knowledge",
        copy: "Consolidated reporting through your TMC or Corporate Travel Department  ",
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-4.png",
      },
      {
        title: "Identify with Accuracy",
        copy: (
          <>
            Corporate Identifiers can be provided on direct
            connect transactions for use in market share calculations{" "}
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-10.png",
      },
      {
        title: "Mitigate Risk",
        copy: (
          <>
            Support duty of care by including NDC transactions
            in TMC reporting
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-5.png",
      },
      {
        title: "Back-Office Efficiency",
        copy: (
          <>
            Upfront commission settlement on NDC transactions
            sent to ARC for reporting and/or settlement purposes{" "}
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-12.png",
      },
    ],
  },
};

function App() {
  const swiperElRef = useRef(null);
  const [switcher, setSwitcher] = useState("airlines");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSwitch(type) {
    setSwitcher(type);
  }

  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: true,
      loop: true,
      slidesPerView: 1,
      speed: 500,
      cssMode: true,
      breakpoints: {
        766: {
          slidesPerView: 2,
        },
        959: {
          slidesPerView: 3,
        },
        1260: {
          slidesPerView: 4,
        },
      },
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
          .swiper-button-prev:after {
            content: '';
            background: url(https://www2.arccorp.com/globalassets/ndc/left.png);
            height: 13px;
            background-size: contain;
            background-repeat: no-repeat;
            width: 19px;
          }
          .swiper-button-next:after {
            content: '';
            background: url(https://www2.arccorp.com/globalassets/ndc/right.png);
            height: 13px;
            background-size: contain;
            background-repeat: no-repeat;
            width: 19px;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className="arc-dc-page" style={{ paddingBottom: "0" }}>
      <Stickynav
        title="Direct Connect"
        links={[
          { title: "Overview", url: "#overview" },
          { title: "Multimedia", url: "#media" },
          { title: "Partners", url: "#partners" },
          { title: "Resources", url: "#resources" },
          { title: "News", url: "#news" },
        ]}
        target="_blank"
        contactUs="Apply Now"
        rightLink="https://www2.arccorp.com/globalassets/ndc/direct-connect-program-application_v10.pdf"
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
        width="100%"
      />

      <ProductText
        className="bg-color-fog"
        eyebrow="Overview"
        id="overview"
        subTitleClass="asdf"
        subtitle="We pair ARC Direct Connect with NDC, alongside our custom-configured settlement platform, to create unmatched clarity and efficiency for any distribution strategy. Together, we enhance partnerships to deliver richer, personalized traveler experiences."
        title={
          <>
            Leverage NDC in Your <br />
            Distribution Strategy
          </>
        }
        titleClass="arc-dc-header"
        body={
          <>
            <div className="arc-dc-switcher">
              <div className="arc-dc-switcher-instruction">
                Choose your business type.
              </div>
              <div className="arc-dc-switcher-windows">
                <div className="row">
                  <div className="col-4 animated bounce">
                    <div
                      onMouseEnter={() => handleSwitch("airlines")}
                      onClick={() => handleSwitch("airlines")}
                      className="arc-dc-switcher-window"
                    >
                      {switcher == "airlines" ? (
                        <img
                          className=""
                          src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-airline.png"
                          alt=""
                        />
                      ) : (
                        <img
                          src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-closed.png"
                          alt=""
                        />
                      )}
                      <div
                        className={
                          "arc-dc-switcher-window-title " +
                          (switcher === "airlines" ? "active" : "")
                        }
                      >
                        Airlines
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      onMouseEnter={() => handleSwitch("agency")}
                      onClick={() => handleSwitch("agency")}
                      className="arc-dc-switcher-window"
                    >
                      {switcher == "agency" ? (
                        <img
                          src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-agency.png"
                          alt=""
                        />
                      ) : (
                        <img
                          src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-closed.png"
                          alt=""
                        />
                      )}
                      <div
                        className={
                          "arc-dc-switcher-window-title " +
                          (switcher === "agency" ? "active" : "")
                        }
                      >
                        Agencies
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      onMouseEnter={() => handleSwitch("corporate")}
                      onClick={() => handleSwitch("corporate")}
                      className="arc-dc-switcher-window"
                    >
                      {switcher == "corporate" ? (
                        <img
                          className="animate fadeIn"
                          src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-corporate.png"
                          alt=""
                        />
                      ) : (
                        <img
                          src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-closed.png"
                          alt=""
                        />
                      )}
                      <div
                        className={
                          "arc-dc-switcher-window-title " +
                          (switcher === "corporate" ? "active" : "")
                        }
                      >
                        Corporate Buyers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="arc-dc-switcher-content">
                <h2>
                  {switcher === "airlines" ? "Adapted for Airlines" : <></>}
                  {switcher === "agency" ? (
                    "Tailored for Travel Agencies"
                  ) : (
                    <></>
                  )}
                  {switcher === "corporate" ? (
                    "Customized for Corporate Buyers"
                  ) : (
                    <></>
                  )}
                </h2>
                <div className="row">
                  {switcherContent[switcher].data.map((content) => (
                    <div className="col-lg-6">
                      <div className="arc-dc-switcher-content-icon">
                        <img src={content.icon} />
                      </div>
                      <div className="arc-dc-switcher-content-title">
                        {content.title}
                      </div>
                      <div className="arc-dc-switcher-content-copy">
                        {content.copy}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="arc-dc-support">
              <h2>Let us support your NDC journey.</h2>
              <a
                href="https://www2.arccorp.com/globalassets/ndc/direct-connect-program-application_v10.pdf"
                className="ctaBtn"
                target="_blank"
              >
                Get Started
              </a>
            </div>
          </>
        }
      />

      <ProductText
        body={
          <>
            <div className="row" style={{ marginTop: "60px" }}>
              <div className="col-lg-6">
                <PodcastWidget />
              </div>
              <div className="col-lg-6">
                <div className="arc-dc-video" onClick={openModal}>
                  <img src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-video.png" />
                </div>
              </div>
            </div>
          </>
        }
        className="bg-color-fog"
        eyebrow="Multimedia"
        id="media"
        subTitleClass="asdf"
        subtitle="Explore ARC Direct Connect, omnichannel and NDC-related topics with top industry experts."
        title="Gain Deeper Insights"
        titleClass="arc-dc-header"
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div onClick={closeModal} className="modal-close text-right">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <div className="usa-embed-container mt-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/p-AwIJmxnuc?&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            autoplay="true"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>

      <div
        id="features"
        class="bg-img-container lazy"
        data-bg="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-trusted-bg.png?1"
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
                  ARC’s settlement features that support Direct Connect
                  implementations:
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
                        alt="Ability to identify direct connect transactions in IAR and on airline outputs"
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
              <swiper-container init="false" ref={swiperElRef}>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/airfrance.jpg"
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
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/american.jpg"
                      alt="American Airlines"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/austrian.jpg"
                      alt="Austrian"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/avianca.jpg"
                      alt="Avianca"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/britishairways.jpg"
                      alt="British Airways"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/brussels.jpg"
                      alt="Brussels"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/copa.jpg"
                      alt="copa"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/emirates.jpg"
                      alt="Emirates"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/etihad.jpg"
                      alt="Etihad"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/eva.jpg"
                      alt="eva"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/hawaiian.jpg"
                      alt="hawaiian"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/iberia.jpg"
                      alt="iberia"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/klm.jpg"
                      alt="KLM"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/latam.jpg"
                      alt="LATAM"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/lufthansa.jpg"
                      alt="Lufthansa"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/olympic.jpg"
                      alt="olympic"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/qantas.jpg"
                      alt="qantas"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/qatar.jpg"
                      alt="qatar"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/singapore.jpg"
                      alt="singapore"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/swiss.jpg"
                      alt="Swiss"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/united.jpg"
                      alt="United"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/westjet.jpg"
                      alt="WestJet"
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
