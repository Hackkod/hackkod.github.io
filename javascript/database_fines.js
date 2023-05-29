window.addEventListener('DOMContentLoaded', (event) => {
    const cells = document.querySelectorAll('.editable');
    const editButton = document.getElementById('editButton');
    const cancelButton = document.getElementById('cancelButton');
    const saveButton = document.getElementById('saveButton');
    let initialTableValues = null;

    editButton.addEventListener('click', () => {
      initialTableValues = Array.from(cells).map((cell) => cell.textContent.trim());

      cells.forEach((cell) => {
        const text = cell.textContent.trim();
        const input = document.createElement('input');
        input.value = text;
        cell.textContent = '';
        cell.appendChild(input);
        input.focus();
      });

      editButton.style.display = 'none';
      cancelButton.style.display = 'inline-block';
      saveButton.style.display = 'inline-block';

      // Изменение цвета фона всех .editable input при нажатии кнопки "Редактировать"
      const inputs = document.querySelectorAll('.editable input');
      inputs.forEach((input) => {
        input.style.backgroundColor = '#F5F5F5'; // Здесь можно задать нужный цвет фона
      });
    });

    cancelButton.addEventListener('click', () => {
      cells.forEach((cell, index) => {
        cell.textContent = initialTableValues[index];
      });

      initialTableValues = null;

      editButton.style.display = 'inline-block';
      cancelButton.style.display = 'none';
      saveButton.style.display = 'none';
    });

    saveButton.addEventListener('click', () => {
      initialTableValues = null;

      cells.forEach((cell) => {
        const input = cell.querySelector('input');
        if (input) {
          const newText = input.value.trim();
          cell.removeChild(input);
          cell.textContent = newText;
        }
      });

      editButton.style.display = 'inline-block';
      cancelButton.style.display = 'none';
      saveButton.style.display = 'none';
    });
  });
  document.getElementById("saveButton").addEventListener("click", function(event) {
  event.preventDefault();
});