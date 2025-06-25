<template>
  <footer class="footer-container">
    <div class="footer-content">
      <p>© 2025 FerreMas. Todos los derechos reservados.</p>

      <div class="social-buttons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener" class="social-btn facebook">
          <i class="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener" class="social-btn instagram">
          <i class="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener" class="social-btn twitter">
          <i class="fab fa-x-twitter"></i> X
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer-container {
  background: linear-gradient(to right, #0056b3, #007bff);
  color: white;
  padding: 30px 20px;
  text-align: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: 60px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
  flex-wrap: wrap;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 30px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.1);
}

.social-btn:hover {
  transform: translateY(-2px);
  background-color: rgba(255, 255, 255, 0.2);
}

.facebook i {
  color: #1877f2;
}

.instagram i {
  color: #e4405f;
}

.twitter i {
  color: #1da1f2;
}
</style>
