# Custom container

## Original

:::tip
This is a standard tip
:::

## Customized examples

### [Install plugin container](https://vuepress.github.io/en/plugins/container/)

### Input

#### In markdown file

```
::: note Notes
Netlify lets you link a GitHub, GitLab, or Bitbucket repository to a site. Each time you push to your Git provider, Netlify runs a build with your tool of choice and deploys the result to our powerful CDN.
[Learn more in the docs](#)
:::

::: internal netlify.com
Learn more in the docs
:::
```

#### In config.js

```
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
```

### Output

#### Custom note container

::: note Notes
Netlify lets you link a GitHub, GitLab, or Bitbucket repository to a site. Each time you push to your Git provider, Netlify runs a build with your tool of choice and deploys the result to our powerful CDN.
[Learn more in the docs](#)
:::

#### Custom links

::: internal netlify.com
Learn more in the docs
:::
