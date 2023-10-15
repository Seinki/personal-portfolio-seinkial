function scrollToElement(elementSelector, instance = 0) {
  // Select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  // Check if there are elements matching the selector and if the request
  if (elements.length > instance) {
    // Scrool to sthe specified instance of the element
    elements[instance].scrollIntoView({ behavior: 'smooth'})
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
  scrollToElement('#home');
});
link2.addEventListener('click', () => {
  scrollToElement('#features');
});
link3.addEventListener('click', () => {
  scrollToElement('#pricing');
});