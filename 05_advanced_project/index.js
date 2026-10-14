// template_42vutgs
// service_9h7iln6
// f995vnwAD6i8m3mjD

function contact(event) {
  event.preventDefault();
 
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList.add('modal__overlay--visible');

  emailjs
  .sendForm(
    'service_9h7iln6', 
    'template_42vutgs', 
    event.target,
    'f995vnwAD6i8m3mjD',
  ).then(() => {
    // throw new Error("Form submission failed");
    loading.classList.remove('modal__overlay--visible');
    success.classList.add('modal__overlay--visible');
  }).catch((error) => {
    loading.classList.remove('modal__overlay--visible');
    alert("The email service is temporarily unavailable.");
  });
}