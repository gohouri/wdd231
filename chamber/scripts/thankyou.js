const displayApp = document.querySelector("#displayApp");
const getFormInfo = window.location.href.split("?"); // get the query string

let formData = getFormInfo[1].split("&");

// Replace certain aspects in the form data
function getFormResult(key) {
  let value = "";

  // Loop through the formData array to find the value for the given key
  // and replace certain characters in the value
  formData.forEach((item) => {
    if (item.startsWith(key)) {
      value = item.split("=")[1].replace("%40", "@");
      value = value.replace("%2B234", "0");
      value = value.split("+").join(" ");
    }
  });

  return value;
}

// Function to build the form result display
// This function retrieves the timestamp from the URL parameters and formats it
function buildFormResult() {
  const urlParams = new URLSearchParams(window.location.search);
  const timeStamp = urlParams.get("timestamp");

  let params = new Date(timeStamp).toLocaleString();

  displayApp.innerHTML = `
    <h1>Welcome to Ivory Coast Chamber of Commerce</h1>
    <span><p>We appreciate your application!</p></span>
    
    <div class="infoContainer">
    
      <div class="sec1">
          <p>First Name:</p>
          <p>Last Name:</p>
          <p>Organization Title:</p>
          <p>Email Address:</p>
          <p>Phone Number:</p>
          <p>Organizational Name:</p>
          <p>Submission Date:</p>
      </div>

      <div class="sec2">
          <p>${getFormResult("First")}</p>
          <p>${getFormResult("Last")}</p>
          <p>${getFormResult("orgTitle")}</p>
          <p>${getFormResult("email")}</p>
          <p>${getFormResult("number")}</p>
          <p>${getFormResult("OrgName")}</p>
          <p>${params}</p>
      </div>
      
    </div>
`;
}

buildFormResult();