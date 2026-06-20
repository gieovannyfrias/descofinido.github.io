// header.footer.js

// Inyectar el header
document.body.insertAdjacentHTML("afterbegin", `
<header class="navbar">
  <h1 class="logo">Descofinido</h1>
  <nav>
    <ul class="menu" id="menu">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="/Acerca_de">Acerca de</a></li>
      <li><a href="/Mi_tienda">Tienda</a></li>
      <li><a href="/Podcast">Podcast</a></li>
      <li><a href="/Programacion">Entrevistas</a></li>
      <li><a href="/Contacto">Contacto</a></li>
    </ul>
    <div class="hamburger" id="hamburger">
      <span></span><span></span><span></span>
    </div>
  </nav>
</header>
`);

// Inyectar el footer
document.body.insertAdjacentHTML("beforeend", `
<footer class="footer">
  <div class="footer-container">
    <div class="footer-logo">
      <h2>Descofinido</h2>
      <p>Explorando lo desconocido con pasión y creatividad.</p>
    </div>
    <div class="footer-links">
      <h3>Enlaces rápidos</h3>
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="/Acerca_de">Acerca de</a></li>
        <li><a href="/Mi_tienda">Tienda</a></li>
      <li><a href="/Podcast">Podcast</a></li>
      <li><a href="/Programacion">Entrevistas</a></li>
        <li><a href="/Contacto">Contacto</a></li>
      </ul>
    </div>
    <div class="footer-social">
      <h3>Síguenos</h3>
      <div class="social-icons">
              <a href="https://www.facebook.com/descofinido/"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></span></a>
        <a href="https://www.instagram.com/descofinido/"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></span></a>
        <a href="https://x.com/descofinido"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></span></a>
        <a href="https://www.youtube.com/@descofinido"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg></span></a>
      </div>
    </div>
    <div class="footer-legal">
      <h3>Legal</h3>
      <ul>
        <li><a href="/Privacidad">Política de Privacidad</a></li>
        <li><a href="/Cookies">Política de Cookies</a></li>
        <li><a href="/Terminos">Términos y Condiciones</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 Extranormal Media. Todos los derechos reservados.</p>
  </div>
</footer>
`);

// Inyectar estilos CSS
const style = document.createElement("style");
style.textContent = `
/* HEADER */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
    background: rgba(0, 0, 0, 0.6); /* Negro con 60% de opacidad */
    backdrop-filter: blur(10px);    /* El efecto borroso */
    -webkit-backdrop-filter: blur(10px); /* Para que funcione en Safari */
    border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-weight: 700;
 font-size: 2em;
  font-family: Arial, sans-serif;
  color: #fff;
  text-transform: uppercase;
  text-shadow:
    0 0 5px #0ff,
    0 0 10px #0ff,
    0 0 20px #0ff,
    0 0 40px #0ff,
    0 0 80px #0ff;
  animation: flicker 2s infinite alternate;
}

@keyframes flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    opacity: 1;
  }
  20%, 24%, 55% {
    opacity: 0.3;
  }
}

.menu {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.menu li a {
  text-decoration: none;
  font-weight: 500;
  color: white;
  position: relative;
  transition: color 0.3s;
}

.menu li a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: #00796b;
  transition: width 0.3s;
}

.menu li a:hover {
  color: #00796b;
}

.menu li a:hover::after {
  width: 100%;
}

/* Hamburguesa moderna */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #222;
  border-radius: 2px;
  transition: all 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    background:  rgba(255, 255, 255, 0.2);
    position: absolute;
    top: 70px;
    right: 20px;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .menu.show {
    display: flex;
  }

  .hamburger {
    display: flex;
  }
}

/* FOOTER */
.footer {
  background: #004d40;
  color: #fff;
  padding: 2rem 1rem;
  margin-top: 3rem;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.footer-logo h2 {
  margin: 0;
  font-size: 1.5rem;
}

.footer-links ul,
.footer-legal ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li,
.footer-legal ul li {
  margin: 0.5rem 0;
}

.footer-links ul li a,
.footer-legal ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links ul li a:hover,
.footer-legal ul li a:hover {
  color: #80cbc4;
}

.footer-social .social-icons a {
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-social .social-icons a:hover {
  color: #80cbc4;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #00695c;
  padding-top: 1rem;
  font-size: 0.9rem;
}
`;
document.head.appendChild(style);

// Funcionalidad hamburguesa
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
    hamburger.classList.toggle("active");
  });
});
