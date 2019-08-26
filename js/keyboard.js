// document.addEventListener("keyup", function(event){
//     // if(event.keyCode == 65){
//     //     document.body.style.background = "orange";
//     // }else if(event.keyCode == 66){
//     //     document.body.style.background = "teal";
//     // }else if(event.keyCode == 13){
//     //     alert("Hello My love JavaScript");
//     // }

//     switch(event.keyCode){
//         case 65:
//             document.body.style.background = "red";
//             document.querySelector("h1").innerHTML = "A";
//             break; 
//         case 66:
//             document.body.style.background = "yellow";
//             document.querySelector("h1").innerHTML = "B";
//             break;
//         case 13:
//             document.body.style.background = "teal";
//             document.querySelector("h1").innerHTML = "Enter";
//             break;
//     }

// });

// var selectColor = () =>{
//     let colors = document.getElementById("myColors").value;
//     document.body.style.background = colors;
// }
// document.addEventListener('change',selectColor);

// var selectColor = ()=>{
//     let colors =document.getElementById('myColors').value;
//     document.body.style.background = colors;
// }
// document.addEventListener('change',selectColor);


var changeColors = () =>{
    let red = document.getElementById("red");
    let blue = document.getElementById("blue");
    let green = document.getElementById("green");
    let orange = document.getElementById("orange");
    if(red.checked){
        document.body.style.background = red.value;
    }else if( blue.checked){
        document.body.style.background = blue.value;
    }else if (green.checked){
        document.body.style.background =green.value;
    }else{
        document.body.style.background =orange.value;
    }
}
document.addEventListener('change',changeColors);