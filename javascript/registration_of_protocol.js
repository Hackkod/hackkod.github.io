function displayFileName() {
    const fileInput = document.getElementById('file-input');
    const fileNameSpan = document.getElementById('file-name');
    fileNameSpan.textContent = fileInput.files[0].name;
}

var textareas = document.getElementsByTagName('textarea');
for (var i = 0; i < textareas.length; i++) {
textareas[i].addEventListener('input', function() {
    this.style.height = 'auto'; // Сбрасываем высоту
    this.style.height = this.scrollHeight + 'px'; // Устанавливаем высоту равной высоте содержимого
});
}