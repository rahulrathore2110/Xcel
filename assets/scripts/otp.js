document.querySelector("#otp-verfiy").addEventListener("click", verifyotp);

let otpnum = Math.floor(100000 + Math.random() * 900000);

let otpform = document.querySelector(".otp-popup");

let getotpbtn = document.getElementById("verify");

getotpbtn.addEventListener("click", showotpform);

function showotpform(e) {
  e.preventDefault();

  let phone = document.querySelector("#phone").value;
  if (phone.length >= 10) {
    otpform.style.visibility = "visible";

    if (getotpbtn.innerText == "GET OTP") {
      otpapi(otpnum, phone);
    } else {
      alert("Already verfied")
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
  } else {
    alert("Enter Correct Otp");
  }
}

function otpapi(otpnum, phone) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    crossDomain: true,
    headers: { Accept: "application/json" },
  };

  fetch(
    `http://sms.xcelmarketing.in/api/SmsApi/SendSingleAdvance?UserID=XCEL&Password=Om@nlum5749NL&SenderID=FABMTC&Phno=${phone}&Msg=Thank you for showing your interest in FABMEDIATECH . your mobile verification OTP is ${otpnum}. Do not share OTP with anyone.&TemplateID=219931`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
