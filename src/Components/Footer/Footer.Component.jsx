import React from 'react';

export const Footer = (props) => (
    <div>
        <footer class="page-footer font-small indigo pt-4"> 
        <h4 class="mb-5 font-weight-bold">Follow Us on Social Media</h4>

        <section id="social-buttons">

        <button type="button" class="btn btn-primary btn-fb">
            <a href="https://www.facebook.com/klawdgeeks" target="_blank">
            <i class="fab fa-facebook-f pr-1"></i>
            <span>Facebook</span></a>
        </button>
        
        <button type="button" class="btn btn-light-blue btn-tw">
            <a href="https://www.twitter.com/klawdgeeks" target="_blank">
            <i class="fab fa-twitter pr-1"></i>
            <span>Twitter</span></a>
        </button>
        
        <button type="button" class="btn btn-mdb-color btn-ins">
            <a href="https://www.instagram.com/klawdgeeks" target="_blank"> 
            <i class="fab fa-instagram pr-1"></i>
            <span>Instagram</span></a>
        </button>
        </section>

        <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://klawdgeeks.com" target="_new"> Klawd Geeks</a>
        </div>
    </footer>
    </div>
)