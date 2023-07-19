
In this notes app, i am using an older version of React because the editor i am using here doesn't work with latest versions of React.That's why i am still using React.render instead of createRoot.

In this app i added these features :
- The note we are updating being shifted to top
- Switching to firebase from local storage to save and update data
- When you start writing your note,top line will become that note's title
- Deleting notes
- Adding useEffect for synchronization and Async func for performance efficiency

These are the things i learnt during building this :

- Improving Reading Code  <br />
  >Not all of the code was written by only me so it was challenging to understand the full code before implementing features
- useEffect
   > First thing i needed to implement was updating notes that were being written.So i learnt useEffect for syncing and its dependencies for preventing it being called everytime.I also learnt lazy state initialization with states for the same reason
- Adding the project into Firebase
   > Until now i always used localstorage to save browser data,it was a lot of fun to see my data being saved and updated in cloud.Converting my function from local storage to firestore was also much simpler than i expected it to be
- Async Func
   > Since i needed specific conditions to happen before i update or delete my notes i learnt how to use async functions for efficiency
- Debouncing
  >  Since there is a transaction limit for these kind of data services i learnt debouncing to delay my data being updated so it will effect performance less and will use less amount of transaction from my limit
  
![notesspdf](https://github.com/CerenGKB/React-Experiments/assets/47979970/6380e289-6064-4325-9a3d-58cc14a3696b)
