const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const defaultOptions = {
  classPrefix: "bg-svg",
  replaceText: "{{svgcolor}}",
};

module.exports = plugin.withOptions(
  function (options = defaultOptions) {
    return function ({ matchUtilities, theme }) {
      matchUtilities(
        Object.fromEntries(
          Object.entries(theme("svgBackgrounds")).map(([name, svg]) => [
            // Set utility name
            `${options.classPrefix || defaultOptions.classPrefix}-${name}`,
            (value) => ({
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                svg.replaceAll(
                  options.replaceText || defaultOptions.replaceText,
                  value
                )
              )}")`,
            }),
          ])
        ),

        { values: flattenColorPalette(theme("colors")) }
      );
    };
  },
  function () {
    return {
      theme: {
        svgBackgrounds: {},
      },
    };
  }
);
