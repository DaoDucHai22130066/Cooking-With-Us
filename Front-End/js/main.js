function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Lỗi khi tải component:', error);
        });
}

// Chạy khi trang tải xong
document.addEventListener("DOMContentLoaded", function() {
    // Lưu ý: Đường dẫn ../components/ dùng cho file nằm trong thư mục con (VD: HomePage/index.html)
    // Nếu file html nằm ở thư mục gốc thì sửa thành ./components/

    loadComponent("header-placeholder", "../components/header.html");
    loadComponent("footer-placeholder", "../components/footer.html");
});