let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
let cImage = document.querySelector('.carousel>img');

window.addEventListener('load', function(e){
    cImage.src = 'images/' + images[0]; 

    document.querySelector('.carousel').addEventListener('click', function(evt){
        let target = evt.target;

        if (target.classList.contains('control')) {

            if (target.classList.contains('next')) {
                currentImg += 1;
            } else if (target.classList.contains('prev')){
                currentImg -= 1;
            }

            cImage.src = 'images/' + images[currentImg];
        }
    })
})