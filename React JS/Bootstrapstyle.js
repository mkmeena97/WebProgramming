import 'bootstrap'
function BootstrapStyle(){
    return(
       <div>
        <p className="text-center text-uppercase display-4 " >Features of React</p>
        <table className='table-bordered'>
            <thead className='thead-dark'>
            <tr>
                <th>Component-Based Architecture:</th>
                <td>React encourages a modular approach to building user interfaces through reusable components. Components encapsulate their own logic, state, and rendering, allowing for easier development, maintenance, and code reusability.</td>
            </tr>
            </thead>

            <thead>
            <tr>
                <th>Virtual DOM: </th>
                <td> React utilizes a virtual representation of the DOM (Document Object Model) known as the Virtual DOM. It efficiently updates and re-renders only the necessary components and elements, minimizing the actual manipulation of the real DOM. This approach improves performance and optimizes the rendering process.</td>
            </tr>
            </thead>

            <thead>
            <tr>
                <th>JSX:</th>
                <td>React introduces JSX (JavaScript XML), an extension to JavaScript that allows you to write HTML-like syntax within your JavaScript code. JSX simplifies the process of composing components and makes the code more readable and expressive.</td>
            </tr>
            </thead>

            <thead>
            <tr>
                <th>Unidirectional Data Flow(one way binding)</th>
                <td>React enforces a unidirectional data flow, also known as one-way binding. Data flows from parent components down to child components via props, and changes in data trigger re-renders. This approach makes it easier to understand and track data changes, improving code predictability and reducing bugs.</td>
            </tr>
            </thead>

            <thead>
            <tr>
                <th>State Management</th>
                <td>React provides a built-in mechanism for managing component state. State allows components to manage and track internal data that can change over time. By updating and manipulating state, components can trigger re-rendering and reflect the changes in the user interface.</td>
            </tr>
            </thead>

            <thead>
            <tr>
                <th>Lifecycle Methods: </th>
                <td>React components have a set of lifecycle methods that provide hooks into different stages of a component's life, such as initialization, rendering, and unmounting. These methods allow you to perform specific actions or logic at different points in a component's lifecycle, such as fetching data, subscribing to events, or performing cleanup operations.</td>
            </tr>
            </thead>

            <thead>
            <tr>
                <th>React Hooks:</th>
                <td>Introduced in React 16.8, hooks allow you to use state and other React features in functional components without using class components. Hooks provide a more concise and flexible way to manage state, handle side effects, and reuse logic within functional components.</td>
            </tr>
            </thead>

            <thead>
            <tr>
                <th>React Router</th>
                <td>React Router is a popular routing library that enables client-side routing in React applications. It allows you to define routes and navigation within your application, enabling the creation of single-page applications (SPAs) with multiple views and dynamic routing.</td>
            </tr>
            </thead>
        </table>

       </div>
        
    )
}
export default BootstrapStyle;