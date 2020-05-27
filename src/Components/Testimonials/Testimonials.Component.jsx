import React from 'react';

export const Testimonials = (props) => (
    <div>
        <section id="features">
            <h1 class="testimonials">Testimonials</h1>
            <div class="container testimonials">
            <div class="row">
             {props.children}
            </div>
            </div>
        </section>
    </div>
)