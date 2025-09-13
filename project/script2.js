
var form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var errorMsgs = document.querySelectorAll(".error-msg");
    for (var i = 0; i < errorMsgs.length; i++) {
      errorMsgs[i].innerText = "";
    }
    var isValid = true;

    var name = document.getElementById("name");
    if (name.value.trim().length < 3) {
      name.nextElementSibling.innerText = "The field is required.";
      isValid = false;
    }

    var email = document.getElementById("email");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.nextElementSibling.innerText = "The field is required.";
      isValid = false;
    }

    var subject = document.getElementById("subject");
    if (subject.value.trim() === "") {
      subject.nextElementSibling.innerText = "The field is required.";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully");
      form.reset();
    }
  });
}

// Scroll to Top Button
var scrollToTopBtn = document.getElementById("scroll-to-top-btn");
if (scrollToTopBtn) {
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };
  scrollToTopBtn.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
}
