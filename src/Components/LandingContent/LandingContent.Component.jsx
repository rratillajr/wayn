import React from 'react';

export const LandingContent = (props) => (
    <div id="intro" class="view">
    <div class="mask rgba-black-light"> 
      <div class="container-fluid d-flex align-items-center justify-content-center h-100">
          <div class="row d-flex justify-content-center text-center">
              <div class="col-md-10">
                  <h2 class="SiteName">Where Are You Now?</h2>
<span id="foo">https://github.com/zenorocha/clipboard.js.git</span>

<button class="cp-btn" data-clipboard-target="#foo">
    <img src="assets/clippy.svg" alt="Copy to clipboard" />
</button>
                  </div>
                  <p>Send this link to anyone you're looking for.</p>
              </div>
          </div>
      </div>
  </div>
    
)