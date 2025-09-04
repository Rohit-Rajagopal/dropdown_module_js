# dropdown_module_js
A dropdown menu implementation.
Note: Must be used with Webpack (or any other bundler that can load css files)

## Usage

JS
- Import the initialization function.
'''
import { dropdownInit } from "@craze98101/dropdown-menu
'''
- Call the function at the bottom of your js file.

HTML
- Add the class "dropdown" to the div which will contain the button and the dropdown options.
- Add the class "dropdown-button" to the button.
- Add the class "dropdown-menu" to the div containing all the dropdown items.

This package only implements the barebones architecture for a dropdown menu.
Any additional styling (improved aesthetics, anchor tags stacking vertically, etc) can be implemented by the user at their convenience.