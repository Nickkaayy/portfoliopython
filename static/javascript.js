

var n = 1;

function contact() {
    

    if(n==1){
      if(document.title == "Home"){
        document.getElementById("p1tprect").style.height = "50vh";
        document.getElementById("p1contacts").style.backgroundColor= "#eafc40";
        document.getElementById("p1contacts").style.color = "#2b2b3a";
      }else if(document.title == "Projects"){
        document.getElementById("p2tprect").style.height = "50vh";
        document.getElementById("p2contacts").style.backgroundColor= "#eafc40";
        document.getElementById("p2contacts").style.color = "#2b2b3a";
      }else if(document.title == "Gallery"){
        document.getElementById("p3tprect").style.height = "50vh";
        document.getElementById("p3contacts").style.backgroundColor= "#eafc40";
        document.getElementById("p3contacts").style.color = "#2b2b3a";
      }else if(document.title == "Education"){
        document.getElementById("p4tprect").style.height = "50vh";
        document.getElementById("p4contacts").style.backgroundColor= "#eafc40";
        document.getElementById("p4contacts").style.color = "#2b2b3a";
      }

      var x = document.getElementsByClassName("logo");
      for(var i = 0; i < x.length; i++){
        x[i].style.paddingLeft = "20vh";
      }
      

      n = 0;
      
  }
  else if(n==0){
      if(document.title == "Home"){
        document.getElementById("p1tprect").style.height = null;
        document.getElementById("p1contacts").style.backgroundColor= null;
        document.getElementById("p1contacts").style.color = null;
      }else if(document.title == "Projects"){
        document.getElementById("p2tprect").style.height = null;
        document.getElementById("p2contacts").style.backgroundColor= null;
        document.getElementById("p2contacts").style.color = null;
      }else if(document.title == "Gallery"){
        document.getElementById("p3tprect").style.height = null;
        document.getElementById("p3contacts").style.backgroundColor= null;
        document.getElementById("p3contacts").style.color = null;
      }else if(document.title == "Education"){
        document.getElementById("p4tprect").style.height = null;
        document.getElementById("p4contacts").style.backgroundColor= null;
        document.getElementById("p4contacts").style.color = null;
      }

      
      var x = document.getElementsByClassName("logo");
      for(var i = 0; i < x.length; i++){
        x[i].style.paddingLeft = null;
      }

      n = 1;
      
  }
  
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

//var scrollY = 2000;
function scrollOptions() {
  //var elmnt = document.getElementById("p3scrollto4");
  //elmnt.scrollIntoView();
  //document.getElementById("p3options").scrollTo(0, scrollY);

  //document.getElementById("p3options").scrollTo({ top: 0, behavior: 'smooth' });
}

function showDivs(n) {
  var i;
  
  var x = document.getElementsByClassName("mySlides");

 if (n > x.length) {
  	slideIndex = 1;
  } 
  if (n < 1) {
    slideIndex = x.length;
  }

  document.getElementById("p2pageno").innerHTML = slideIndex;
  document.getElementById("p2pagetotal").innerHTML = x.length;

  if (slideIndex==1){
    

    
    document.getElementById("p2pageno").style.color = "#F4F5F6";
    document.getElementById("p2slash").style.borderColor = "#F4F5F6";
    document.getElementById("p2pagetotal").style.color = "#F4F5F6";
    document.getElementById("p2title").style.color = "#F4F5F6";
    document.getElementById("p2para").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").innerHTML = "Vincitore Mural.";
    document.getElementById("p2para").innerHTML = "vincitore";
    document.getElementById("p2para").innerHTML += "<br><br>Want to know more about my Vincitore Mural? Go to &#8220;Vincitore&#8221; at the Gallery! <br>";
    document.getElementById("p2top3").style.visibility = "visible";
    document.getElementById("p2top3").style.opacity = "1";
  }
  if (slideIndex == 2){ 
    document.getElementById("p2pageno").style.color = "#2b2b3a";
    document.getElementById("p2slash").style.borderColor = "#2b2b3a";
    document.getElementById("p2pagetotal").style.color = "#2b2b3a";
    document.getElementById("p2title").style.color = "#2b2b3a";
    document.getElementById("p2para").style.color = "#2b2b3a";
    document.getElementById("p2paratitle").style.color = "#2b2b3a";
    document.getElementById("p2paratitle").innerHTML = "Book front cover design";
    document.getElementById("p2para").innerHTML = "My maternal roots";
    document.getElementById("p2para").innerHTML += "<br>";
    document.getElementById("p2top3").style.opacity = "0";
    document.getElementById("p2top3").style.visibility = "hidden";
  }
  if (slideIndex==3){
    document.getElementById("p2pageno").style.color = "#F4F5F6";
    document.getElementById("p2slash").style.borderColor = "#F4F5F6";
    document.getElementById("p2pagetotal").style.color = "#F4F5F6";
    document.getElementById("p2title").style.color = "#F4F5F6";
    document.getElementById("p2para").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").innerHTML = "Solar System Simulator.";
    document.getElementById("p2para").innerHTML = "solar system"+" <br />"+" <br />"+"consectetur adipiscing elit.Vestibulum condimentum lobortis lectus, vitae molestie elit facilisis vitae. "+" <br />"+"Proin viverra urna ut lorem ullamcorper efficitur sit amet sit amet nibh. "+" <br />"+" <br />"+" <br />"+""+" <br />"+"Sed et erat ac ante porttitor sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum condimentum lobortis lectus, vitae molestie elit facilisis vitae. Proin viverra urna ut lorem ullamcorper efficitur sit amet sit amet nibh. Sed et erat ac ante porttitor sodales.";
    document.getElementById("p2para").innerHTML += "<br>";
  }
  if (slideIndex==4){
    document.getElementById("p2pageno").style.color = "#F4F5F6";
    document.getElementById("p2slash").style.borderColor = "#F4F5F6";
    document.getElementById("p2pagetotal").style.color = "#F4F5F6";
    document.getElementById("p2title").style.color = "#F4F5F6";
    document.getElementById("p2para").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").innerHTML = "Robot Arm Study.";
    document.getElementById("p2para").innerHTML = "robot arm";
  document.getElementById("p2para").innerHTML += "<br>";
  }
  if (slideIndex==5){
    document.getElementById("p2pageno").style.color = "#F4F5F6";
    document.getElementById("p2slash").style.borderColor = "#F4F5F6";
    document.getElementById("p2pagetotal").style.color = "#F4F5F6";
    document.getElementById("p2title").style.color = "#F4F5F6";
    document.getElementById("p2para").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").innerHTML = "Kin Mun Clinic Designing.";
    document.getElementById("p2para").innerHTML = "kmc";
  document.getElementById("p2para").innerHTML += "<br>";
  }

  if (slideIndex==6){ //SHIRTS
    document.getElementById("p2pageno").style.color = "#F4F5F6";
    document.getElementById("p2slash").style.borderColor = "#F4F5F6";
    document.getElementById("p2pagetotal").style.color = "#F4F5F6";
    document.getElementById("p2title").style.color = "#F4F5F6";
    document.getElementById("p2para").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").innerHTML = "Animation Studies";
    document.getElementById("p2para").innerHTML = "animations";
  document.getElementById("p2para").innerHTML += "<br>";
  }
  
  if (slideIndex==7){ 
    document.getElementById("p2pageno").style.color = "#F4F5F6";
    document.getElementById("p2slash").style.borderColor = "#F4F5F6";
    document.getElementById("p2pagetotal").style.color = "#F4F5F6";
    document.getElementById("p2title").style.color = "#F4F5F6";
    document.getElementById("p2para").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").innerHTML = "Graphic Shirt Designs";
    document.getElementById("p2para").innerHTML = "Designs";
  document.getElementById("p2para").innerHTML += "<br>";
  }
  if (slideIndex==8){ 
    document.getElementById("p2pageno").style.color = "#2b2b3a";
    document.getElementById("p2slash").style.borderColor = "#2b2b3a";
    document.getElementById("p2pagetotal").style.color = "#2b2b3a";
    document.getElementById("p2title").style.color = "#2b2b3a";
    document.getElementById("p2para").style.color = "#2b2b3a";
    document.getElementById("p2paratitle").style.color = "#2b2b3a";
    document.getElementById("p2paratitle").innerHTML = "Drawing studies";
    document.getElementById("p2para").innerHTML = "Designs";
  document.getElementById("p2para").innerHTML += "<br>";
  }
  if (slideIndex==9){ 
    document.getElementById("p2pageno").style.color = "#F4F5F6";
    document.getElementById("p2slash").style.borderColor = "#F4F5F6";
    document.getElementById("p2pagetotal").style.color = "#F4F5F6";
    document.getElementById("p2title").style.color = "#F4F5F6";
    document.getElementById("p2para").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").style.color = "#F4F5F6";
    document.getElementById("p2paratitle").innerHTML = "Music";
    document.getElementById("p2para").innerHTML = "Piano, flute, saxophone, small instuments.";
  document.getElementById("p2para").innerHTML += "<br>";
  }

  

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }


  x[slideIndex-1].style.display = "block";



}

function changeImage(num, a) {
  document.getElementById("disp").src=a;
  document.getElementById("p3title").innerHTML = num;
  if (num == 3){
    document.getElementById("p3title").innerHTML = "NUMBER 3!!";
  }
  if (num == 6){
    document.getElementById("p3title").innerHTML = "Product Design";
  }
}