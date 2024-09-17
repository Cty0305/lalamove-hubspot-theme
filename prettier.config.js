module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  printWidth: 80,
  proseWrap: "never",
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "html",
        plugins: ["prettier-plugin-hubl"], // 確保安裝了這個插件
      },
    },
    {
      files: "*.css",
      options: {
        parser: "css",
      },
    },
  ],
};
