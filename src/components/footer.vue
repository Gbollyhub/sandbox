<template>
     <footer id="footer" class="footer wf-section">
    <div class="footer-flex-container">
      <a href="#" class="footer-logo-link"><img src="../assets/images/logo.png" alt="" class="footer-image"></a>
      <div class="div-block-2">
        <h2 class="footer-heading">Quick Links</h2>
        <ul role="list" class="w-list-unstyled">
          <li>
             <router-link to="/" class="footer-link">Home</router-link>
          </li>
          <li>
                 <router-link to="/usecases" class="footer-link">Use Cases</router-link>
          </li>
          <li>
                <router-link to="/apidocs" class="footer-link">API Docs</router-link>
          </li>
          <li>
                 <router-link to="/" class="footer-link">Feedback</router-link>
          </li>
          <li>
                 <router-link to="/contact" class="footer-link">Contact</router-link>
          </li>
          <li>
                    <router-link to="/login" class="footer-link">Login</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="footer-heading">Contacts</h2>
        <ul role="list" class="w-list-unstyled">
          <li>
            <a href="#" class="footer-link">Head Office Branch Our Head office is located at :<br>Plot 84, Ajose Adeogun Street, Victoria Island<br>Lagos, Nigeria.</a>
          </li>
          <li>
            <a href="#" class="footer-link">integrations@zenithbank.com</a>
          </li>
        </ul>
      </div>
    </div>
    <div>Copyright © 2021 Zenith Bank. All rights reserved.</div>
  </footer>
</template>