javascript:(function(){

  var url = window.location.href;
  var videoId = url.match(/[?&]v=([^&]+)/)[1];
  var newUrl = "https://www.youtube.com/embed/" + videoId;
  
  var ct = document.getElementById("ytd-player");
  var ct_values = ct.children[0].children[0].children[0].children[0].getBoundingClientRect();
  
  var ne = document.createElement("iframe");
  ne.style.width = ct_values.width+"px";
  ne.style.height = ct_values.height+"px";
  ne.src = newUrl;
  
  ct.innerHTML = "";
  ct.append(ne);

})();
