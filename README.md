# css-only-illustrations
All parts of the illustration image is html tags that are styled with css. Animations is done with key frames and/or Javascript.

All the illustrations uses [scss](https://sass-lang.com/) stylesheet and [pug-cli](https://github.com/pugjs/pug-cli) template engine to get more powerful tools to use such as loops inside both html and css. Sccs and pug also gives to code a cleaner syntax that makes it more understandable and more readible.


**Smiley_face**, **Polaroid** and **lighthouse** is based on Agathe Cocco tutorial. [Link here.](https://dev.to/agathacco/how-to-create-pure-css-illustrations-and-animate-them---part-1-1j1k)

**Rocket**, **House** and **Headphones** are my own creations from scratch with the knowledge learned from the above mention tutorial.

## Demo
[Smiley_face](https://johandjarvkarltorp.github.io/css-only-illustrations/smiley_face)

[Polaroid](https://johandjarvkarltorp.github.io/css-only-illustrations/polaroid)

[lighthouse](https://johandjarvkarltorp.github.io/css-only-illustrations/lighthouse)

[Rocket](https://johandjarvkarltorp.github.io/css-only-illustrations/rocket)

[House](https://johandjarvkarltorp.github.io/css-only-illustrations/house)

[Headphones](https://johandjarvkarltorp.github.io/css-only-illustrations/headphones)

## Setup and Configuration
If you want to edit the illustrations:
- clone the repo `git@github.com:JohanDjarvKarltorp/css-only-illustrations.git`
- If you do not already have installed pug-cli, install using npm: `npm install pug-cli`
- If your do not already have installed Sass, install using npm: `npm install sass`

To watch your source files for changes, and re-compile each time you save: 

pug: `pug -w ./ -o ./ -P`. [docs](https://github.com/pugjs/pug-cli)

sass: `sass --watch style.scss style.css`. [Docs](https://sass-lang.com/guide)

Now when you save your changes in `index.pug` and/or `style.scss` the changes will be re-complie into `index.html` and/or `style.css`.

To view the illustration simply open `index.html` in your browser.
