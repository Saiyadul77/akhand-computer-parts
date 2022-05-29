import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-20 font-bold my-10 '>
            <h1 className='text-center text-3xl my-5'>Ask and Answer</h1>
            <div>
                <h1 className='mt-5 mb-3'>1. How will you improve the performance of a React Application?</h1>
                <h2>Answer: I will improve the performance of a React Application below the way.</h2>
                <li>Keeping component state local where necessary.</li>
                <li>Memoizing React components to prevent unnecessary re-renders.</li>
                <li>Code-splitting in React using dynamic import</li>
                <li>Windowing or list virtualization in React.</li>
                <li>Lazy loading images in React</li>
            </div>
            <div>
                <h1 className='mt-5 mb-3'>2. What are the different ways to manage a state in a React application?</h1>
                <h2>Answer: The Four Kinds of React State to Manage
                    Local state. Global state. Server state. URL state..</h2>
                <p>* Local state Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.</p>
                <p>* Global (UI) state  Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                <p>* Server state  Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                <p>* URL state – Data that exists on our URLs, including the pathname and query parameters.</p>

            </div>
            <div>
                <h1 className='mt-5 mb-3'>3. How does prototypical inheritance work?</h1>
                <h2>Answer: Prototypical inheritance works below the way.</h2>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. </p>
            </div>
            <div>
                <h1 className='mt-5 mb-3'>4. Why you do not set the state directly in React. </h1>
                <h2>Answer: One should never update the state directly because of the following reasons:.</h2>
                <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                <li>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                <li>You will lose control of the state across all components.</li>
                
            </div>
            <div>
                <h1 className='mt-5 mb-3'>5. What is a unit test? Why should write unit tests?</h1>
                <h2>Answer: A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. .</h2>
                <h2>Unit test should write because unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process</h2>
            </div>
        </div>
    );
};

export default Blogs;