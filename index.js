

function add(){

    if(event.keyCode != 13 && document.cookie.split(';').map(cok => cok.split('=')[1]).includes('zero')){
         document.getElementById("old-1").innerHTML = event.target.value;
         }

    else if(event.keyCode != 13 && document.cookie.split(';').map(cok => cok.split('=')[1]).includes('one')){
        document.getElementById("old-2").innerHTML = event.target.value;}

    else if(event.keyCode != 13 && document.cookie.split(';').map(cok => cok.split('=')[1]).includes('two')){
        document.getElementById("old-3").innerHTML = event.target.value;}

    else if(event.keyCode != 13 && document.cookie.split(';').map(cok => cok.split('=')[1]).includes('three')){
         document.getElementById("old-4").innerHTML = event.target.value;}

    else if(event.keyCode != 13 && document.cookie.split(';').map(cok => cok.split('=')[1]).includes('four')){
       document.getElementById("old-5").innerHTML = event.target.value;}

    else if(event.keyCode != 13 && document.cookie.split(';').map(cok => cok.split('=')[1]).includes('five')){
            document.getElementById("old-6").innerHTML = event.target.value;}

    else {

        if(document.cookie.split(';').map(cok => cok.split('=')[1]).includes('zero'))
            {document.cookie = "counter=one";}

        else if(document.cookie.split(';').map(cok => cok.split('=')[1]).includes('one'))
            {document.cookie = "counter=two";}

        else if(document.cookie.split(';').map(cok => cok.split('=')[1]).includes('two'))
            {document.cookie = "counter=three";}

        else if(document.cookie.split(';').map(cok => cok.split('=')[1]).includes('three'))
            {document.cookie = "counter=four";}

        else if(document.cookie.split(';').map(cok => cok.split('=')[1]).includes('four'))
            {document.cookie = "counter=five";}

        else if(document.cookie.split(';').map(cok => cok.split('=')[1]).includes('five'))
            {document.cookie = "counter=zero";}
        else{document.cookie = "counter=zero"}}}




if(document.cookie.split(';').map(cok => cok.split('=')[1]).includes("moon")){
    document.getElementById("sun").click();}

if(document.cookie.split(';').map(cok => cok.split('=')[1]).includes("sun")){
    document.getElementById("moon").click();}

function changeTheme(){
    var id = event.target.id;

    if(id == "sun"){
         document.cookie = "theme=moon";
        document.getElementById("moon").style.display="block";
        event.target.style.display = "none";
        document.getElementById("body").style.background = "hsl(0, 0%, 98%)";
        document.getElementById("input-top").style.background = "hsl(0, 0%, 98%)";
        document.getElementById("main").style.background = "hsl(0, 0%, 98%)";
        document.getElementsByClassName("zar")[0].style.color = "hsl(235, 19%, 35%)";
        document.getElementById("header").style.backgroundImage = "url('images/bg-desktop-light.jpg')";
        document.getElementsByClassName("xr")[0].classList.toggle("xr1");
        document.getElementsByClassName("xl")[0].classList.toggle("xl1");
        document.getElementsByClassName("footer-center")[0].classList.toggle("footer-center1");
        document.getElementsByClassName("footer-center2")[0].style.background = "hsl(0, 0%, 98%)";

        for(var n = 0; n < 7 ; n++){
            document.getElementsByClassName("circle")[n].style.backgroundColor  = "hsl(0, 0%, 98%)";}
        for(var n = 0; n < 6 ; n++){
            document.getElementsByTagName("button")[n].style.backgroundColor = "hsl(0, 0%, 98%)";
            document.getElementsByClassName("div")[n].classList.toggle("div11");
            document.getElementsByClassName("input-main")[n].style.color = "hsl(235, 19%, 35%)";
           }

        }

    if(id == "moon"){
        document.cookie = "theme=sun";
        document.getElementById("sun").style.display="block";
        event.target.style.display = "none";

        document.getElementById("sun").style.display="block";
        event.target.style.display = "none";
        document.getElementById("body").style.background = "hsl(235, 21%, 11%)";
        document.getElementById("input-top").style.background = "hsl(235, 24%, 19%)";
        document.getElementById("main").style.background = "hsl(235, 24%, 19%)";
        document.getElementById("header").style.backgroundImage = "url('images/bg-desktop-dark.jpg')";
        document.getElementsByClassName("footer-center2")[0].style.background = "hsl(235, 24%, 19%)";

        for(var n = 0; n < 7 ; n++){
            document.getElementsByClassName("circle")[n].style.backgroundColor  = "hsl(235, 24%, 19%)";}
        for(var n = 0; n < 6 ; n++){
            document.getElementsByTagName("button")[n].style.backgroundColor = "hsl(235, 24%, 19%)";
            document.getElementsByClassName("div")[n].style.backgroundColor = "hsl(235, 24%, 19%)";
            document.getElementsByClassName("input-main")[n].style.color = "hsl(234, 39%, 85%)";
           }




        }
         }


