import React, { useEffect, useState } from "react";

import Card from "../components/Card";

let types = ["Sales", "Voids", "Refunds", "Exchanges"];
//   Sales File Type
let sfType = ["SPRF", "RET"];
//   IAR Error Management
let error = ["Corrected by Agent", "Return to Airline"];
//   IAR Modifications
let modifications = ["All", "None", "Commission Only"];
//   Payment via ARC array
let payments = ["Cash", "Credit"];

function Airline({ airline }) {
  const [isOpen, setIsOpen] = useState(false);
  const [airName, setAirName] = useState("");

  let arcPayment = airline[0]["Payment via ARC"].split(", ");
  let transaction = airline[0]["Airline Transaction Types"].split(", ");
  let airURL = airline[0]["URL"];

  useEffect(() => {
    let airName = airline[0]["Airline Name"];
    let airName2 = "";

    let airURL = airline[0]["URL"];

    if (airName.indexOf(" via ") > -1) {
      airName = airline[0]["Airline Name"].split(" via ")[0];
      airName2 = airline[0]["Airline Name"].split(" via ")[1];
    }

    setAirName(airName);
  }, []);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        className="hiddenanchor"
        id={airName.trim().replace(/ /g, "_").toLowerCase()}
      ></div>
      <div
        class="accordion container"
        href={
          isOpen
            ? "#" +
              airline[0]["Airline Name"].replace(/ /g, "_") +
              "open?utm_source=ndc_airline"
            : "#" +
              airline[0]["Airline Name"].replace(/ /g, "_") +
              "closed?utm_source=ndc_airline"
        }
        onClick={toggle}
      >
        <div
          class={
            isOpen
              ? "active airline-accordion product-accordion-row"
              : "airline-accordion product-accordion-row"
          }
        >
          <div class="product-accordion-top">
            <div class="product-accordion-start">
              <div
                class="row align-items-center no-gutters"
                //center
                //style="margin-left: -1.125rem; margin-right: -1.125rem;"
              >
                <div class="col-11">
                  <div class="d-flex flex-column flex-lg-row align-items-center">
                    <div class="d-flex align-items-center">
                      <div class="air-designator">{airline[0].Designator}</div>
                      <div class="air-code">
                        {airline[0]["Numeric Code"].toString().length == 2
                          ? "0" + airline[0]["Numeric Code"]
                          : airline[0]["Numeric Code"].toString().length == 1
                          ? "00" + airline[0]["Numeric Code"]
                          : airline[0]["Numeric Code"]}
                      </div>
                    </div>
                    <div class="air-name">{airName}</div>
                    <div class="ml-auto d-flex align-items-center">
                      <a
                        href={airURL}
                        target="_blank"
                        class="apProfile d-flex align-items-center"
                      >
                        Airline Website&nbsp;
                        <i class="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-1">
                  <div
                    class={isOpen ? "active open apExpand" : "closed apExpand"}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? (
                      <div class=" ap-close" />
                    ) : (
                      <div class=" ap-open" />
                    )}
                  </div>
                </div>
              </div>

              {isOpen
                ? airline.map((a) => {
                    return (
                      <div>
                        {a["Airline Name"].indexOf("Accelya") > -1 ? (
                          <div class="via-container">
                            <div class="via-tag accelya">via Accelya</div>
                          </div>
                        ) : (
                          <div class="via-container">
                            <div class="via-tag">via Airline Direct</div>
                          </div>
                        )}
                        <div
                          class="row no-gutters"
                          style={{
                            "padding-top": "35px",
                            "margin-left": "-20px",
                          }}
                        >
                          <Card
                            col={"3"}
                            tooltip="Four-digit code identifying the airline reservation system that
              generated the transaction. For ARC’s Direct Connect transactions,
              this is usually the carrier code + the check digit."
                            bottomClass="apProcessing m-auto card-sasi"
                            title="System Provider (SASI)"
                            buttons={[
                              {
                                item:
                                  a["System Provider"].toString().length < 4
                                    ? "0" + a["System Provider"].toString()
                                    : a["System Provider"],
                              },
                            ]}
                            bottomStyle={{
                              maxWidth: "80px",
                              width: "auto",
                              marginTop: "14px !important",
                            }}
                          />

                          <Card
                            col={"3"}
                            tooltip="SPRF is the standard ARC file format; RET is the standard IATA file format."
                            bottomClass="d-flex justify-content-center"
                            title="Sales File Type"
                            buttons={[
                              {
                                item: sfType[0],
                                itemClass:
                                  sfType[0] == a["Sales File Type"]
                                    ? "on apButton"
                                    : "apButton",
                              },
                              {
                                item: sfType[1],
                                itemClass:
                                  sfType[1] == a["Sales File Type"]
                                    ? "on apButton"
                                    : "apButton",
                              },
                            ]}
                            bottomStyle=""
                          />

                          <Card
                            col={"6"}
                            tooltip="How the airline chooses to manage transactions that trigger an IAR business edit."
                            bottomClass="d-flex justify-content-center"
                            title="IAR Error Management"
                            buttons={[
                              {
                                item: error[0],
                                itemClass:
                                  error[0].indexOf(a["IAR Error Management"]) >
                                  -1
                                    ? "on apButton"
                                    : "apButton",
                              },
                              {
                                item: error[1],
                                itemClass:
                                  error[1] === a["IAR Error Management"]
                                    ? "on apButton"
                                    : "apButton",
                              },
                            ]}
                            bottomStyle=""
                          />
                        </div>

                        <div
                          class="row no-gutters"
                          style={{
                            "padding-top": "35px",
                            "margin-left": "-20px",
                          }}
                        >
                          <Card
                            col={"6"}
                            tooltip="The transaction types an airline chooses to transmit to ARC’s Direct Connect Program."
                            bottomClass="d-flex justify-content-center"
                            title="Transaction Types via ARC"
                            buttons={[
                              {
                                item: types[0],
                                itemClass: transaction.includes(types[0])
                                  ? "on apButton"
                                  : "apButton",
                              },
                              {
                                item: types[1],
                                itemClass: transaction.includes(types[1])
                                  ? "on apButton"
                                  : "apButton",
                              },
                              {
                                item: types[2],
                                itemClass: transaction.includes(types[2])
                                  ? "on apButton"
                                  : "apButton",
                              },
                              {
                                item: types[3],
                                itemClass: transaction.includes(types[3])
                                  ? "on apButton"
                                  : "apButton",
                              },
                            ]}
                            bottomStyle=""
                          />
                          <Card
                            col={"6"}
                            tooltip="The airline’s choice of which standard IAR fields remain open for agency modification (not just those in error). The standard modification fields are Commission, Waiver Code, Tour Code, Certificate, and Ticket Designator."
                            bottomClass="d-flex justify-content-center"
                            title="IAR Modifications"
                            buttons={[
                              {
                                item: modifications[0],
                                itemClass:
                                  modifications[0] == a["IAR Modifications"]
                                    ? "on apButton"
                                    : "apButton",
                              },
                              {
                                item: modifications[1],
                                itemClass:
                                  modifications[1] == a["IAR Modifications"]
                                    ? "on apButton"
                                    : "apButton",
                              },
                              {
                                item: modifications[2],
                                itemClass:
                                  modifications[2] == a["IAR Modifications"]
                                    ? "on apButton"
                                    : "apButton",
                              },
                            ]}
                            bottomStyle=""
                          />
                        </div>

                        <div
                          class="row no-gutters"
                          style={{
                            "padding-top": "35px",
                            "margin-left": "-20px",
                          }}
                        >
                          <Card
                            col={"3"}
                            tooltip="Forms of payment transmitted to ARC by the
              carrier for reporting through ARC’s Direct
              Connect Program."
                            bottomClass="d-flex justify-content-center"
                            title="Payment via ARC"
                            buttons={[
                              {
                                item: payments[0],
                                itemClass: payments.includes(arcPayment[0])
                                  ? "ongreen apButton"
                                  : "apButton",
                              },
                              {
                                item: payments[1],
                                itemClass: payments.includes(arcPayment[1])
                                  ? "ongreen apButton"
                                  : "apButton",
                              },
                            ]}
                            bottomStyle=""
                          />

                          <Card
                            col={"3"}
                            tooltip="Indicates whether ARC will validate numerous data elements from the original sale."
                            bottomClass="d-flex justify-content-center"
                            title="Exch & Rfnd Verification"
                            buttons={[
                              {
                                item: "Yes",
                                itemClass:
                                  "Yes" == a["Exchange & Refund Verification"]
                                    ? "ongreen apButton"
                                    : "apButton",
                              },
                              {
                                item: "No",
                                itemClass:
                                  "No" == a["Exchange & Refund Verification"]
                                    ? "onred apButton"
                                    : "apButton",
                              },
                            ]}
                            bottomStyle=""
                          />

                          <Card
                            col={"6"}
                            tooltip="Which Direct Connect Program transactions the airline allows an agency to add in IAR."
                            bottomClass="d-flex justify-content-center"
                            title="IAR Manual Entries"
                            buttons={[
                              {
                                item: "All",
                                itemClass:
                                  "All" == a["IAR Manual Entries"]
                                    ? "on apButton"
                                    : "apButton",
                              },
                              {
                                item: "None",
                                itemClass:
                                  "None" == a["IAR Manual Entries"]
                                    ? "on apButton"
                                    : "apButton",
                              },
                              {
                                item: "Void",
                                itemClass:
                                  "Void" == a["IAR Manual Entries"]
                                    ? "on apButton"
                                    : "apButton",
                              },
                            ]}
                            bottomStyle=""
                          />
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airline;
