const input = document.getElementById("photoInput");
const avatar = document.getElementById("avatar");
let savedImage = "";

// ===== Загрузка фото =====
input.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      savedImage = e.target.result; // Base64
      avatar.style.backgroundImage = `url(${savedImage})`;
      avatar.style.backgroundSize = "cover";
      avatar.style.backgroundPosition = "center";
    };
    reader.readAsDataURL(file);
  }
});

// ===== Сохранение данных =====
function saveData() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;
  const classCourse = document.getElementById("classCourse").value;

  if (!name || !surname) {
    alert("Enter your name and surname");
    return;
  }

  localStorage.setItem("studentName", name);
  localStorage.setItem("studentSurname", surname);
  localStorage.setItem("studentAge", age);
  localStorage.setItem("studentClass", classCourse);

  if (savedImage) {
    localStorage.setItem("studentPhoto", savedImage);
  }

  window.location.href = "planner.html";
}

