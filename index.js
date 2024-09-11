var btn = document.getElementById('button');
var skl = document.getElementById('skill');
btn.addEventListener('click', function () {
    if (skl.style.display === 'none') {
        skl.style.display = 'block';
    }
    else {
        skl.style.display = 'none';
    }
});
