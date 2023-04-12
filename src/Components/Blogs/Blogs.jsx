import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='w-full  '>
          <div className='bg-[#7e8ffe18] relative'>
                <h1 className='text-center text-3xl font-bold py-28'>Blog</h1>
                <img className='absolute bottom-0 left-0' src="https://i.ibb.co/28zqbPc/Vector.png" alt="Vector" border="0" />
                <img className='absolute -top-24 right-0' src="https://i.ibb.co/jV022Jb/Vector-1.png" alt="Vector-1" border="0" />
            </div>
          </div>
            <div className='w-3/4 py-12 mx-auto'>
                <h1 className='text-center text-4xl font-bold py-12'>Here are few Questions and Answers:</h1>
                <div className='space-y-8'>
                    <h1><span className='font-semibold'>Usage of context API:</span>The Context API is a feature of React that allows us to share data between components without the need to pass props down through the component manually. It is designed to simplify data management in large React applications, making it easier to maintain and update the state of your application. By using the Context API in this way, we can easily share data between components without having to pass props down through the component tree manually. This can help simplify your code and make it easier to maintain as your application grows in complexity.</h1>
                    <h1><span className='font-semibold'>What is custom hook?</span>In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic between components. Custom hooks allow you to extract and reuse logic from multiple components, making your code more modular and reusable.Custom hooks can be used to share logic related to data fetching, form handling, and more. By creating reusable hooks, you can reduce duplication in your code and make your components more modular and easy to maintain.</h1>
                    <h1><span className='font-semibold'>What is useRef and useMemo?</span>useRef is a built-in hook in React that returns a mutable ref object whose current property is initialized to a specified value. The useRef hook can be used to access or modify a DOM element, store a mutable value that persists across renders, and create a reference to a value that can be shared between components. <br />useMemo is a built-in hook in React that is used to optimize the performance of a component by caching the result of an expensive function or calculation. The useMemo hook allows you to memoize a value based on some dependencies, such as props or state, and only recompute the value when the dependencies have changed.

                        The useMemo hook takes two arguments: a function that returns a value, and an array of dependencies. The function is only re-executed if one or more of the dependencies has changed. The useMemo hook returns the memoized value, which can be used in the component just like any other value.</h1>
                </div>
            </div>
        </div>
    );
};

export default Blogs;