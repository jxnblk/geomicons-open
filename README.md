# Geomicons Open

Hand-Coded Open Source Icons for the Web http://geomicons.com

## Fast, Plain & Simple

Smaller than similar webfonts and making fewer network requests than other icon solutions,
Geomicons Open is built from the ground up for performance.
Designed on a grid for pixel-precision at standard sizes,
each icon is hand-coded to avoid the extra bloat from traditional vector drawing applications.

## Getting Started

Download the source or install via npm or Bower:

```
npm install geomicons-open
```

```
bower install geomicons-open
```

### Client-side Javascript Usage

Include the client-side JavaScript file.

```html
<script src="geomicons.min.js"></script>
```

Add the `data-icon` attribute with an icon name to an element.

```html
<span class="js-geomicon" data-icon="heart"></span>
```

Pass a nodelist to the `geomicons.inject()` method to replace elements with SVG icons.

```html
<script>
  var icons = document.querySelectorAll('.js-geomicon');
  geomicons.inject(icons);
</script>
```

---

### Node Usage

```js
var geomicons = require('geomicons-open');

var pathData = geomicons.paths.heart; // Returns the path's d attribute value
var svgString = geomicons.toString('heart'); // Returns an SVG string
```

---

### SVG Defs Usage

For a server-side solution, you can use native SVG defs instead of the javascript method above.
This method makes zero extra network requests beyond the HTML file that includes it.

Instead of linking to the `geomicons.min.js` file, copy and paste the contents of the `dist/geomicons-defs.svg` file in your HTML. This code will not show up in your page.

```html
<svg xmnls="http://www.w3.org/2000/svg" width="0" height="0"><defs>...</defs></svg>
```

Use the SVG `<use>` tag to create an instance of an icon.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16">
  <use xlink:href="#heart"></use>
</svg>
```

You can also create partials, helper methods, or components to streamline the development process.

---

### Copy/Paste

If you're only using one or two icons in your markup, it's probably better to paste the SVG code inline.
Copy the icon from the [website](//geomicons.com)
or open the icon SVG file and copy and paste the SVG code.
Be sure to adjust the `id` attribute to not conflict with other elements.

---

### Vector Drawing Applications

The SVG files in the `dist/icons` folder should open in applications such as Adobe Illustrator and Sketch.
If you encounter any problems, please create an issue.

---

### React

A React component for Geomicons Open is available on NPM.

```bash
npm install react-geomicons
```

See [react-geomicons](//github.com/jxnblk/react-geomicons) for more details.

---

### Styling inline SVG with CSS

Inline SVGs can be styled with CSS, just like any other HTML element.
Geomicons Open icons have the `fill` attribute set to `currentcolor` to inherit the foreground color.
Set the width, height, and other properties with additional CSS.

```html
<style>
  .geomicon { width: 1em; height: 1em; }
</style>
<span class="js-geomicon geomicon" data-id="heart"></span>
```


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

---

### Requesting Additional Icons

This set is intended to cover the most common use cases,
and some things are *not* well suited to be represented as an icon.
I intend to add more, but if you have any requests,
please [Create an Issue](https://github.com/jxnblk/geomicons-open/issues/new).

### Contributing

Geomicons Open is a curated set of icons.
Guidelines for contributing are coming soon.


MIT License

