import './less/index.less'

// Your code goes here!
//1.)
window.onload = function (event) {
    console.log(`event ${event.type} fired!`);
    const heading = document.querySelector('h1');
    heading.textContent = 'Ready!';
//2.)
    window.addEventListener('copy', () => {
        navigator.clipboard.readText().then(text => {
            console.log(text);
        })
    })
//3.)
    document.body.addEventListener('click', event => {
        event.target.classList.toggle('mirror')
        event.preventDefault();
    })
//4.)    
    document.body.addEventListener('dblclick', event => {
        event.target.innerHTML = '';
    })
//5.)
    window.addEventListener('keydown', event => {
        if(event.key == 5){
            document.body.innerHTML = 'HEY ITS 5';
        }
    })
//6.)
    document.body.addEventListener('mousemove', event => {
        const {clientX, clientY} = event;
        console.log(`mouse is at ${clientX}, ${clientY}`);
    })

    const dtns = document.querySelectorAll('.destination');
    console.log(dtns);
    for(let destination of dtns){
//7.)
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold';
        })
//8.)        
        destination.addEventListener('mouseleave', () => {
            setTimeout(() => {
                destination.style.fontWeight = 'initial';
            }, 500);
        })
    }
//9.)
    window.addEventListener('wheel', event => {
        setTimeout(() => {
            event.target.innerHTML = 'scrollingggg';
        },3);
    })
//10.)
    window.addEventListener('scroll', () => {
        console.log('Its working');
    })
}