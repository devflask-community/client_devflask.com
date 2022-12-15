var loaded = false;

document.addEventListener('DOMContentLoaded', () => {

    //Registers all hyperdiv's eventlisteners
    const hyperdivs = document.querySelectorAll('.hyperdiv')
    hyperdivs.forEach((div) => {
        var target = div.getAttribute('href')
        div.addEventListener('click', () => {
            if (loaded) {
                location.href = target
            }
        })
    })

    this.loaded = true;
})