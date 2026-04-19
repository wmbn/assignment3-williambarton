const btn = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('dark') === 'on') {
    body.classList.add('dark');
}

btn.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('dark', body.classList.contains('dark') ? 'on' : 'off');
});