function click12(){

        if( document.getElementById("sun").style.display == "block"){

              if(event.target.classList.contains("circle") && event.target.classList.contains("0")){
                   event.target.classList.toggle("circle2");
                    document.getElementsByClassName('div')[0].classList.toggle("dec");}

              if(event.target.classList.contains("circle") && event.target.classList.contains("1")){
                   event.target.classList.toggle("circle2");
                    document.getElementsByClassName('div')[1].classList.toggle("dec");}

              if(event.target.classList.contains("circle") && event.target.classList.contains("2")){
                   event.target.classList.toggle("circle2");
                    document.getElementsByClassName('div')[2].classList.toggle("dec");}

              if(event.target.classList.contains("circle") && event.target.classList.contains("3")){
                   event.target.classList.toggle("circle2");
                    document.getElementsByClassName('div')[3].classList.toggle("dec");}

              if(event.target.classList.contains("circle") && event.target.classList.contains("4")){
                   event.target.classList.toggle("circle2");
                    document.getElementsByClassName('div')[4].classList.toggle("dec");}

              if(event.target.classList.contains("circle") && event.target.classList.contains("5")){
                   event.target.classList.toggle("circle2");
                    document.getElementsByClassName('div')[5].classList.toggle("dec");}

              if(event.target.classList.contains("input-main")){
                   event.target.lastElementChild.style.display = "block";}}

        if( document.getElementById("moon").style.display == "block"){

              if(event.target.classList.contains("circle") && event.target.classList.contains("0")){
                   event.target.classList.toggle("circle2");
                    document.getElementsByClassName('div')[0].classList.toggle("dec1");}

              if(event.target.classList.contains("circle") && event.target.classList.contains("1")){
                   event.target.classList.toggle("circle2");
                    document.getElementsByClassName('div')[1].classList.toggle("dec1");}

              if(event.target.classList.contains("circle") && event.target.classList.contains("2")){
                   event.target.classList.toggle("circle2");
                    document.getElementsByClassName('div')[2].classList.toggle("dec1");}

              if(event.target.classList.contains("circle") && event.target.classList.contains("3")){
                   event.target.classList.toggle("circle2");
                    document.getElementsByClassName('div')[3].classList.toggle("dec1");}

              if(event.target.classList.contains("circle") && event.target.classList.contains("4")){
                   event.target.classList.toggle("circle2");
                    document.getElementsByClassName('div')[4].classList.toggle("dec1");}

              if(event.target.classList.contains("circle") && event.target.classList.contains("5")){
                   event.target.classList.toggle("circle2");
                    document.getElementsByClassName('div')[5].classList.toggle("dec1");}

              if(event.target.classList.contains("input-main")){
                   event.target.lastElementChild.style.display = "block";}}


       }



function over(){
    event.target.style.cursor = "pointer";}




