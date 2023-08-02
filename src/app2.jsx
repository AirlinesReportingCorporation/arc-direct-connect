import React, { Component } from "react";
import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductCallout,
  ProductQuote,
  ProductLinks,
} from "arccorp-vars";

var quotes = [
  <ProductQuote
    author="Simon Brooks"
    title="Senior Vice President, Sales for North America"
    backgroundImage="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-quote.png"
    className="arc-dc-product-quote"
    company="British Airways"
    id="quote"
    quote="British Airways is excited to be the first test partner for ARC's enhanced settlement functionality, which enables us to evolve our distribution strategy with  the travel agency channel. ARC has always been a trusted partner to British Airways, and we have valued  their flexibility, responsiveness and collaboration  during this testing process. These enhancements  will aid us in developing our relationships with  agencies, and they set the stage for our growing  distribution stratetgy in the U.S."
  />,
  <ProductQuote
    author="Jenni Suomela"
    title="Vice President of Global Sales and Channel Management"
    backgroundImage="https://www2.arccorp.com/globalassets/products--participation/direct-connect/ndc-quote2.png"
    className="arc-dc-product-quote"
    company="Finnair"
    id="quote2"
    quote="We are happy to partner with ARC on this important milestone on our NDC journey. Adoption of NDC with ARC benefits our joint travel agency network and ultimately enhances customer experience and allows more choice for customers."
  />,
];

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      randomQuoteIndex: 0,
    };
  }

  componentDidMount() {
    this.setState({ randomQuoteIndex: Math.floor(Math.random() * quotes.length) });
  }

  randomQuote() {
    return quotes[this.state.randomQuoteIndex];
  }

  render() {
    var visibleQuote = this.randomQuote();

    console.log(this.state.randomQuoteIndex);
    return (
      <div className="arc-dc-page">
        {visibleQuote}

        <div id="resources">
          <ProductLinks
            colClass="col-lg-4"
            prodLink={[
              {
                alt: "Direct Connect Production Sheet",
                cta: "Download",
                header: (
                  <>
                    Direct Connect <br />
                    Product Sheet
                  </>
                ),
                icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/ndc-icon-1.png",
                link: "https://www2.arccorp.com/globalassets/datasheets/DirectConnectwithNDC.pdf",
                direction: "down",
              },
              {
                alt: "Access ARC's NDC Media Library",
                header: (
                  <>
                    Access ARC’s <br />
                    NDC Recordings
                  </>
                ),
                cta: "Start Exploring",
                icon: "https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-icon-2.png",
                link: "https://www.youtube.com/playlist?list=PLf5REmQDokOmWX9wwbsFMTUDAwP5ih8LU",
              },
              {
                alt: "FAQs",
                cta: "Learn More",
                header: (
                  <>
                    FAQs
                    <br />
                    <br />
                  </>
                ),
                icon: "https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-icon-3.png",
                link: "https://www2.arccorp.com/products-participation/distribution/arcdirectconnect/ndc-faqs/",
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App2;
