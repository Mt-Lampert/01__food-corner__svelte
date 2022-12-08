## 2022-12-08 21:10

Installed the testing environment strictly following the official documentation. Paid off very well.

## 2022-12-08 17:45

Personal Resumee: Installing Bulma into a Vite -- Svelte project is best done like this:

```bash
$ npm create @svelte-add/vite@latest my-new-svelte-vite-app -- --with bulma+scss
```

This will build a new project with bulma and Sass included. If the project already exists, we can add the extensions one by one:

```bash
$ npx --yes svelte-add@latest bulma
$ npx --yes svelte-add@latest scss
```

I chose the second option with these packages and everything worked fine so far.

