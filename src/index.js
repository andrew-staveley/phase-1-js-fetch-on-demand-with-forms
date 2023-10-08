const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (submitHandler));
}
function submitHandler (event) {
    event.preventDefault();
    event.target.children[1].value;
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
    })
}
document.addEventListener('DOMContentLoaded', init);