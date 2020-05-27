import React from 'react';

export const TestimonialCard = (props) => (
    <div class="feature-box col-lg-4">
        <img class="logopic" src={props.imgSrc} alt={props.imgAlt} />
        <h3>{props.h3Msg}</h3>
        <p>"{props.pMsg}"</p>
        <p><em>{props.from}</em></p>
    </div>
)