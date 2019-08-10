# MiniDebounce

An extremely tiny library for debouncing.

### Installation

```
npm i mini-debounce-fn
```

### Examples

```js
import miniDebounce from "mini-debounce-fn";

window.onscroll = miniDebounce(console.log, 150);
// callback is called every 150ms
```

```js
import miniDebounce from "mini-debounce-fn";

window.onmousemove = miniDebounce(({ clientX, clientY }) => {
    console.log(`X: ${clientX}, Y: ${clientY}`);
}, 200);
```

### How it works

This library doesn't work as same as other libraries for debouncing.
Instead of clearing timeout library checks if some timeout is already running
and if so then callback won't be executed.

If this isn't your desired functionality, use some other library instead.