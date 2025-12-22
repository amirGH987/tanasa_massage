document.getElementById("reserveForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let massage = document.getElementById("massage").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  let text =
    رزرو نوبت ماساژ\n\n +
    نام: ${name}\n +
    شماره: ${phone}\n +
    نوع ماساژ: ${massage}\n +
    تاریخ: ${date}\n +
    ساعت: ${time};

  let whatsappNumber = "989102624560"; // ← شماره خودت
  let url = https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)};

  window.open(url, "_blank");
});
