function showContent(classNum) {
    document.querySelectorAll('.class-content').forEach(el => el.classList.remove('active'));
    document.getElementById('class' + classNum).classList.add('active');
}
