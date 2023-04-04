# SVG Background Image TailwindCSS Plugin

## Installation

Install with a package manager:

```bash
# Install via npm
npm install --save-dev tailwindcss-svg-background

# or yarn
yarn add tailwindcss-svg-background --dev

# or pnpm
pnpm add -D tailwindcss-svg-background
```

## Usage

The plugin allows you to add SVG background images and style them with your TailwindCSS colors. It replaces the text `{{svgcolor}}` with the color by default.

Example.

```js
module.exports = {
  theme: {
    svgBackgrounds: {
      invalid:
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='{{svgcolor}}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='{{svgcolor}}' stroke='none'/></svg>",
      search: //...
    },
    // ...
  },
  plugins: [
    require("tailwindcss-svg-background"),
    // ...
  ],
};
```

```html
<input class="bg-svg-invalid-red-500" />
<span class="bg-svg-search-[#0000FF]">...</span>
```

Generated CSS:

```css
.bg-svg-invalid-red-500 {
  background-image: url("data:image/svg+xml,....");
}

.bg-svg-search-\[\#0000FF\] {
  background-image: url("data:image/svg+xml,....");
}
```

## Options

The plugin provides options for generating the classes

| Options       | Default Value  |                             Description |
| ------------- | :------------: | --------------------------------------: |
| `classPrefix` |    `bg-svg`    |                  Utility class prefix |
| `replaceText` | `{{svgcolor}}` | Text to replace with color value in SVG |

```js
module.exports = {
  theme: {
    svgBackgrounds: {
      //...
    },
  },
  plugins: [
    require("tailwindcss-svg-background")({
      classPrefix: "my-svg-bg",
      replaceText: "{{color}}",
    }),
    // ...
  ],
};
```
