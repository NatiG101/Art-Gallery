let index = 0;

function popPicture() {
  const img = document.createElement('img');
  img.src = images[index];
  img.className = 'picture';

  // Move to next image (loop back after 10)
  index = (index + 1) % images.length;

  // Grid layout: 4 columns × 3 rows
  const cols = 4;
  const rows = 3;
  const cellWidth = window.innerWidth / cols;
  const cellHeight = window.innerHeight / rows;

  const col = index % cols;
  const row = Math.floor(index / cols);

  img.style.width = "120px";
  img.style.height = "120px";
  img.style.top = row * cellHeight + cellHeight / 2 - 60 + "px";
  img.style.left = col * cellWidth + cellWidth / 2 - 60 + "px";

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 4000);
}
