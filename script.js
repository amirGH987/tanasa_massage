document.getElementById("reserveForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const massage = document.getElementById("massage").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name  !phone  !massage  !date  !time) {
    alert("لطفاً همه فیلدها را پر کنید");
    return;
  }

  const message =
    رزرو نوبت ماساژ\n\n +
    نام: ${name}\n +
    شماره تماس: ${phone}\n +
    نوع ماساژ: ${massage}\n +
    تاریخ: ${date}\n +
    ساعت: ${time};

  const whatsappNumber = "989102624560"; // ⛔ اینو عوض کن
  const url = https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)};

  window.open(url, "_blank");
});
