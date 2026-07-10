/**
 * Navigation Module
 * Handles header scroll effects and mobile menu interactions
 * Provides smooth, accessible navigation experience
 */

/**
 * Initialize Navigation
 * Sets up header scroll effects and mobile menu toggle
 */
export const initNavigation = () => {
  const header = document.querySelector('header');
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');

  // Guard clause: exit if header doesn't exist
  if (!header) {
    console.warn('[Navigation] Header element not found');
    return;
  }

  // Initialize header scroll effect
  initHeaderScrollEffect(header);

  // Initialize mobile menu if elements exist
  if (mobileMenuBtn && mobileMenu) {
    initMobileMenu(mobileMenuBtn, mobileMenu);
  } else {
    console.warn('[Navigation] Mobile menu elements not found');
  }
};

/**
 * Header Scroll Effect
 * Adds background and backdrop blur when scrolling
 * @param {HTMLElement} header - Header element
 */
const initHeaderScrollEffect = (header) => {
  let lastScrollY = 0;
  let ticking = false;

  const updateHeaderOnScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 50;

    if (scrollY > scrollThreshold) {
      // Add scroll effect classes
      if (!header.classList.contains('header-scrolled')) {
        header.classList.add('header-scrolled');
      }
    } else {
      // Remove scroll effect classes
      if (header.classList.contains('header-scrolled')) {
        header.classList.remove('header-scrolled');
      }
    }

    ticking = false;
  };

  const onScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(updateHeaderOnScroll);
      ticking = true;
    }
  };

  // Use passive event listener for better performance
  window.addEventListener('scroll', onScroll, { passive: true });
};

/**
 * Mobile Menu Toggle
 * Handles mobile menu open/close interactions
 * @param {HTMLElement} mobileMenuBtn - Mobile menu button
 * @param {HTMLElement} mobileMenu - Mobile menu element
 */
const initMobileMenu = (mobileMenuBtn, mobileMenu) => {
  let isMenuOpen = false;

  /**
   * Toggle mobile menu visibility
   */
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  /**
   * Open mobile menu
   */
  const openMenu = () => {
    mobileMenu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
  };

  /**
   * Close mobile menu
   */
  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  };

  /**
   * Close menu when clicking on a link
   */
  const handleMenuLinkClick = () => {
    if (isMenuOpen) {
      closeMenu();
      isMenuOpen = false;
    }
  };

  // Menu button click handler
  mobileMenuBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking on menu links
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach((link) => {
    link.addEventListener('click', handleMenuLinkClick);
  });

  // Close menu on escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu();
      isMenuOpen = false;
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (
      isMenuOpen &&
      !mobileMenu.contains(event.target) &&
      !mobileMenuBtn.contains(event.target)
    ) {
      closeMenu();
      isMenuOpen = false;
    }
  });
};

/**
 * Close Mobile Menu
 * Utility function to close menu from other modules
 */
export const closeMobileMenu = () => {
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (mobileMenu && mobileMenuBtn) {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }
};

/**
 * Open Mobile Menu
 * Utility function to open menu from other modules
 */
export const openMobileMenu = () => {
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (mobileMenu && mobileMenuBtn) {
    mobileMenu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
  }
};

export default initNavigation;
