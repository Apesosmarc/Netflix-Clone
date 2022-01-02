# NextFlix

A basic clone of the Netflix landing page with an emphasis on exploring NextJS and Next-Auth for extremely easy OAuth2 authentication.

### **[Live Site](https://trusting-brahmagupta-a5fc11.netlify.app/)**

## Overview

The best way for me to learn is by doing. I wanted to make a reasonable clone of the Netflix landing page using NextJS and CSS. The main goal of this app was to explore Next Auth by cloning Netflix.com.

Needless to say I believe it will be hard to go back to plain React after using Next-Auth. 

As seen in this application, with just a simple import, the next-auth SessionProvider uses React-Context under the hood to share current sessions throughout all components. Built in custom hooks such as signIn and signOut handle the obvious as well as redirects back to the appropriate pages. In the Next-Auth docs there are a bunch of providers for services such as google, github, instagram that you can plug in and connect with straight away.

This application also uses CSS to create a responsive layout of the Netflix landing page. By using z-index and object position properties I was able to overlay images over videos within a container to simulate movies playing on a screen throughout all device sizes. 

Using functional components and the useState hook, there is a language selection menu that changes the copy of the website to the specified language. The dropdown menu was imported from materialUI and styled by overriding the Mui CSS classes.

## tldr Overview & Features
- Responsive clone of Netflix.com
- NextAuth OAuth2 providers for Github authentication and login
- Language selection component
- Image/Video overlays using CSS object positioning and z-index.

## Technology
- NextJS
- Next-Auth for github OAuth2
- Material UI 
- CSS



[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)
