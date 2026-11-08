
"use strict";

const requestForm = document.getElementById("request-form");
const requestInput = document.getElementById("user-request");

requestForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const request = requestInput.value.trim();

    if (!request) {
        requestInput.focus();
        return;
    }

    const wantsMoreDetails = window.confirm(
        "Would you like to enter more information such as location, budget, brand, or other preferences?"
    );

    let additionalDetails = "";

    if (wantsMoreDetails) {
        additionalDetails = window.prompt(
            "Enter any additional information. You can leave this blank."
        ) || "";
    }

    const rightOnRequest = {
        request: request,
        additionalDetails: additionalDetails.trim(),
        submittedAt: new Date().toISOString()
    };

    console.log("RightOn request:", rightOnRequest);

    alert(
        "Your request has been captured. RightOn's research service is not connected yet."
    );
});
