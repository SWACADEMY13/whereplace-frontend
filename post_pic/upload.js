const photoBox = document.querySelector('.photo_box');
const photoInput = document.createElement('input');
photoInput.type = 'file';

photoBox.addEventListener('click', () => {
    photoInput.click();
});

photoInput.addEventListener('change', () => {
    const selectedFile = photoInput.files[0];
    console.log(selectedFile);
  // 이곳에서 선택된 파일을 이용한 로직을 작성할 수 있습니다.
});