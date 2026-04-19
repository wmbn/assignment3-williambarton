//theme toggle button and body element
const btn = document.getElementById('themeToggle');
const body = document.body;

//localStorage for saved theme
if (localStorage.getItem('dark') === 'on') {
    body.classList.add('dark');
}

//add click event listener to button
btn.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('dark', body.classList.contains('dark') ? 'on' : 'off');
});
