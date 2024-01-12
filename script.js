const colorBtn = document.getElementById('color-btn');
const shapeBtn = document.getElementById('shape-btn');
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');

function handleColor() {
    const arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let color = "#";
    
    for (let i=1; i<=6; i++) {
        const index = Math.floor(Math.random()*16);
        color += arr[index];
    }

    outer.style.backgroundColor = color;

};

let ranNum = 2;
function handleShape() { 
    let randomNum = ranNum;

    while(ranNum === randomNum) {
        randomNum = Math.floor(Math.random() * 5);
    }
    ranNum = randomNum;

    inner.style.backgroundColor = 'white';
    inner.style.height = '';
    inner.style.width = '';
    inner.style.borderLeft = '';
    inner.style.borderRight = '';
    inner.style.borderBottom = ''; 
    inner.style.borderRadius = '';


    switch (randomNum) {
        case 0:
            inner.style.borderRadius = '50%';
            break;
        case 1:
            inner.style.height = '50px';
            inner.style.width = '100px';
            break;
        case 2:
            inner.style.height = '100px';
            inner.style.width = '100px';
            break;
        case 3:
            inner.style.borderLeft = '50px solid transparent';
            inner.style.borderRight = '50px solid transparent';
            inner.style.borderBottom = '100px solid green'; 
            break;
        case 4:
            inner.style.border = '50px solid transparent';
            inner.style.borderBottomColor = 'blue';
            break;
    }
    handleAnimation();
};

function handleAnimation() {
    outer.classList.add("bounce-animation");
    setTimeout(()=> {
        outer.classList.remove("bounce-animation");
    },1000);
};

colorBtn.addEventListener('click',handleColor);
shapeBtn.addEventListener('click',handleShape);





