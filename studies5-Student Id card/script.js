//Animation of two Divs

let form1 = document.getElementById("form");
let btn = document.getElementById("btn");
let rtn = document.getElementById("return");
let idcard = document.getElementById("idcard");


//IDCARD Details

let uname = document.getElementById("name");
let regno = document.getElementById("reg");
let dept = document.getElementById("dept");
let phn = document.getElementById("phn");
let inp = document.getElementById("img")

let name1 = document.getElementById("name1");
let regno1 = document.getElementById("reg1");
let dept1 = document.getElementById("dept1");
let phn1 = document.getElementById("phn1");
let image = document.getElementById("imgdiv");

btn.addEventListener("click", () => {
    if ((uname.value == null || uname.value == '') || (regno.value == null ||
        regno.value == '') || (dept.value == null || dept.value == '') || (phn.value == null || phn.value == '')) {
        alert("Enter All Values");
    }
    else {


        const conactiveElement = document.querySelector('.form');
        const idactiveElement = document.querySelector('.idcard');


        conactiveElement.style.transform = 'translateY(200%)';
        conactiveElement.style.transition = 'all 2s linear';
        conactiveElement.style.opacity = '0';


        idactiveElement.style.transform = 'translateY(0%)';
        idactiveElement.style.transition = 'all 2s linear';
        idactiveElement.style.opacity = '1';





        name1.innerHTML = uname.value.trim();
        regno1.innerHTML = regno.value.trim();
        dept1.innerHTML = dept.value.trim();
        phn1.innerHTML = phn.value.trim();

    }
})
inp.addEventListener("change", () => {
    image.src = URL.createObjectURL(inp.files[0]);
})
rtn.addEventListener("click", () => {
    const conactiveElement = document.querySelector('.form');
    const idactiveElement = document.querySelector('.idcard');


    idactiveElement.style.transform = 'translateY(-200%)';
    idactiveElement.style.transition = 'all 2s linear';
    idactiveElement.style.opacity = '0';

    conactiveElement.style.transform = 'translateY(0%)';
    conactiveElement.style.transition = 'all 2s linear';    
    conactiveElement.style.opacity = '1';

})