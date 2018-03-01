# Intro to Responsive Design

---

## Objectives

- Review jQuery calculator example
- Understand how and why to use media queries on a website
- Change the styling on a page depending on screen size

## Calculator Review

## Responsiveness

Media queries are what developers use to set different styles based on screen size. By specifying a screen width, you can change the appearence of your sites layout, font size, etc.

Remember that CSS is read from top to bottom! Because of this, we put media query styles on the bottom of the page so that they can override any conflicting styles

### Setting up media queries

First we need to go into our HTML file. Inside the `<head>` add a `<meta>` tag that says the following:

```HTML

<meta name="viewport" content="width=device-width, initial-scale=1">

```

This is needed to make our web pages responsive and of course, we *always* want to make our pages responsive. 

Next, we need to go into our CSS and add the following:

```CSS

@media screen and (max-width: 768px) {
    /* your styles here */
}

```

The styles between the bracket will affect screen sizes with a width of 768px down. This works great, but since there are many different screen sizes, you generally want to create multiple queries. You can nest them below each other and due to the cascade, these styles will too override any conflicting styles above it.

```CSS

@media screen and (max-width: 768px) {
    /* styles affect screen sizes from 768px down*/
    /* these styles override conflicting styles above it */
}

@media screen and (max-width: 425px) {
    /* styles affect screen sizes from 425px down */
    /* these styles override conflicting styles above it */
}

```

You can set your query for different types of media. Many times you will see them set for regular screens (e.g. computers, laptops, phones, etc) but you can also use media queries to display a page differently when it is going to be printed.

```CSS

@media print and (max-width: 768px) {
    /* your print styles here */
}

```

### Media Query Practice

[This](starter_code) will take you to starter code for a project. Follow the instructions in the CSS file to change the styles at different widths.