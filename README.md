#### Import Data

In App.jsx, import the data from data.js to render it as an array of objects. Each object should represent an individual, containing properties like name, age, and image URL.

#### Setup State Variable

Next, set up the data as a state variable using the useState hook. This enables modifications to the data, ensuring any changes are automatically reflected in the rendered output.

#### Iterate and Render

To display the number of items in the list, utilize the length property of the state variable. This information can be shown as plain text or incorporated into a message or heading element.

To render the list of individuals, iterate over the data array using the map method. For each item, create an image element (consider using inline styles to adjust the width). Additionally, render the person's name and age as plain text.

Create a List component to contain the rendered items, which can simply be a div that holds the list of Person components.

Create a Person component that displays the information for each individual. This component should accept the person data as props and render the image, name, and age.

#### Clear List

In App.jsx, include a button to clear the list and define a function that resets the state variable to an empty array.

Overall, the application flow should look like this:

-Import the data you wish to render in App.jsx.
-Set the data as a state variable using useState.
-Utilize the map method to iterate over the data array and render a Person component for each individual.
-Each Person component should display an image with a style prop for width, along with the person's name and age.
-Create a List component to hold the rendered items.
-Implement a button with functionality to clear the list.
-Display the number of items in the list using the length property of the state variable, which can be shown as plain text or included in a message or heading element.
