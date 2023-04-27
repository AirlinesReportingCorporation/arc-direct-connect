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
          author="Tye Radcliffe"
          title="SVP of Product Strategy, Order Group"
          backgroundImage="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-quote.png"
          className=""
          company="Accelya"
          id="quote"
          quote="ARC has partnered closely with United on several of our omnichannel retailing initiatives, including NDC. This implementation provides us with a strong foundation for managing NDC transactions with travel agencies and travel management companies. By leveraging NDC, United is equipped to distribute richer content to travelers through our travel agency partners, with more flexible payment and settlement options."
        />
        <div id="resources">
          <ProductLinks
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
