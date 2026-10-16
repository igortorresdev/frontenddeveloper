function contact(event) {
  event.preventDefault();
 
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  const submitButton = event.target.querySelector(".form__submit");

  // 1. Prevent duplicate submissions
  if (submitButton.disabled) return;
  submitButton.disabled = true;
  
  // 2. Show loading overlay  
  loading.classList.add('modal__overlay--visible');

  emailjs
  .sendForm(
    'service_9h7iln6', 
    'template_6prjiwt', 
    event.target,
    'f995vnwAD6i8m3mjD',
  ).then(() => {
    // throw new Error("Form submission failed");
    loading.classList.remove('modal__overlay--visible');
    success.classList.add('modal__overlay--visible');
  }).catch((error) => {
    loading.classList.remove('modal__overlay--visible');

    console.error("EmailJS error:", error);
    console.error("Status:", error.status);
    console.error("Message:", error.text);

    alert("The email service is temporarily unavailable.");
  }).finally(() => {
      // 3. Enable the button when the request finishes
      submitButton.disabled = false;
  });
}

let isModalOpen = false;
function toggleModal() {
  if (!isModalOpen) {
    document.body.classList += " modal--open";
    isModalOpen = true;
  }
  else {
    document.body.classList.remove("modal--open");
    isModalOpen = false;
  }
}

function closeModal() {
  const success = document.querySelector('.modal__overlay--success');
  success.classList.remove('modal__overlay--visible');
}

let contrastToggle = false;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-mode";
  } else {
    document.body.classList.remove("dark-mode");
  }
}