// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Write your code here!

document.getElementsByClassName("like").addEventListener("click", () => {
  fetch(mimicServerCall())
  .then(function (response) {
    return response.json
  })
  .catch(function (error) {
    const errorMessage = document.getElementById("modal");
    errorMessage.className = "";
    errorMessage.textContent = error
    setTimeout(() => errorMessage.className = "hidden", 3000)
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
