window.onload = function() {
    const uploadBtn = document.querySelector('.btn');
    const fileInput = document.querySelector("input[type='file']");

    uploadBtn.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function() {
        const uploadIcon = document.createElement('i');
        document.body.appendChild(uploadIcon);
    });
};