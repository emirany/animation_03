let delay = 0; /* delay between each path animation. keep this low unless you want the animation delay to be really noticeable */
let paths = document.querySelectorAll('path');

paths.forEach((path, i) => {
    /* the + 1 is an optional fix where 1pt is visible on some svg. You can just remove it if it doesn't apply to you */
    path.style.strokeDasharray = path.getTotalLength() + 1; 
    path.style.strokeDashoffset = path.getTotalLength() + 1;
    setTimeout(() => {
        path.classList.add("trace");
    }, i * delay * 100)
});