// Theme JavaScript

// Cart functionality
class CartDrawer {
  constructor() {
    this.init();
  }

  init() {
    // Handle add to cart forms
    document.addEventListener('submit', async (e) => {
      if (e.target.closest('form[action*="cart"]')) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        try {
          const response = await fetch(window.routes.cart_add_url, {
            method: 'POST',
            body: formData
          });
          
          if (response.ok) {
            const data = await response.json();
            this.updateCartCount();
            this.showNotification('Item added to cart');
          } else {
            this.showNotification('Failed to add item to cart', 'error');
          }
        } catch (error) {
          this.showNotification('An error occurred', 'error');
        }
      }
    });
  }

  updateCartCount() {
    fetch(window.routes.cart_url + '.js')
      .then(response => response.json())
      .then(cart => {
        const cartBubble = document.querySelector('.cart-count-bubble span');
        if (cartBubble) {
          cartBubble.textContent = cart.item_count || 0;
        }
      })
      .catch(() => {});
  }

  showNotification(message, type = 'success') {
    // Simple notification - can be enhanced with a toast library
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 5rem;
      right: 1rem;
      padding: 1rem 1.5rem;
      background: ${type === 'success' ? 'hsl(var(--primary))' : 'hsl(var(--destructive))'};
      color: white;
      border-radius: 0.5rem;
      z-index: 9999;
      animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
  // Initialize cart
  new CartDrawer();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#0') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

