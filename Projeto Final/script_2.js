const article = document.querySelector(".inactive.underlineHover");
const button = document.querySelector("#read-more");

article.addEventListener("click", readMore);

cadastro = document.querySelector()

function readMore() {
    if (article.className == "open") {
      // Ler menos
    article.className = "";
    button.innerHTML = "Show more"; // Mostrar mais
  } else {
    article.className = "open";
    button.innerHTML = "Show less"; // Mostrar menos
  }
}


function logIN() {

  document.querySelector("#formSignIn").style.display = "block"
  document.querySelector("#formSignUp").style.display = "none"
  
}

function logUP() {
    
  document.querySelector("#formSignUp").style.display = "block"
  document.querySelector("#formSignIn").style.display = "none"
}
function forgotPassword() {
    
  document.querySelector("#formFooter").style.display = "block"
  document.querySelector("#formFooter").style.display = "none"
  document.querySelector("#formFooter").style.display = "none"
}

//querySelector('input[name="login"]')

//#inactive .under
//[10:48]
//<div id="inactive>
//<div class="under"></div>
//</div>
//[10:49]
//.inactive .under
//[10:49]
//<div class="inactive>
//<div class="under"></div>
//</div>
//[10:49]
//.inactive.under
//[10:49]
//<div class="inactive under"></div>