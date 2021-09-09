# Portfolio Website
A website that showcases the projects and introduces myself, bulit with React and SCSS.<br/>
I'm using Firebase to host the website.

## Mockup
<figure>
  <figcaption style="text-align:center">Desktop version.</figcaption>
  <img src="https://user-images.githubusercontent.com/51708229/130373759-4e20658e-0670-440a-b049-4f8d2e2e1749.png" alt="desktop-ver" style="width:100%">
  
</figure>
<figure>
  <figcaption style="text-align:center">Mobile version.</figcaption>
  <img src="https://user-images.githubusercontent.com/51708229/130374242-18398c3c-563f-43ff-8a78-b24afc9860ea.png" alt="mobile-ver" style="width:100%">
</figure>

I created wireflame/mockup on Figma.<br/>
Although I adjusted the design as I code, I tried to implement this design as much as possible.


## Screenshots
![スクリーンショット 2021-08-23 13 04 08](https://user-images.githubusercontent.com/51708229/132110667-7a129171-ee3f-4cd0-815d-bba3c2a7e2d9.png)

### Website
https://kahoshibuya.dev

## Reflection

This project was a part of assignments in my college. I already had my portfolio site buit with HTML, CSS, and Vanilla JavaScript, but I wanted to tried to create the one with React which I just started to learn around then, especially `context` API and `react router`.

I started this process with by using the `create-react-app` boilerplate, then adding `react-router-dom`. Also, I installed `sass` and `node-sass` to utilize SASS for styling.<br/>
I wanted to update my portfolio site, especially "Work" section easily, so I created `projectsData.js` which has an array of all my projects' information. Once I update the array in the file, "Work" section will be updated.<br/>
This project is also for experiment to use `context` API, so I passed the data to all components as `context`.

I learned some new things through this project.

1. How to handle parameters with `useParams()` and show each pages.<br/>
   I liked that I implement the function `convertTitleToParams` which conevrts the project title string to the parameter formed(hyphenated) string.<br/>
   e.g.) Todo App -> todo-app
    
   ```js
   function convertTitleToParams(title) {
	 const regex = / /g;
	 const lowerCaseTitle = title.toLowerCase();
	 return lowerCaseTitle.replace(regex, '-');
   }
   ```
   
2. I need to import images to use them in JSX.
3. How to host the website with Firebase.<br/>
This is the most challenging thing to finish this project. I should have had a knowladge of `yml` to configure the setting of Firebase Hosting. I connected Firebase to GitHub, so everytime I commit to `main` it will be build and deploy automatically. It's easy to update the website.







