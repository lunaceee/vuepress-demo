module.exports = {
  themeConfig: {
    docsDir: "docs"
  },
  plugins: [
    [
      "container",
      {
        type: "note",
        defaultTitle: ""
      }
    ],
    [
      "container",
      {
        type: "internal",
        before: info => `<a class="fancy-link" href="${info}">`,
        after: "</a>"
      }
    ]
  ]
};
