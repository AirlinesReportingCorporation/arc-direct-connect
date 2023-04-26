import React, { Component } from "react";
import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductCallout,
  ProductQuote,
  ProductLinks,
} from "arccorp-vars";

class App2 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="arc-dc-page">
        <ProductQuote
          author="Simon Brooks"
          title="Senior Vice President, Sales for North America"
          backgroundImage="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-quote.png"
          className=""
          company="British Airways"
          id=""
          quote="British Airways is excited to be the first test partner for ARC's enhanced settlement functionality, which enables us to evolve our distribution strategy with the travel agency channel. ARC has always been a trusted partner to British Airways, and we have valued their flexibility, responsiveness and collaboration during this testing process. These enhancements will aid us in developing our relationships with agencies, and they set the stage for our growing distribution stratetgy in the U.S."
        />
        <ProductLinks
          prodLink={[
            {
              alt: "Direct Connect Production Sheet",
              copy: "Download an overview sheet of Direct Connect.",
              cta: "Download",
              header: <>Direct Connect <br/>Product Sheet</>,
              icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/ndc-icon-1.png",
              link: "https://www2.arccorp.com/globalassets/datasheets/DirectConnectwithNDC.pdf",
            },
            {
              alt: "Access ARC's NDC Recordings",
              copy: "View videos that further explain the benefits of NDC.",
              header: <>Access ARC’s <br/>NDC Recordings</>,
              cta: "Watch ",
              icon: "https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-icon-2.png",
              link: "https://www.youtube.com/playlist?list=PLf5REmQDokOmWX9wwbsFMTUDAwP5ih8LU"
            },
            {
              alt: "Direct Connect Airline Capabilities Grid",
              copy: "ARC provides advice, education and tools to help recognize and reduce fraud and mitigate risk.",
              cta: "Learn More",
              header: "Direct Connect Airline Capabilities Grid",
              icon: "https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-icon-3.png",
              link: "https://www2.arccorp.com/direct-connect-ndc/#ndc-app",
            },
          ]}
        />
      </div>
    );
  }
}

export default App2;
