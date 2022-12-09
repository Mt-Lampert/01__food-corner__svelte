## Good to know

- Svelte material icons can be found [here.](https://github.com/ramiroaisen/svelte-material-icons#readme)

## TODO (some time)

- [x] ~~Research about Icons in Svelte~~
- [ ] Do the footer with icons.
- [ ] Do the landing page
- [ ] Do the Menu


## 2022-12-09 20:15

Finishing a successful day. I got the routing and the linking just as planned, learned a few things, learned one important hack and have a well-earned Feierabend. Very nice!


## 2022-12-09 18:156

Vitest with Svelte requires new ways to test components that have a  `<Link />` element inside. They need a `<Router />` environment in order to work. If not, they throw an error like this:

```
Cannot destructure property 'base' of 'getContext(...)' as it is undefined.
```

The solution I found is the simplest of wrappers:

```javascript
<script>
  import { Router } from 'svelte-routing'
  import Navbar from './Navbar.svelte'
</script>

<Router>
  <Navbar />
</Router>
```

Now I could test the wrapped `<Navbar />`. Vitest was happy.

## 2022-12-09 08:30

### TODO ROUTING


- [x] ~~install `svelte-routing`~~
- [x] ~~outline the routes in a basic fashion~~
- [x] ~~check the routes in the browser.~~
- [x] ~~report and commit.~~

__UPDATE:__ All went well. Routes are fine.


## 2022-12-08 21:10

Installed the testing environment strictly following the official documentation. Paid off very well.` 

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

