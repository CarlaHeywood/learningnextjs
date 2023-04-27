# Learning Next.js

Creating a simple website with Next.js and Tailwind CSS <br>
**Documentation:** <a href="https://tailwindcss.com/docs/guides/nextjs">Next.js & TailwindCSS</a>


Looking into, useStates, Props, & Hooks next


## Getting Started

```s
    npm install next react react-dom
```

### Update app scripts
Add configuation scripts to `package.json`

```json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
        }
```

### Install Tailwind CSS
```s
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

### Add Tailwind to CSS
Remove any CSS in `global.css`. Replace with Tailwind detrivatives. 
```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Add Tailwind to PostCSS Configuration
Add postcss plugin to `post.config.js`

```js
    module.exports = {
        plugins: {
            'postcss-import': {},
            tailwindcss: {},
            autoprefixer: {},
            },
        }
```
### Configure path to templates
Add the paths to all of your template files in `tailwind.config.js` file.

```js
    module.exports = {
        content: [
            './pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}'
        ],
    }
```

## Run on localhost
```s
    npm run dev
```
