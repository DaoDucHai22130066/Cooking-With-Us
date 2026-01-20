document.addEventListener("DOMContentLoaded", function() {

    // Lấy danh sách các nút menu và các tab nội dung
    const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');
    const contentTabs = document.querySelectorAll('.content-tab');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Nếu là nút Logout thì không chạy script tab
            if(this.classList.contains('logout')) return;

            e.preventDefault();

            // 1. Xóa class active ở tất cả menu item
            menuItems.forEach(link => link.classList.remove('active'));

            // 2. Thêm class active vào nút vừa bấm
            this.classList.add('active');

            // 3. Lấy id của tab cần hiện (từ data-tab)
            const tabId = this.getAttribute('data-tab');

            // 4. Ẩn tất cả tab nội dung
            contentTabs.forEach(tab => tab.classList.remove('active'));

            // 5. Hiện tab tương ứng
            const targetTab = document.getElementById(tabId);
            if(targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
});