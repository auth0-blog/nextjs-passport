# Next.js Authentication Tutorial

So you are thinking about developing your next great application with Next.js, huh? Or maybe you already started developing it and now you want to add authentication to your app. Either way, you are in the right place. If you are just starting to build your app with Next.js, now it is a good time to learn how to add authentication to it. If you already have something going on, it is never late to add authentication the right way.

In this article, you will learn how to leverage [Passport](http://www.passportjs.org/) to secure your Next.js app. What is cool about the approach you will learn here is that it even supports Server-Side Rendering (SSR) of protected routes. That is, with this setup, if an unknown user requests a secured route (those that are only accessible by authenticated users), your app will redirect them to the login page. On the other hand, if an authenticated user tries to load the same route, your Next.js app will recognize them and render the page on the server. Sounds cool?

Read more at: [https://auth0.com/blog/next-js-authentication-tutorial](https://auth0.com/blog/next-js-authentication-tutorial)
