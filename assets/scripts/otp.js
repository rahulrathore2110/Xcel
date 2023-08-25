document.querySelector("#otp-verfiy").addEventListener("click", verifyotp);

let phone = document.querySelector("#phone").value;
let name = document.querySelector("#name").value;
let email = document.querySelector("#email").value;
let service = document.querySelector("#service-drop").value;
let msg = document.querySelector("#message").value;

let otpnum = Math.floor(100000 + Math.random() * 900000);

let otpform = document.querySelector(".otp-popup");

let getotpbtn = document.getElementById("verify");

let submitbtn = document.querySelector("form");

getotpbtn.addEventListener("click", showotpform);

submitbtn.addEventListener("submit", submitdata);

function submitdata(name, phone, email, msg, service) {
  event.preventDefault();

  if (getotpbtn.innerText != "GET OTP") {
    postdataapi(name, phone, email, msg, service);
    window.location.href="./thankyou.html"
  } else {
    alert("plz verify otp first");
  }
}

function showotpform(e) {
  e.preventDefault();

  let phone = document.querySelector("#phone").value;
  if (phone.length >= 10) {
    otpform.style.visibility = "visible";

    if (getotpbtn.innerText == "GET OTP") {
      otpapi(otpnum, phone);
    } else {
      alert("Already verfied");
    }
  } else {
    alert("plz enter correct number");
  }
}

function verifyotp() {
  let otpverfication = document.querySelector("#optnum").value;

  if (otpverfication == otpnum) {
    otpform.style.visibility = "hidden";

    getotpbtn.innerHTML = '<i class="fa-solid fa-check"></i>';

    document.querySelector("#submit").removeAttribute("disabled");
  } else {
    alert("Enter Correct Otp");
  }
}

function otpapi(otpnum, phone) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    crossDomain: true,
    headers: {
      Accept: "*/*",
    },
  };

  fetch(
    `https://sms.xcelmarketing.in/api/SmsApi/SendSingleApi?UserID=XCEL&Password=Om@nlum5749NL&SenderID=XCLSMS&Phno=${phone}&Msg=Thank you for showing your interest in Xcel Marketing. your mobile verification OTP is ${otpnum}. Do not share OTP with anyone.
&EntityID=1701159834356736157&TemplateID=1707168965160700422`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

function postdataapi(n, p, e, m, s) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    crossDomain: true,
    headers: {
      Accept: "*/*",
    },
  };

  fetch(
    `https://lms.xcelmarketing.in/API/SaveLeads?Name=${n}&Email=${e}&Phno=${p}&SourceId=2&CategoryId=4&CityID=1&Remarks=${m}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
