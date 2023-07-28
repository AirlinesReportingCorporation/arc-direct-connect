import React, { useCallback, useState } from "react";

export default function FormDrawer(props) {
  const [openForm, setOpenForm] = useState();

  const toggleForm = () => {
    if (openForm) {
      setOpenForm(false);
    } else {
      setOpenForm(true);
    }
    console.log(openForm);
  };

  return (
    <div class="form-drawer">
      <div class="form-drawer-toggle" onClick={() => toggleForm()}>
        <i
          class={
            "fas " + (openForm ? "fa-angle-double-down" : "fa-angle-double-up")
          }
        ></i>{" "}
        &nbsp; Did you find what you were looking for?
      </div>
      <div class={"form-drawer-content " + (openForm ? "show" : "hide")}>
        <div class="form-drawer-copy">
          <iframe
            src="https://survey.alchemer.com/s3/7453796/ARC-Direct-Connect-Feedback-Widget"
            frameborder="0"
            width="310"
            height="500"
            style={{ overflow: "hidden" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
