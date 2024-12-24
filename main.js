let headers = document.querySellectorAll(`.header`);
let box= document.querySellector(`.wrapper`);


headers.array.forEach(header, index => {
    headers.addEventListener('click', function(){
        let bg = this.getAttribute('season')
        box.style = bg;
    })
});