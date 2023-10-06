//هذا ملف javascrept لعرض الرسائل من صفحة الرسائل الى وعرضها في الصفحة الرئيسية
function showPopup(x) {
    var overlay = document.getElementById('overlay' + x);
    var popup = document.getElementById('popup' + x);
    overlay.style.display = 'block';
    popup.style.display = 'block';
}


function hidePopup(x) {
    var overlay = document.getElementById('overlay' + x);
    var popup = document.getElementById('popup' + x);
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

