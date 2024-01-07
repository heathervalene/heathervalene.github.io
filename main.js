document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetPage = this.getAttribute('href');
        history.pushState(null, null, targetPage);
    });
});

