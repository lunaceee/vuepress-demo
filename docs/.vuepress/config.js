module.exports = {
  themeConfig: {
    docsDir: "docs",
    sidebar: [
      {
        title: "Home",
        children: ["/"],
        collapsable: false
      },
      {
        title: "Group 1",
        collapsable: false,
        children: [
          "/group-1/page",
          {
            title: "Nested group 1",
            path: "/group-1/nested-group-1",
            children: [
              "/group-1/nested-group-1/page-1",
              "/group-1/nested-group-1/page-2"
            ],
            collapsable: false
          }
        ]
      },
      {
        title: "Group 2",
        collapsable: false,
        children: [
          {
            title: "Nested group 2",
            path: "/group-2/nested-group-2",
            collapsable: false,
            children: [
              "/group-2/nested-group-2/page-1",
              "/group-2/nested-group-2/page-2"
            ]
          }
        ]
      }
    ]
  }
};
