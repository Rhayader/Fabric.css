## FABRIC.CSS

Fabric.css is a pure CSS3 framework built using the principles of [Google Material Design](https://material.io).

Fabric.css was built with usability and performance in mind. Being in early stages of development, it still lacks some core functionality. Also, it isolates its classes as much as possible to make it compatible with other frameworks and CSS libraries, but if those libraries use !important to override CSS values used by Fabric.css, that might be a problem.

Want to play with the code on CodePen? [Here's the link!](https://codepen.io/songoffall/project/editor/DGREEB)

### Why use Fabric.css?

Unlike many other CSS frameworks, Fabric.css is highly modifiable, consistent and both desktop and mobile friendly. It is also open source (more in "Licensing").

### Dependencies

The main stub includes links to all the dependencies used by the project. At this point, those are:
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Material icons](https://material.io/icons/)

### The files included with the project
Fabric.css is highly modular. Each module performs a certain function and might be replaced or removed if the user wishes.
- **fabric.css** The main stub, used to load dependencies and the modules of the project. Also contains additional overrides. This is the file you should include in your HTML for Fabric.css to function.
- **animation.css** Handles the animations and their durations.
- **components.css** Component-specific classes (rounded corners, etc., separate for each component), which do not require consistency in the code.
- **elevation.css** Elevations - z-index and shadow values for different component groups.
- **layout.css** 12 column grid layout, as well as measurements and spacing of component groups.
- **palette.css** The color palette of Fabric.css
- **typography.css** Typography-related CSS classes.

### Documentation

Sadly, there is none at the moment. There's a demo **index.html** file included with Fabric.css you can take a look at. Once Fabric.css is fully functional, I'll build a complete documentation around it.

The code itself is fairly simple and easy to understand and modify.

### Licensing

Fabric.css was created by Bayandur "Rhayader" Poghosyan. It is available under **Creative Commons Attribution 4.0** license. You are encouraged to contribute to Fabric.css, adapt, use or modify it as you see fit.
