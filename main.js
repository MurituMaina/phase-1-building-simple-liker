// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
//getting the the empty heart
let liker = 
document.getElementsByClassName('like-glyph')
// console.log(liker)

//add the call of the function
// liker.addEventListener('click', liked);
for(let like of liker){
  like.addEventListener('click', liked)
}

function liked(e){
  let emptyHeart = e.target;
  mimicServerCall("https://lands.go.ke/")
//manipulate DOM after server request responds
    //display the error by removing the .hidden class
  .then( (res) => {
  alert(`${res}!!`)
    if(emptyHeart.textContent === EMPTY_HEART ){
      emptyHeart.className ="activated-heart";
      emptyHeart.textContent = FULL_HEART 
    }
    //change heart back to empty heart
    //remove the .activate-heart class

    else if (emptyHeart.textContent === FULL_HEART){
      emptyHeart.textContent = EMPTY_HEART;
      emptyHeart.className = "";
    }
  })
  //on serverfailure catch to handle the error
    //display the error by removing the .hidden class
  
  .catch((error) => {
    let getModal = document.getElementById('modal');
    getModal.className="";
    getModal.innerText = error;
  })

}
//make heart full 




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
