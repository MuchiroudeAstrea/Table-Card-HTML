document.querySelectorAll(".delete-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const row = event.target.closest("tr"); // Tìm hàng chứa nút được nhấn
    row.classList.toggle("highlight-green"); // Thêm hoặc xóa lớp CSS
  });
});
