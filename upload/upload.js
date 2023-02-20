window.onload = function() {
    const fileInput = document.getElementById('file');
    const preview = document.querySelector('.preview');

    fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const img = new Image();
        img.src = reader.result;
        preview.appendChild(img);
    };

    reader.readAsDataURL(file);
    });
};