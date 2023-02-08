const scriptURL = "https://script.google.com/macros/s/AKfycby_S64t8Zx2H3IzVo5s7BG476v-ekMYOStJV11F0sO8HslRtZpMfMQjdAajuJPd0GsE/exec";
const form = document.forms["submit-form-my-portfolio"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector("#alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit dikilk
  // tampilkan tombol loading, hulangkan tombol kirim
  btnLoading.classList.toggle("hidden");
  btnSend.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hulangkan tombol loading
      btnLoading.classList.toggle("hidden");
      btnSend.classList.toggle("hidden");
      // tampilkan alert
      myAlert.classList.toggle("hidden");
      // form reset
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

document.querySelector(".btn-close").onclick = () => {
  myAlert.classList.add("hidden");
};
