//Scroll

const left = document.querySelector('.js-left')
const right = document.querySelector('.js-right')
const scroll = document.querySelector('.js-list-grid')
setTimeout(scrollAuto,5000)

function scrollAuto(){
    switch(scroll.style.marginLeft)
    {
        case '-10px':
        {
            scroll.style.marginLeft = '-120px';
            break;
        }
        case '-120px':
        {
            scroll.style.marginLeft = '-310px';
            break;
        }
        case '-310px':
        {
            scroll.style.marginLeft = '-500px';
            break;
        }
        case '-500px':
        {
            scroll.style.marginLeft = '-690px';
            break;
        }
        case '-690px':
        {
            scroll.style.marginLeft = '-10px';
            break;
        }
        default : break;
    }
    setTimeout(scrollAuto,5000)
}

function scrollRight(){
    switch(scroll.style.marginLeft)
    {
        case '-10px':
        {
            scroll.style.marginLeft = '-120px';
            break;
        }
        case '-120px':
        {
            scroll.style.marginLeft = '-310px';
            break;
        }
        case '-310px':
        {
            scroll.style.marginLeft = '-500px';
            break;
        }
        case '-500px':
        {
            scroll.style.marginLeft = '-690px';
            break;
        }
        case '-690px':
        {
            scroll.style.marginLeft = '-10px';
            break;
        }
        default : break;
    }

}

function scrollLeft(){
    switch(scroll.style.marginLeft)
    {
        case '-120px':
        {
            scroll.style.marginLeft = '-10px';
            break;
        }
        case '-310px':
        {
            scroll.style.marginLeft = '-120px';
            break;
        }
        case '-500px':
        {
            scroll.style.marginLeft = '-310px';
            break;
        }
        case '-690px':
        {
            scroll.style.marginLeft = '-500px';
            break;
        }
        default : break;
    }
}

left.addEventListener('click',scrollLeft)
right.addEventListener('click',scrollRight)


