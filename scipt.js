function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

faders.forEach(el => observer.observe(el));

function showLove(){
    document.getElementById('loveScreen').classList.remove('hidden');
}

function moveButton(button){
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    button.style.transform = `translate(${x}px, ${y}px)`;
}
