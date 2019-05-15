function markActiveLink(){
  var url = window.location.href;
  var urlArr = url.split("/");
  console.log(urlArr);
  var links = document.getElementById("main-menu").getElementsByTagName("a");
  var currentPage = urlArr[urlArr.length -1];
  console.log(links);
  for(var i = 0; i < links.length; i++){
    console.log("links[i] length -1 part: "+links[i].href.split("/")[links[i].href.split("/").length - 1] );
    if(links[i].href.split("/")[links[i].href.split("/").length - 1] === currentPage){
      links[i].className = "current";
    }
  }
  
  if(urlArr[urlArr.length - 1] === ""){
    links[0].className = "current";
  }
}

//===== SLIDER =====//
var activeSlideIndex = 0;

function switchSlide(goToSlide){
  activeSlideIndex = getActiveSlideIndex(goToSlide);
  
  // displaySlideshowSlide(activeSlideIndex);
}

function getActiveSlideIndex(changeByValue){
  if(changeByValue === -1){
    changeByValue = 2;
  }
  return (activeSlideIndex + changeByValue)%3; //+1 if next, -1 if prev
}

function displaySlideshowSlide(slideIndex){
  //var slider = document.getElementsByClassName("slideshow");
  var slides = document.getElementsByClassName("slide");
  
  for(var i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  document.getElementsByClassName("slide-"+activeSlideIndex)[0].style.display = "block";
  
  //activeSlideIndex = getActiveSlideIndex(1);
  //setTimeout(displaySlideshowSlide, 4000);
}


(function() {
  markActiveLink();
  displaySlideshowSlide(activeSlideIndex);
})();