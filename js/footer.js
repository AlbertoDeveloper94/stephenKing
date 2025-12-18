class MyFooter extends HTMLElement {
connectedCallback() {
    this.innerHTML = `


    
    <footer class="footer pt-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <h3 class="footer-title">Acerca de Stephen King</h3>
                    <p class="mb-4">Stephen King el "Maestro del Terror",cuyas novelas han redifinido el género.</p>
                    <div class="social-links mb-4">
                        <a href="https://www.facebook.com/todostephenking?locale=es_ES" target="_blank">
                            <img src="/stephenKing/images/aboutHe/logoFaceBook.png" alt="Facebook" class="social-img">
                        </a>
                        <a href="https://www.instagram.com/stephenking/" target="_blank">
                            <img src="/stephenKing/images/aboutHe/InstagramIcon.png" alt="Instagram" class="social-img">
                        </a>
                        <a href="https://www.linkedin.com/in/stephen-king-a393a3188/" target="_blank">
                            <img src="/stephenKing/images/aboutHe/linkedin.png" alt="Linkedin" class="social-img">
                        </a>
                    </div>

                </div>


                <div class="col-lg-2 col-md-6">
                    <h3 class="footer-title">Enlaces rápidos</h3>
                    <ul class="footer-links">
                        <li><a href="#">Sobre Stephen King</a></li>
                        <li><a href="https://www.amazon.es/stephen-king-merchandising/s?k=stephen+king+merchandising">Productos</a></li>
                        <li><a href="https://stephenking.com.ar/">Blog</a></li>
                    </ul>
                </div>


                <div class="col-lg-2 col-md-6">
                    <h3 class="footer-title">Soporte Técnico</h3>
                    <ul class="footer-links">
                        <li><a href="/stephenKing/pdf/avisoLegal.pdf" target="_blank">Aviso Legal</a></li>
                        <li><a href="/stephenKing/pdf/politicaPrivacidadDatos.pdf" target="_blank">Política de Privacidad</a></li>
                        <li><a href="/stephenKing/pdf/condicionesGeneralesVenta.pdf" target="_blank">Política de Ventas</a></li>
                        <li><a href="/stephenKing/pdf/politicaCookies(3).pdf" target="_blank">Política de Cookies</a></li>
                    </ul>
                </div>


                <div class="col-lg-4 col-md-6">
                    <h3 class="footer-title">Newsletter</h3>
                    <p class=mb-4">Suscríbete a nuestro boletín para recibir actualizaciones, novedades y ofertas
                        exclusivas.</p>
                    <form class="mb-4">
                        <div class="input-group">
                            <input type="email" class="form-control newsletter-input" placeholder="Enter your email">
                            <button class="btn btn-subscribe text-white" type="submit">Subscribete</button>
                        </div>
                    </form>
                    <p class="small">Al suscribirse, acepta nuestra Política de privacidad y da su consentimiento para
                        recibir actualizaciones.</p>

                </div>
            </div>
        </div>


        


        <div class="footer-bottom mt-5">
            <div class="container">
                <div class="row py-3">
                    <div class="col-md-6 text-center text-md-start">
                        <h6 class="mb-0">&copy; 2025 Stephen King. Todos los derechos reservados.</h6>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <img src="/stephenKing/images/aboutHe/logoStephenKingSinBordes.png" alt="Logo Stephen King" class="social-img">
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    
    
    `;
    }
}
customElements.define("footer-stephen-king", MyFooter);