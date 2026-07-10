export const initNavigation = () => {
  const header = document.querySelector('header');
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (!header) return;

  // Handle scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-navy/90', 'backdrop-blur-md', 'py-4');
      header.classList.remove('py-6');
    } else {
      header.classList.remove('bg-navy/90', 'backdrop-blur-md', 'py-4');
      header.classList.add('py-6');
    }
  });

  // Handle mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });
  }
};
