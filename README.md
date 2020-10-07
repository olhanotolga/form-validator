# Form Validator

1. Clone the repo: `git clone https://github.com/olhanotolga/form-validator.git`
2. Navigate to the repo: `cd form-validator`
3. Install the Live Server package by running `npm install` from the command line
4. To run the Live Server, use the following command: `npm run server:start`
5. You are good to go :four_leaf_clover:

****************************************

**Note:** For some reason, when I refer to an external script in the `<script>` tag,
`<script type="text/javascript" src="index.js" ></script>`
I keep seeing the following error in my browser console:
`Uncaught SyntaxError: Unexpected token '<'`

In the browser's Dev Tools, I can see that, for some reason, the contents of my `index.html` are being displayed instead of the contents of my `index.js`

This error occurs **only** when I use `Live Server` as a npm package AND when I have my JS code in a separate file. When I use the `Live Server` as a VSCode extension OR/AND have the JS code within the `<script>` tag in the HTML file, everything works just fine.
