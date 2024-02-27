import React from "react";

function Card({ col, title, tooltip, bottomClass, bottomStyle, buttons }) {
  return (
    <div class={"col-lg-" + col}>
      <div class="apSection apSectionMarginLeft product-accordion-pb">
        <div class="apSectionTop">
          <div class="d-flex align-items-center">
            <h3 style={{ "margin-right": "15px" }}>{title}</h3>
            <div class="ml-auto">
              <div class="airlineTooltip">
                <img
                  src="https://www2.arccorp.com/globalassets/about-us/our-data/redesign/tooltip.png"
                  alt="Help"
                />
                <div class="airlineTooltipText">{tooltip}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="apSectionBottom">
          <div class={bottomClass}>
            {buttons.map((button) => {
              return <div class={button.itemClass}>{button.item}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
