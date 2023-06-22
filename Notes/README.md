Quick start:

```
$ npm install
$ npm run dev
````

In this notes app, i am using an older version of React because the editor i am using here doesnt work with latest versions of React.Thats why i am still using React.render instead of createRoot

These are the things i learnt during building this :

- Reading Code
    All code was not written by only me so it was challenging to understand the full code before implementing features
- useEffect 
    First thing i needed to implement was updating notes that were being written.So i learnt useEffect for syncing and its dependencies for preventing it being called everytime
- Adding the project into Firebase
    Until now i always used localstorage to save browser data,it was a lot of fun to see my data being saved and updated in cloud. 
- Debouncing
    Since there is a transaction limit for these kind of data services i learnt debouncing to delay my data being updated so it will effect performance less and will use less amount of transaction from my limit
