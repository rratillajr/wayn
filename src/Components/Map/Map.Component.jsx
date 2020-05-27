import React from 'react';

const mapEmbedURL = `https://www.google.com/maps/embed/v1/place?
key=AIzaSyDbeuWmZ8KEr016vuR0uHUlwROPnhVWYSc
&q=`;

export const Map = (props) => (
    <div className='map'>
      <iframe
          title={props.title}
          width={props.width}
          height={props.height}
          frameBorder="0" style={{"border":"0","height":"85vh"}}
          src={mapEmbedURL+props.coords} allowFullScreen >
      </iframe>
    </div>
)