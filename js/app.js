// Menu Show Hide Button
//==========================
document.querySelector("#menuBtn").addEventListener("click", function(){
    document.querySelector(".navbar-nav").classList.toggle("d-none");   
    document.querySelector(".navbar-nav").classList.add("w-100");
})

//Wow js
//=====================

wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animate__animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
  )
wow.init();