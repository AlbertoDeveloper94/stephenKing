class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <header>
      <nav id="navigation" class="navbar navbar-expand-lg borderBottom p-4">
        <div class="container-fluid">
          <div class="d-flex align-items-center justify-content-center col-6">
            <a href="" class="navbar-brand">
              <img
                src="images/logo/StephenKingLogo.png"
                alt=""
                class="logoSize"
              />
            </a>
            <h1 class="letterSpacing ms-4">STEPHEN KING</h1>
          </div>
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span class="navbar-toggler-icon navbar-dark"></span>
          </button>
          <div
            class="navbar-collapse collapse justify-content-around col-6"
            id="menu"
          >
            <ul class="navbar-nav d-flex justify-content-around w-100">
              <li class="nav-item text-center">
                <a href="" class="nav-link text-white">Autor</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    `;
  }
}
customElements.define("header-stephen-king", MyHeader);
