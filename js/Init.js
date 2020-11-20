const sidenav = document.querySelector('.sidenav');
M.Sidenav.init(sidenav, {});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax, {});

const tooltip = document.querySelectorAll('.tooltipped');
M.Tooltip.init(tooltip, {});

const fab = document.querySelectorAll('.contact-btn');
M.FloatingActionButton.init(fab, {
    hoverEnabled: true,
    direction: 'top'
});

const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox, {});

var instance = M.FloatingActionButton.getInstance(document.querySelector('.contact-btn'));

scrollToTop = document.querySelectorAll('.scrolltotop');
console.log(scrollToTop);

document.querySelector('.contact-btn').addEventListener('mouseover', () => {
    for(i = 0; i < scrollToTop.length; i++){
        scrollToTop[i].style.display = 'none'
    }
});

document.querySelector('.contact-btn').addEventListener('mouseleave', () => {
    for(i = 0; i < scrollToTop.length; i++){
        if(window.scrollY >= 200){
            scrollToTop[i].style.display = 'block'
        }
    }
});

for(i = 0; i < scrollToTop.length; i++){
    scrollToTop[i].addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
}


document.addEventListener('scroll', () => {
    for(i = 0; i < scrollToTop.length; i++){
        window.scrollY >= 200 ? scrollToTop[i].style.display = 'block' : scrollToTop[i].style.display = 'none'
    }
});