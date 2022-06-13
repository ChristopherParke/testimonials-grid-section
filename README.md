# Testimonials Grid Section

The component is built using React.js and CSS grid.

To view the working example, CLICK HERE: <a href='https://christopherparke.github.io/testimonials-grid-section/' target='_blank'>https://christopherparke.github.io/testimonials-grid-section/</a>

This project is the solution to a challenge on [frontendmentor.io](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7).


### Challenge Details
Your challenge is to build out this testimonials grid section and get it looking as close to the design as possible.

![image](https://user-images.githubusercontent.com/22480193/173357302-d03586e6-f402-4526-8bfb-1a325a9cd156.png)

![image](https://user-images.githubusercontent.com/22480193/173357364-d8c9f5da-ffde-428d-912b-04f7f8954615.png)

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:
- View the optimal layout for the site depending on their device's screen size


### My process

I tried to make my "Card" component as dynamic as possible. So the card component takes a lot of style custimization as data which is fed through as props.  In this example I simply have an array of objects with the required fields for the given cards.  The idea is that this could scale up to where you are pulling data about the testimonials from an API, and rendering a dynamic list of testimonial cards.

I used CSS grid with media queries to achieve the layout.  Grid was appropriate over flexbox because grid is two-dimensional while flexbox is one-dimensional.  This made the amount of code required to achieve this layout much quicker and easier write.
