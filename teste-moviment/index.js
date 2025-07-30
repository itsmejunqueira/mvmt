document.getElementById('menu-btn').addEventListener('click', function (event) {
    document.getElementById('menuOverlay').classList.toggle('active');
    event.stopPropagation();
});
document.querySelectorAll('.menu-item').forEach(function(item) {
    item.addEventListener('click', function(event) {
        // Your event handler logic here
        document.getElementById('menuOverlay').classList.toggle('active');
        event.stopPropagation();
    });
});