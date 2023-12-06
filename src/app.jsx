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
import FormDrawer from "./FormDrawer";
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
            Distribute content to agencies using any aggregator or direct API,
            whether NDC or another proprietary technology{" "}
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-7.png",
      },
      {
        title: "Configurable",
        copy: (
          <>
            Set business rules related to the processing and settlement of NDC
            transactions{" "}
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
        title: "Payment Efficiencies",
        copy: (
          <>
            The option to report and settle with cash and credit forms of
            payment
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/pe.png",
      },
      {
        title: "Enhanced Commission Processing ",
        copy: (
          <>
            Upfront commission settlement on NDC transactions sent to ARC;
            back-end commissions paid via credit memos{" "}
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
            Flexible, secure solution to report and/or settle NDC transactions
            with airlines
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-9.png",
      },
      {
        title: "Enhanced Commission Processing ",
        copy: (
          <>
            Upfront commission settlement on NDC transactions sent to ARC;
            back-end commissions paid via credit memos
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-12.png",
      },
      {
        title: "View the Difference",
        copy: (
          <>
            Ability to differentiate between NDC and GDS transactions within IAR
            and other agency reports
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-8.png",
      },
      {
        title: "Extended Insights",
        copy: (
          <>
            60 months of viewership in DRS and IAR for all NDC transactions sent
            to ARC for reporting and settlement{" "}
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-11.png",
      },
      {
        title: "Dedicated Support",
        copy: (
          <>
            Access to the ARC Customer Care Center for NDC transaction inquiries{" "}
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
            Corporate Identifiers can be provided on direct connect transactions
            for use in market share calculations{" "}
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-10.png",
      },
      {
        title: "Mitigate Risk",
        copy: (
          <>
            Support duty of care by including NDC transactions in TMC reporting
          </>
        ),
        icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/switcher-5.png",
      },
      {
        title: "Enhanced Commission Processing",
        copy: (
          <>
            Upfront commission settlement on NDC transactions sent to ARC;
            back-end commissions paid via credit memos
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
  const [videourl, setVideourl] = useState("");

  function openModal(type) {
    if (type == "video1") {
      setVideourl("https://www.youtube.com/embed/sWvanO3kOCI");
    } else {
      setVideourl("https://www.youtube.com/embed/gkoAkfirGsM");
    }
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
      autoplay: true,
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
      <FormDrawer />
      <Stickynav
        title={
          <>
            <img
              src="https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-s-white.png"
              alt="ARC Logo"
            />{" "}
            <div style={{ width: "145px" }}>Direct Connect</div>
          </>
        }
        links={[
          { title: "Overview", url: "#overview" },
          { title: "Multimedia", url: "#media" },
          { title: "Partners", url: "#partners" },
          { title: "Resources", url: "#resources" },
        ]}
        target="_blank"
        contactUs="Learn More"
        rightLink="mailto:ndc@arccorp.com"
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
              We connect airlines with corporate buyers and travel agencies
            </span>
            , giving them the freedom to implement distribution strategies that
            best suit their needs.
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
                  <div className="col-4">
                    <div
                      onMouseEnter={() => handleSwitch("airlines")}
                      onClick={() => handleSwitch("airlines")}
                      className="arc-dc-switcher-window"
                    >
                      {switcher == "airlines" ? (
                        <div style={{ overflow: "hidden" }}>
                          <img
                            className="dc-window-open top"
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-border.png?1"
                            alt=""
                          />
                          <img
                            className="dc-window-open animated slideOutUp"
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-window.png"
                            alt=""
                          />
                          <img
                            className=""
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-airline.jpg"
                            alt=""
                          />
                        </div>
                      ) : (
                        <div style={{ overflow: "hidden" }}>
                          <img
                            className="dc-window-open top"
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-border.png?1"
                            alt=""
                          />
                          <img
                            className="dc-window-open animated slideInDown"
                            style={{ bottom: "52px" }}
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-window.png"
                            alt=""
                          />
                          <img
                            className=""
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-airline.jpg"
                            alt=""
                          />
                        </div>
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
                        <div>
                          <img
                            className="dc-window-open top"
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-border.png?1"
                            alt=""
                          />
                          <img
                            className="dc-window-open animated slideOutUp"
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-window.png"
                            alt=""
                          />
                          <img
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-agency.jpg"
                            alt=""
                          />
                        </div>
                      ) : (
                        <div style={{ overflow: "hidden" }}>
                          <img
                            className="dc-window-open top"
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-border.png?1"
                            alt=""
                          />
                          <img
                            className="dc-window-open animated slideInDown"
                            style={{ bottom: "52px" }}
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-window.png"
                            alt=""
                          />
                          <img
                            className=""
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-agency.jpg"
                            alt=""
                          />
                        </div>
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
                        <div>
                          <img
                            className="dc-window-open top"
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-border.png?1"
                            alt=""
                          />
                          <img
                            className="dc-window-open animated slideOutUp"
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-window.png"
                            alt=""
                          />
                          <img
                            className="dc-window-open top"
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-border.png?1"
                            alt=""
                          />
                          <img
                            className="animate fadeIn"
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-corporate.jpg"
                            alt=""
                          />
                        </div>
                      ) : (
                        <div style={{ overflow: "hidden" }}>
                          <img
                            className="dc-window-open top"
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-border.png?1"
                            alt=""
                          />
                          <img
                            className="dc-window-open animated slideInDown corporate-window-cover"
                            style={{ bottom: "52px" }}
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-window.png"
                            alt=""
                          />
                          <img
                            className=""
                            src="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-corporate.jpg"
                            alt=""
                          />
                        </div>
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
                href="mailto:ndc@arccorp.com"
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
                <div
                  className="arc-dc-video"
                  onClick={() => openModal("video1")}
                >
                  <img src="https://www2.arccorp.com/globalassets/homepage/redesign/webinar/webinar-083123.jpg" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="arc-dc-video" onClick={() => openModal("")}>
                  <img src="https://www2.arccorp.com/globalassets/homepage/redesign/webinar/webinar-060823.jpg" />
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
            src={videourl + "?&autoplay=1"}
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
                  ARC’s settlement solutions that support Direct Connect
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
          <div
            className="sub-callout-container-inner"
            style={{ maxWidth: "815px" }}
          >
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
                <div class="col-lg-8" style={{ margin: "auto" }}>
                  <div class="subcallout-card">
                    <div class="d-flex align-items-center">
                      <img
                        src="https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-settlement-5.png"
                        alt="Flexible messaging schema options (NDC or proprietary)"
                      />
                      <div class="subcallout-card-copy">
                        Access ARC’s Ticketing Authority API, giving you the
                        assurance of knowing you’re working with an
                        ARC-accredited agency
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="partners" className="arc-dc-airlines">
        <div className="container">
          <div className="col-lg-12">
            <h2>COMPANIES THAT PARTNER WITH ARC’S DIRECT CONNECT PROGRAM</h2>

            <div className="arc-dc-airline-logos">
              <swiper-container init="false" ref={swiperElRef}>
              <swiper-slide>
                  <div className="arc-dc-image">
                    <img
                      className="img-fluid"
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/airdolomiti.jpg"
                      alt="Air Dolomiti"
                      loading="lazy"
                    />
                  </div>
                </swiper-slide>
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
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/avianca.png"
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
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/finnair.png"
                      alt="Finnair"
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
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/lot_logo.png"
                      alt="LOT"
                      loading="lazy"
                      //style={{ paddingRight: "50px", paddingBottom: "18px;" }}
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
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/olympic.png"
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
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/SAS.jpg"
                      alt="Scandinavian Airlines"
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
                      src="https://www2.arccorp.com/globalassets/products--participation/ndc/united.png"
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
    </div>
  );
}

export default App;
