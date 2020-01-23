window.onload = () => {
    let start = [];
    let stars = document.getElementsByClassName('star');

    for (let i = 0; i < stars.length; i++) {
        let step = (timestamp) => {
            if (!start[i]) start[i] = timestamp;
            //console.log(start);
            let progress = timestamp - start[i];
            if (stars[i].getBoundingClientRect().top < window.innerHeight) {
                stars[i].style.transform = 'translateY(' + Math.min(progress / 5) + 'px)';
            } else {
                stars[i].style.transform = 'translateY(0px)';
                start[i] = timestamp;
            }
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    }
}
