import React from 'react'

const SVGRdv = ({width = 32, height = 32, className = 'svg'}) => 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height}  viewBox="0 0 600 600">
  <g stroke="none">
    <path d="M197 534 c-4 -4 -7 -24 -7 -45 0 -41 -11 -49 -64 -49 -59 0 -71 -18 -71 -105 0 -64 3 -79 19 -91 40 -28 86 -6 86 42 0 19 5 24 25 24 19 0 25 -5 25 -21 0 -26 52 -79 79 -79 48 0 91 40 91 85 0 9 10 15 25 15 20 0 25 -5 25 -23 0 -27 28 -57 53 -57 37 0 57 37 57 103 0 80 -17 107 -68 107 -50 0 -64 11 -71 56 -5 30 -11 39 -26 39 -18 0 -20 -7 -20 -70 l0 -70 38 -9 c69 -18 37 -26 -98 -26 -135 0 -167 8 -97 26 l37 9 0 70 c0 55 -3 70 -15 73 -9 1 -19 0 -23 -4z"/>
    <path d="M65 176 c-33 -50 20 -104 70 -72 27 18 34 63 13 84 -21 21 -66 14 -83 -12z"/>
    <path d="M440 181 c-16 -31 -12 -59 12 -75 30 -21 44 -20 68 4 24 24 26 53 4 74 -22 23 -71 20 -84 -3z"/>
    <path d="M256 164 c-22 -21 -20 -50 4 -74 24 -24 38 -25 68 -4 24 16 28 44 12 75 -13 23 -62 26 -84 3z"/>
    </g>
  </svg>

export default SVGRdv