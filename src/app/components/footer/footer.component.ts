import { Component } from '@angular/core';

@Component({
  selector: 'quest-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer">
      <div class="footer-section">
        <h3>Contacto</h3>
        <p>Dirección: 123 Calle Principal, Madrid, España</p>
        <p><a href="mailto:apradanab@gmail.com">apradanab&#64;gmail.com</a></p>
      </div>
      <div class="footer-section">
        <h3>Social</h3>
        <div class="social-icons">
          <a href="https://www.facebook.com" target="_blank">
            <img src="assets/facebook.svg" alt="Facebook">
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="assets/instagram.svg" alt="Instagram">
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <img src="assets/linkedin.svg" alt="LinkedIn">
          </a>
          <a href="https://www.tiktok.com" target="_blank">
            <img src="assets/tiktok.svg" alt="TikTok">
          </a>
        </div>
      </div>
      <div class="footer-section">
        <h3>Apps</h3>
        <div class="app-links">
          <a href="https://www.apple.com/app-store/" target="_blank" class="app-link">
            <img src="assets/app-store.svg" alt="App Store">
            <div class="app-text">
              <span class="large-text">App Store</span>
            </div>
          </a>
          <a href="https://play.google.com/store" target="_blank" class="app-link">
            <img src="assets/google-play-store.svg" alt="Google Play">
            <div class="app-text">
              <span class="large-text">Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  `,
  styles: `
    * {
      font-family: "Poppins", sans-serif;
    }
    h3 {
      font-size: 11px;
      margin-bottom: 1rem;
      margin-top: 0.2rem;
    }
    p {
      font-size: 0.4rem;
    }
    .footer {
      display: flex;
      justify-content: space-around;
      padding: 2px;
      background-color: #000;
      color: white;
      position: fixed;
      width: 100%;
      bottom: 0;
      left: 0;
      margin: 0;
      margin-bottom: -8px;
      flex-shrink: 0;
    }
    .footer-section {
      flex: 1;
      padding: 0 5px;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    .footer-section h3 {
      border-bottom: 1px solid #555;
      padding-bottom: 3px;
    }
    .social-icons a, .app-icons a {
      margin: 0 5px;
      display: inline-block;
    }
    .social-icons img {
      width: 18px;
    }
    .app-icons img {
      width: 24px;
    }
    .footer-section a {
      color: white;
      text-decoration: none;
    }

    .app-links {
      display: flex;
      justify-content: center; /* Alinear en el centro */
      align-items: center;
      gap: 10px; /* Espacio entre los recuadros */
      position: relative;
      bottom: 10px;
    }
    .app-link {
      border: 1px solid white;
      border-radius: 10px; /* Bordes redondeados */
      padding: 5px;
      margin: 5px ;
      display: flex;
      align-items: center;
      text-align: center;
    }
    .app-link img {
      width: 20px; /* Tamaño de los iconos de apps */
      margin-right: 5px; /* Espacio entre el icono y el texto */
    }
    .app-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .large-text {
      font-size: 0.5rem; /* Tamaño de fuente más grande */
    }
    .footer-section a:hover {
      text-decoration: underline;
    }
  `
})
export class FooterComponent {

}
