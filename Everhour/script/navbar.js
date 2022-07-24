function navbarcall(){
  return `<div id="container">
  <div id="left">
    <div>
      <img src="data:image/png;base64,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" alt="">
    </div>
    
  </div>

  <div id="middle">
    <header>
      <nav class="navbar">
       
        <a href="index.html" class="nav-branding">Everhour</a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="tour.html" class="nav-link">Tour</a>
          </li>
          <li class="nav-item">
            <a href="inti.html" class="nav-link">Integration</a>
          </li>
          <li class="nav-item">
            <a href="coustomers.html" class="nav-link">Coustomers</a>
          </li>
          <li class="nav-item">
            <a href="pricing.html" class="nav-link">Pricing</a>
          </li>
          <li class="nav-item">
            <a href="demo.html" class="nav-link">Demo</a>
          </li>
          <li class="nav-item">
            <button id="signin"><a href="signin.html" class="nav-link">Sign  In</a></button>
          </li>
          <li class="nav-item">
            <button id="signup"><a href="signup.html" class="nav-link">Sign Up</a></button>
          </li>
    
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
    
      </nav>
     </header>               
</div>`
  
}

export default navbarcall()


