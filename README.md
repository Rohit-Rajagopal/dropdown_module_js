# dropdown_module_js
A dropdown menu implementation.
Note: Must be used with Webpack (or any other bundler that can load css files)

## Usage

### JS
- Import the initialization function.

```js
import { dropdownInit } from "@craze98101/dropdown-menu
```
- Call the function at the bottom of your js file.

### HTML
- Add the class "dropdown" to the div which will contain the button and the dropdown options.
- Add the class "dropdown-button" to the button.
- Add the class "dropdown-menu" to the div containing all the dropdown items.

```html
<div class="dropdown">
  <button class="dropdown-button">Click</button>
  <div class="dropdown-menu">
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
  </div>
</div>
```

### Styling
This package only implements the barebones architecture for a dropdown menu.
Any additional styling (improved aesthetics, anchor tags stacking vertically, etc) can be implemented by the user at their convenience.
For example, to stack anchor tags vertically:

```css
.dropdown-menu a {
  display: block;
}
```