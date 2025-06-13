let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');

  let currentIndex = 0;
  const slidesPerView = 3;
  const totalGroups = Math.ceil(slides.length / slidesPerView);

  const moveToSlide = (index) => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * slidesPerView * index}px)`;
  };

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalGroups;
    moveToSlide(currentIndex);
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalGroups) % totalGroups;
    moveToSlide(currentIndex);
  });
});

<script>
document.querySelectorAll('.tab-link').forEach(btn={
  btn.addEventListener('click',()=>{
    // switch active button
    document.querySelectorAll('.tab-link').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    // switch active content
    document.querySelectorAll('.tab-content').forEach(tc=>tc.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  })
}
</script>
