# Answers

1.  What is React JS and what problems does it try and solve?

  React JS is a JavaScript library, the purpose of which is to render UI components. As websites get bigger and more complex, managing the data that should be passed to each element and responding to different events that are supposed to change different data gets complicated and difficult. React gives you a way to structure your data as components and it takes care of a lot of the complexity of updating the right data for you.

2.  What does it mean to _think_ in react?

  Thinking in React means thinking about breaking your website down into components. You build out a wireframe of everything you need, then structure it with React components. Then you think about what data you'll need and where your state will live (in which components). Then you build it out :)

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

  A functional or presentational component doesn't need to manage an internal state, it can just return some presentational data or it can use props passed to it from some other component. Class or stateful components can have a little bit of presentational information but their main purpose is to hold onto some of the state data and logic of your application. They have an internal state and they manage that state with internal class methods. They use their state to pass props information to other components.

4.  Describe state.

  State is an internal ledger of data that a class component keeps and performs operations on.

5.  Describe props.

  Props are information passed from and to components in a component heirarchy.
