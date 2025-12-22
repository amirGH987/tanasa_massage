const form = document.getElementById('reserveForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const massage = document.getElementById('massage').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if(!name  !phone  !massage  !date  !time){
        alert("لطفاً همه فیلدها را پر کنید");
        return;
    }

    const message = رزرو نوبت:\nنام: ${name}\nشماره: ${phone}\nخدمات: ${massage}\nتاریخ: ${date}\nساعت: ${time};
    const url = https://wa.me/989102624560?text=${encodeURIComponent(message)}; // شماره واتساپت رو جایگزین کن

    window.open(url, '_blank');
});
