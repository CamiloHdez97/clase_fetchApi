class NavBar extends HTMLElement{

    constructor (){
        super();
        this.render();
    }

render(){

    this.innerHTML = /* HTML */ `
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
  <a class="navbar-brand" href="index.html"><img src="img/ventas_logo.png" width="60px"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="clientes.html">Clientes</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="ventas.html">Ventas</a>
      </li>
    </ul>
  </div>
</nav>

    `;

}

}

customElements.define("main-nav-bar", NavBar);