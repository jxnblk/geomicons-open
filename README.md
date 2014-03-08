# Geomicons Open
Open Source Icons for the Web

http://jxnblk.github.io/geomicons-open

## Fast, Plain &amp; Simple
Smaller than similar webfonts and making fewer network requests than other icon solutions, Geomicons Open is built from the ground up for performance. Designed on a grid for pixel-precision at standard sizes, each icon is hand-coded to avoid the extra bloat from traditional vector drawing applications.

![Globe icon](http://jxnblk.github.io/geomicons-open/dev/globe.svg)

## Usage
### Javascript Method
Link to or include the `geomicons.js` (648 bytes) just before the closing `body` tag in your HTML.

```html
<script src="geomicons.js"></script>
</body>
```

Include the `geomicons.svg` file with your project. By default, the javascript looks for `geomicons.svg` in the same folder.

To change the location, adjust the `iconUrl` variable in `geomicons.js`.
```js
// Location of svg sprite
var iconUrl = 'geomicons.svg';
```

Use the following markup wherever you want an icon to appear. Be sure to include the `.geomicons` class and adjust the `data-id` attribute to match the icon you want.
```html
<span class="geomicon" data-id="heart"></span>
```
The javascript will replace this markup with an inline SVG and keep any classes you've added.

See the [Icon Reference Table](#icon-reference-table) to find the proper id.

### Style with CSS
SVGs have different properties than HTML elements. To change the color, use the `fill` property.

```html
<style>
  .fill-red { fill: red; }
</style>
<span class="geomicon fill-red" data-id="heart"></span>
```

See the `geomicons.css` file for a simple example of how to get started.

### Sizing
Each icon is designed on a 32 x 32px grid. This means icons will look best at multiples of 16. I recommend sizing icons based on your type scale, or using one of the following sizes: 16, 24, 32, 48, 64.

--- 

### Alternative SVG Defs Method
For even faster network performance, you can use native SVG defs instead of the javascript method above. This method require zero extra network requests.

Instead of linking to the `geomicons.js` file, copy and paste the contents of the `geomicons-defs.svg` file in your HTML. This code will not show up in your page.
```html
<svg xmnls="http://www.w3.org/2000/svg" width="0" height="0"><defs><path ...
</body>
</html>
```

If you're using a templating system, such as Jekyll, I'd recommend keeping the defs file in a partial for easy inclusion.

To use the icons, use the SVG `<use>` tag as shown below:
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16"><use xlink:href="#heart"></use></svg>
```

Note: the loading icon does not currently work with the defs method.

---

## Icon Reference Table

Icon    | ID
--------|--------
![bookmark](http://jxnblk.github.io/geomicons-open/icons/bookmark.svg) | bookmark
![calendar](http://jxnblk.github.io/geomicons-open/icons/calendar.svg) | calendar
![camera](http://jxnblk.github.io/geomicons-open/icons/camera.svg) | camera
![chevron-down](http://jxnblk.github.io/geomicons-open/icons/chevron-down.svg) | chevron-down
![chevron-left](http://jxnblk.github.io/geomicons-open/icons/chevron-left.svg) | chevron-left
![chevron-right](http://jxnblk.github.io/geomicons-open/icons/chevron-right.svg) | chevron-right
![chevron-up](http://jxnblk.github.io/geomicons-open/icons/chevron-up.svg) | chevron-up
![chat](http://jxnblk.github.io/geomicons-open/icons/chat.svg) | chat
![check](http://jxnblk.github.io/geomicons-open/icons/check.svg) | check
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
![loading](http://jxnblk.github.io/geomicons-open/icons/loading.svg) | loading
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

If you're unfamiliar with Gulp, get set up here: http://gulpjs.com/

To remove icons from the sprite, first remove the unwanted icons from the `/icons` folder. Then run `gulp sprite` to create a new `geomicons.svg` file.

If you're using the defs method, run `gulp defs` to create a new `geomicons-defs.svg` file.

Currently, these Gulp tasks aren't very flexible, but if you're daring and would like to attempt to add your own icons, the SVGs must:
- Have a unique `id` attribute.
- Contain only a single `path` element.

For more powerful SVG tools, I'd suggest [Grunticon](https://github.com/filamentgroup/grunticon).

### Requesting Additional Icons
This set is intended to cover the most common use cases, and some things should just *not* be represented as an icon. I intend to add more, but if you have any requests, please [Create an Issue](https://github.com/jxnblk/geomicons-open/issues/new).

### Contributing
Geomicons Open is a curated set of icons. Guidelines for contributing are coming soon.

If you'd like to help improve the Gulp tasks, javascript or other development aspects, please do. I could use the help.

[MIT License](http://opensource.org/licenses/MIT)

