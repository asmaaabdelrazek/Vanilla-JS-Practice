# Statistics Counter Section

A responsive statistics counter section inspired by real-world websites.

## Features
- Animated number counters that increment smoothly from 0 to their target values.
- Each counter reads its target from a `data-target` attribute.
- Responsive layout using CSS Grid and Flexbox.
- Clean and modern UI for statistics or achievements sections.

## Technologies Used
- HTML5
- CSS3 (Flexbox & Grid)
- Vanilla JavaScript (DOM manipulation, `setTimeout`)

## Screenshot
![Statistics Counter Screenshot](Screenshot.png)

## How It Works
- JavaScript selects all elements with the class `.counter`.
- Each counter starts at 0 and increments gradually until it reaches its `data-target`.
- Numbers are formatted using `toLocaleString()` for readability.

## Use Cases
- Displaying statistics, achievements, or milestones
