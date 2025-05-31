// Cart modal
  const cartIcon = document.getElementById('cartIcon');
  cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
  });

  // Learn More toggle
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const extraContent = document.getElementById('extraContent');
  extraContent.classList.remove('show'); // Ensure it starts hidden

  learnMoreBtn.addEventListener('click', () => {
    extraContent.classList.toggle('show');
    learnMoreBtn.textContent = extraContent.classList.contains('show') ? 'Show Less' : 'Learn More';
  });