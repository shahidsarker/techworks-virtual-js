# JavaScript Virtual Class August 31, 2019

Agenda for today:

- Asynchronous JavaScript
- Algorithm practice

## Asynchronous Programming

When we run code, only one thing can happen at a time. Functions that depend on other functions must wait for them to complete. However, we may delegate certain functions to run separately while the rest of our code is executed. This is asynchronous programming.

JavaScript is single-threaded. This means that JavaScript can generally only execute synchronously. However, there are now tools, such as web workers, which allow for separate threads to execute code alongside the main thread.

## Asynchronous JavaScript Demo

Let's see what happens when we're working with a server and have to deal with delays

```javascript
// create an array of post objects to work with
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  // use setTimeout to mimic server, 1second wait
  setTimeout(() => {
    // create an empty output array
    let output = [];
    // run a loop over the posts array
    posts.forEach(post => {
      // push the title of each post into the output array
      output.push(post.title);
    });
    // print the output array to the console
    console.log(output);
  }, 1000);
}

// get the posts, print to console
getPosts();
```

Let's see what happens if we want to create a new post

```javascript
// create an array of post objects to work with
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  // use setTimeout to mimic server, 1second wait
  setTimeout(() => {
    // create an empty output array
    let output = [];
    // run a loop over the posts array
    posts.forEach(post => {
      // push the title of each post into the output array
      output.push(post.title);
    });
    // print the output array to the console
    console.log(output);
  }, 1000);
}

function createPost(post) {
  // use setTimeout to mimic server, 2second wait
  setTimeout(() => {
    // push the new post to the posts array
    posts.push(post);
  }, 2000);
}

// push new post to the posts array
createPost({ title: "Post Three", body: "sit amet" });

// get the posts, print to console
getPosts();
```

So what's the issue here? `getPosts` only prints the first two posts even though we are creating a new post before that. As we simulated, the server takes 1 second to get posts and 2 seconds to create a post. In other words, we are getting back the posts before the server has had a chance to save the new post.

### Callback

How do we fix that? We're gonna use a callback.
![Callback](https://media.giphy.com/media/35Kf7OnQCkPj2Ojtf6/giphy.gif "Callback GIPHY" =320x)

```javascript
// create an array of post objects to work with
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  // use setTimeout to mimic server, 1second wait
  setTimeout(() => {
    // create an empty output array
    let output = [];
    // run a loop over the posts array
    posts.forEach(post => {
      // push the title of each post into the output array
      output.push(post.title);
    });
    // print the output array to the console
    console.log(output);
  }, 1000);
}

// create a post and execute a callback
function createPost(post, callback) {
  // use setTimeout to mimic server, 2second wait
  setTimeout(() => {
    // push the new post to the posts array
    posts.push(post);
    callback();
  }, 2000);
}

// push new post to the posts array and pass in getPosts as callback to execute
createPost({ title: "Post Three", body: "sit amet" }, getPosts);
```

### Promises

![Up - Cross your heart](https://media.giphy.com/media/gPcHc12POl0c/giphy.gif "Up - Cross your heart")

A **Promise** is an object that represents whether or not an asynchronous operation completed. Instead of passing callbacks to a function, you can attach callbacks to the returned object of a Promise.

Many JavaScript libraries make use of promises so it's a good idea to be familiar with them. You won't necessarily be making your own, though.

```javascript
// create an array of post objects to work with
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  // use setTimeout to mimic server, 1second wait
  setTimeout(() => {
    // create an empty output array
    let output = [];
    // run a loop over the posts array
    posts.forEach(post => {
      // push the title of each post into the output array
      output.push(post.title);
    });
    // print the output array to the console
    console.log(output);
  }, 1000);
}

// create a post as a Promise
function createPost(post) {
  // return a new promise with resolve and reject arguments
  return new Promise((resolve, reject) => {
    // use setTimeout to mimic server, 2second wait
    setTimeout(() => {
      // push the new post to the posts array
      posts.push(post);

      //     fake the error checking built into js for Promises
      const error = false;

      //     if there isn't an error, the promise is resolved
      if (!error) {
        resolve();
        //     otherwise, the promist is rejected
      } else {
        reject("Error: Something isn't right");
      }
    }, 2000);
  });
}

// push new post to the posts array and chain getPosts so it executes if promise is resolved
createPost({ title: "Post Three", body: "sit amet" }).then(getPosts);
```

Let's see what happens if there's an error. Change `error` to `true`. If we execute the code, we get an error. However, we don't see it. We can use the `.catch` method to deal with the error returned by the promise.

```javascript
// push new post to the posts array and chain getPosts so it executes if promise is resolved, logs error otherwise
createPost({ title: "Post Three", body: "sit amet" })
  .then(getPosts)
  .catch(err => console.log(err));
```

### `Promise.all` Method

```javascript
// Set up different types of promises
const promise1 = Promise.resolve("Hi");
const promise2 = 25;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Bye")
);

// Promise.all takes an array of promises
Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

// we can also use fetch to get information from an API
// however, we need to convert the response to json to access it
const promise4 = fetch("https://pokeapi.co/api/v2/pokemon/ditto/").then(res =>
  res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  console.log(values)
);
```

## Async/Await

We can use the async/await keywords to wait for the resolution of an async function.

```javascript
// create an array of post objects to work with
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  // use setTimeout to mimic server, 1second wait
  setTimeout(() => {
    // create an empty output array
    let output = [];
    // run a loop over the posts array
    posts.forEach(post => {
      // push the title of each post into the output array
      output.push(post.title);
    });
    // print the output array to the console
    console.log(output);
  }, 1000);
}

// create a post as a Promise
function createPost(post) {
  // return a new promise with resolve and reject arguments
  return new Promise((resolve, reject) => {
    // use setTimeout to mimic server, 2second wait
    setTimeout(() => {
      // push the new post to the posts array
      posts.push(post);

      //     fake the error checking built into js for Promises
      const error = false;

      //     if there isn't an error, the promise is resolved
      if (!error) {
        resolve();
        //     otherwise, the promist is rejected
      } else {
        reject("Error: Something isn't right");
      }
    }, 2000);
  });
}

// create an async function that awaits for the function with an await keyword before executing the rest
async function init() {
  await createPost({ title: "Post Three", body: "sit amet" });
  getPosts();
}

init();
```

### Async/Await with Fetch

```javascript
// create an async function to fetch Data
async function fetchData() {
  // await the fetching of data
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");
  // await the response and convert it to json
  const data = await res.json();
  // log to console
  console.log(data);
}
// call fetchData()
fetchData();
```

## Resources

[6 Reasons Why JavaScript Async/Await Blows Promises Away (Tutorial)](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)
[Async/Await vs Promises — A Guide and Cheat Sheet](https://levelup.gitconnected.com/async-await-vs-promises-4fe98d11038f)

## Farewell

![Bye!](https://media.giphy.com/media/GB0lKzzxIv1te/source.gif "Bye")
Thank you for joining me these last few weeks despite the technical difficulties. Good luck on your coding journey!
