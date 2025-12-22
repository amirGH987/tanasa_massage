document.getElementById("reserveForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const massage = document.getElementById("massage").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name  !phone  !massage  !date  !time) {
    alert("لطفاً همه فیلدها را کامل پر کنید");
    return;
  }

  const text =
    "رزرو نوبت ماساژ\n\n" +
    "نام: " + name + "\n" +
    "شماره تماس: " + phone + "\n" +
    "خدمات: " + massage + "\n" +
    "تاریخ: " + date + "\n" +
    "ساعت: " + time;

  const whatsappNumber = "989102624560"; // 👈 شماره واقعی خودت
  const link =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(text);

  location.href = link; // ✅ راه درست برای موبایل
});;
