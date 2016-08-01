
# Geomicons Open

Hand-Coded Open Source Icons for the Web http://geomicons.com

[![Build Status](https://travis-ci.org/jxnblk/geomicons-open.svg?branch=master)](https://travis-ci.org/jxnblk/geomicons-open)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Fast, Plain & Simple

Smaller than similar webfonts,
Geomicons Open is built from the ground up for performance.
Designed on a grid for pixel-precision at standard sizes,
each icon is hand-coded to avoid the extra bloat from traditional vector drawing applications.

## Getting Started

```
npm i geomicons-open
```

```js
var geomicons = require('geomicons-open')

var pathData = geomicons.heart // Returns the path's d attribute value
var svgString = geomicons.toString('heart') // Returns an SVG string
```

### Copy/Paste

If you're only using one or two icons in your markup, it's probably better to paste the SVG code inline.
Copy the icon from the [website](//geomicons.com)
or open the icon SVG file and copy and paste the SVG code.

### Vector Drawing Applications

The SVG files in the `dist/icons` folder should open in applications such as Adobe Illustrator and Sketch.
If you encounter any problems, please create an issue.


### React

A React component for Geomicons Open is available on NPM.

```bash
npm i react-geomicons
```

See [react-geomicons](//github.com/jxnblk/react-geomicons) for more details.

---

### Styling inline SVG with CSS

Inline SVGs can be styled with CSS, just like any other HTML element.
Geomicons Open icons have the `fill` attribute set to `currentcolor` to inherit the foreground color.
Set the width, height, and other properties with additional CSS.

### Sizing

Each icon is designed on a 32 x 32px grid. This means icons will look best at multiples of 16. I recommend sizing icons based on your type scale, or using one of the following sizes: **16, 24, 32, 48, or 64px**.

#### 1em

Leaving the default browser font size set at 16px,
you can add styles that set width and height in ems and use multiples to keep the icons pixel perfect.

```css
.geomicon {
  width: 1em;
  height: 1em;
}
```

MIT License

