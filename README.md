# Geomicons Open

Open Source Icons for the Web

http://jxnblk.github.io/geomicons-open

---

## Fast, Plain &amp; Simple

Smaller than similar webfonts and making fewer network requests than other icon solutions,
Geomicons Open is built from the ground up for performance.
Designed on a grid for pixel-precision at standard sizes,
each icon is hand-coded to avoid the extra bloat from traditional vector drawing applications.

![Globe icon](http://jxnblk.github.io/geomicons-open/dev/globe.svg)

## Getting Started

Download the source or install via NPM:

```
npm install geomicons-open
```

Or use the CDN link:

```
http://d2v52k3cl9vedd.cloudfront.net/geomicons/0.2.0/geomicons.min.js
```

### Javascript Method

Include `geomicons.min.js` (3KB gzipped).

```html
<script src="geomicons.min.js"></script>
```

Add the `data-icon` attribute to any element.
See the [Icon Reference Table](#icon-reference-table) for reference.

```html
<span class="js-geomicon" data-icon="heart"></span>
```

Pass a nodelist to the `Geomicons.inject()` method to replace elements with SVG icons.

```html
<script>
  var icons = document.querySelectorAll('.js-geomicon');
  Geomicons.inject(icons);
</script>
```

### Style with CSS

Geomicons Open JS adds a style attribute with `fill:currentcolor` to inherit the foreground color.
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

If you're base font size is the browser default 16px,
you can add styles that set width and height in ems and use multiples to keep the icons pixel perfect.

```css
.geomicon {
  width: 1em;
  height: 1em;
}
```

--- 

### Alternative SVG Defs Method

For a server-side solution, you can use native SVG defs instead of the javascript method above.
This method makes zero extra network requests beyond the HTML file that includes it.

Instead of linking to the `geomicons.min.js` file, copy and paste the contents of the `geomicons-defs.svg` file in your HTML. This code will not show up in your page.

```html
<svg xmnls="http://www.w3.org/2000/svg" width="0" height="0"><defs><!-- --></defs></svg>
</body>
</html>
```

If you're using a templating system, such as Angular, React, Rails, or Jekyll, I'd recommend keeping the defs file in a component, helper, or partial for easy inclusion.

To use the icons, use the SVG `<use>` tag as shown below:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16">
  <use xlink:href="#heart"></use>
</svg>
```

You can also create partials, helper methods, or components to streamline the development process.

---

### Only using one or two icons

If you're only using one or two icons in your markup, it's probably better to paste the SVG code inline.
Open the icon SVG file and copy and paste the contents where you'd like to use it.
Be sure to adjust the `id` attribute to not conflict with other elements.

---

### Vector Drawing Applications

The SVG files in the icons folder should open in applications such as Adobe Illustrator and Sketch.
If you encounter any problems, please create an issue.

---

## Icon Reference Table

Icon    | ID
--------|--------
![bookmark](http://jxnblk.github.io/geomicons-open/icons/bookmark.svg) | bookmark
![calendar](http://jxnblk.github.io/geomicons-open/icons/calendar.svg) | calendar
![camera](http://jxnblk.github.io/geomicons-open/icons/camera.svg) | camera
![chat](http://jxnblk.github.io/geomicons-open/icons/chat.svg) | chat
![check](http://jxnblk.github.io/geomicons-open/icons/check.svg) | check
![chevron-down](http://jxnblk.github.io/geomicons-open/icons/chevron-down.svg) | chevron-down
![chevron-left](http://jxnblk.github.io/geomicons-open/icons/chevron-left.svg) | chevron-left
![chevron-right](http://jxnblk.github.io/geomicons-open/icons/chevron-right.svg) | chevron-right
![chevron-up](http://jxnblk.github.io/geomicons-open/icons/chevron-up.svg) | chevron-up
![clock](http://jxnblk.github.io/geomicons-open/icons/clock.svg) | clock
![close](http://jxnblk.github.io/geomicons-open/icons/close.svg) | close
![cloud](http://jxnblk.github.io/geomicons-open/icons/cloud.svg) | cloud
![cog](http://jxnblk.github.io/geomicons-open/icons/cog.svg) | cog
![compose](http://jxnblk.github.io/geomicons-open/icons/compose.svg) | compose
![dribbble](http://jxnblk.github.io/geomicons-open/icons/dribbble.svg) | dribbble
![expand](http://jxnblk.github.io/geomicons-open/icons/expand.svg) | expand
![external](http://jxnblk.github.io/geomicons-open/icons/external.svg) | external
![facebook](http://jxnblk.github.io/geomicons-open/icons/facebook.svg) | facebook
![file](http://jxnblk.github.io/geomicons-open/icons/file.svg) | file
![folder](http://jxnblk.github.io/geomicons-open/icons/folder.svg) | folder
![geolocation](http://jxnblk.github.io/geomicons-open/icons/geolocation.svg) | geolocation
![github](http://jxnblk.github.io/geomicons-open/icons/github.svg) | github
![grid](http://jxnblk.github.io/geomicons-open/icons/grid.svg) | grid
![heart](http://jxnblk.github.io/geomicons-open/icons/heart.svg) | heart
![home](http://jxnblk.github.io/geomicons-open/icons/home.svg) | home
![info](http://jxnblk.github.io/geomicons-open/icons/info.svg) | info
![link](http://jxnblk.github.io/geomicons-open/icons/link.svg) | link
![list](http://jxnblk.github.io/geomicons-open/icons/list.svg) | list
![loading](http://jxnblk.github.io/geomicons-open/icons/loading.svg) | loading (not available in JavaScript version)
![lock](http://jxnblk.github.io/geomicons-open/icons/lock.svg) | lock
![mail](http://jxnblk.github.io/geomicons-open/icons/mail.svg) | mail
![music-note](http://jxnblk.github.io/geomicons-open/icons/music-note.svg) | music-note
![next](http://jxnblk.github.io/geomicons-open/icons/next.svg) | next
![no](http://jxnblk.github.io/geomicons-open/icons/no.svg) | no
![pause](http://jxnblk.github.io/geomicons-open/icons/pause.svg) | pause
![picture](http://jxnblk.github.io/geomicons-open/icons/picture.svg) | picture
![pin](http://jxnblk.github.io/geomicons-open/icons/pin.svg) | pin
![play](http://jxnblk.github.io/geomicons-open/icons/play.svg) | play
![previous](http://jxnblk.github.io/geomicons-open/icons/previous.svg) | previous
![refresh](http://jxnblk.github.io/geomicons-open/icons/refresh.svg) | refresh
![repost](http://jxnblk.github.io/geomicons-open/icons/repost.svg) | repost
![search](http://jxnblk.github.io/geomicons-open/icons/search.svg) | search
![shopping-cart](http://jxnblk.github.io/geomicons-open/icons/shopping-cart.svg) | shopping-cart
![skull](http://jxnblk.github.io/geomicons-open/icons/skull.svg) | skull
![speaker-volume](http://jxnblk.github.io/geomicons-open/icons/speaker-volume.svg) | speaker-volume
![speaker](http://jxnblk.github.io/geomicons-open/icons/speaker.svg) | speaker
![star](http://jxnblk.github.io/geomicons-open/icons/star.svg) | star
![tag](http://jxnblk.github.io/geomicons-open/icons/tag.svg) | tag
![trash](http://jxnblk.github.io/geomicons-open/icons/trash.svg) | trash
![triangle-down](http://jxnblk.github.io/geomicons-open/icons/triangle-down.svg) | triangle-down
![triangle-left](http://jxnblk.github.io/geomicons-open/icons/triangle-left.svg) | triangle-left
![triangle-right](http://jxnblk.github.io/geomicons-open/icons/triangle-right.svg) | triangle-right
![triangle-up](http://jxnblk.github.io/geomicons-open/icons/triangle-up.svg) | triangle-up
![twitter](http://jxnblk.github.io/geomicons-open/icons/twitter.svg) | twitter
![user](http://jxnblk.github.io/geomicons-open/icons/user.svg) | user
![video](http://jxnblk.github.io/geomicons-open/icons/video.svg) | video
![warning](http://jxnblk.github.io/geomicons-open/icons/warning.svg) | warning

### Custom Builds

If there are icons in the set that you will not be using, you can build custom versions of the sprites with Gulp tasks.

If you're unfamiliar with Gulp, get started here: http://gulpjs.com/

To remove icons from the sprite, first remove the unwanted icons from the `/src/paths` folder.
Then run `gulp default` to create a new `geomicons.svg` file.

If you're using the defs method, run `gulp defs` to create a new `geomicons-defs.svg` file.

For a more flexible SVG tool, check out
[Grunticon](https://github.com/filamentgroup/grunticon).

### Requesting Additional Icons

This set is intended to cover the most common use cases,
and some things should just *not* be represented as an icon.
I intend to add more, but if you have any requests,
please [Create an Issue](https://github.com/jxnblk/geomicons-open/issues/new).

### Contributing

Geomicons Open is a curated set of icons.
Guidelines for contributing are coming soon.


### The MIT License (MIT)

Copyright (c) 2014 Brent Jackson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