function nav(){

    if(event.target.id == "done"){
        event.target.style.color = "hsl(220, 98%, 61%)";
        document.getElementById("all").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("active").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("xr").style.color = "hsl(233, 11%, 84%)";
        for(var a = 0; a <6;a++){
            var q = document.getElementsByClassName("input-main")[a]
            if(q.firstElementChild.firstElementChild.classList.contains('circle2')){
                q.style.padding = "15px";}else{
                q.style.visibility = "hidden"}}}

    if(event.target.id == "xr"){
        event.target.style.color = "hsl(220, 98%, 61%)";
        document.getElementById("all").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("active").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("done").style.color = "hsl(233, 11%, 84%)";
        for(var a = 0; a <6;a++){
            var q = document.getElementsByClassName("input-main")[a]
            if(q.firstElementChild.firstElementChild.classList.contains('circle2')){
            document.getElementsByClassName("cross")[a].click()
               }}}


    if(event.target.id == "active"){
        event.target.style.color = "hsl(220, 98%, 61%)";
        document.getElementById("all").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("done").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("xr").style.color = "hsl(233, 11%, 84%)";
        for(var a = 0; a <6;a++){
            var q = document.getElementsByClassName("input-main")[a]
            if(q.firstElementChild.firstElementChild.classList.contains('circle2')){
                q.style.padding = "15px";}else{
                q.style.visibility = "hidden"}}}

    if(event.target.id == "all"){
        event.target.style.color = "hsl(220, 98%, 61%)";
        document.getElementById("active").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("done").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("xr").style.color = "hsl(233, 11%, 84%)";
        for(var a = 0; a <6;a++){
            var q = document.getElementsByClassName("input-main")[a]
             q.firstElementChild.style.padding = "-5px";
                 q.style.visibility = "visible"}}}


function nav2(){
    if(event.target.id == "done2"){
        event.target.style.color = "hsl(220, 98%, 61%)";
        document.getElementById("all2").style.color = "white";
        document.getElementById("active2").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("xr").style.color = "hsl(233, 11%, 84%)";
        for(var a = 0; a <6;a++){
            var q = document.getElementsByClassName("input-main")[a]
            if(q.firstElementChild.firstElementChild.classList.contains('circle2')){
                q.style.padding = "15px";}else{
                q.style.visibility = "hidden"}}}

    if(event.target.id == "xr"){
        event.target.style.color = "hsl(220, 98%, 61%)";
        for(var a = 0; a <6;a++){
            var q = document.getElementsByClassName("input-main")[a]
            if(q.firstElementChild.firstElementChild.classList.contains('circle2')){
            document.getElementsByClassName("cross")[a].click()
               }}}


    if(event.target.id == "active2"){
        event.target.style.color = "hsl(220, 98%, 61%)";
        document.getElementById("all2").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("done2").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("xr").style.color = "hsl(233, 11%, 84%)";
        for(var a = 0; a <6;a++){
            var q = document.getElementsByClassName("input-main")[a]
            if(q.firstElementChild.firstElementChild.classList.contains('circle2')){
                q.style.padding = "15px";}else{
                q.style.visibility = "hidden"}}}

    if(event.target.id == "all2"){
        event.target.style.color = "hsl(220, 98%, 61%)";
        document.getElementById("active2").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("done2").style.color = "hsl(233, 11%, 84%)";
        document.getElementById("xr").style.color = "hsl(233, 11%, 84%)";

        for(var a = 0; a <6;a++){
            var q = document.getElementsByClassName("input-main")[a]
             q.firstElementChild.style.padding = "-5px";
                 q.style.visibility = "visible"}}}




    var zounter = 6;
    for(var u = 0; u < 6 ; u++){
        var w = document.getElementsByClassName("input-main")[u]
        if(w.children[1].innerText != ""){
            zounter = zounter - 1;}}

         document.getElementsByClassName("xl")[0].innerHTML =+  (6-zounter) + " items left" ;







