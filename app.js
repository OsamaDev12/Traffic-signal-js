//Automatic

function main(){
    var lightColor = document.getElementsByClassName('light');
    lightColor[0].style.background = 'red';
    lightColor[1].style.background = 'gray';
    lightColor[2].style.background = 'gray';
    
     function changeToYellow(){
         lightColor[1].style.background = 'yellow';  
     }
    function changeToGreen(){
        lightColor[0].style.background = 'gray';
        lightColor[1].style.background = 'gray';
        lightColor[2].style.background = 'green';  
    }
    
     var x = setTimeout(changeToYellow,3000);
     var y = setTimeout(changeToGreen,5000);
}
function btnN(){
    var start = setInterval(main,8000);
    main()

}
//Manually


function changeRed(){
    var div1 = document.getElementById('red')
    if(div1.style.backgroundColor == "black"){
        div1.style.backgroundColor = "red"
    }
    else{
        div1.style.backgroundColor = "black"
    }

}

// var change1 = document.getElementById('red')
// change1.addEventListener('click',changeRed)




function changeYellow(){
    var div2 = document.getElementById('yellow')
    if(div2.style.backgroundColor == "black"){
        div2.style.backgroundColor = "yellow"
    }
    else{
        div2.style.backgroundColor = "black"
    }

}
// var change2 = document.getElementById('yellow')
// change2.addEventListener('click',changeYellow)


function changeGreen(){
    var div3 = document.getElementById('green')
    if(div3.style.backgroundColor == "black"){
        div3.style.backgroundColor = "green"
    }
    else{
        div3.style.backgroundColor = "black"
    }

}
var change3 = document.getElementById('green')
change3.addEventListener('click',changeGreen)
