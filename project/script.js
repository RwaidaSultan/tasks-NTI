
document.querySelectorAll('.img-scale img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});


const circles = document.querySelectorAll('.discount-circle');

circles.forEach(circle => {
  circle.addEventListener('mouseenter', () => {
  });
});

const products = document.querySelectorAll('.product-card');
products.forEach(card => {
  card.addEventListener('click', () => {
    products.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

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


