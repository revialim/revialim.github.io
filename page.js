function markActiveLink(){
  var url = window.location.href;
  var urlArr = url.split("/");
  console.log(urlArr);
  var links = document.getElementById("main-menu").getElementsByTagName("a");
  var currentPage = urlArr[urlArr.length -1];
  console.log(links);
  for(var i = 0; i < links.length; i++){
    if(links[i].href.split("/")[links[i].href.split("/").length - 1] === currentPage){
      links[i].className = "current";
    }
  }
}

(function() {
  markActiveLink();
})();