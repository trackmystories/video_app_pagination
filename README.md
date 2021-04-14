# React Native Flow pagination example

<!-- ![screen.png](./assets/screen.png) -->
<img src="./assets/screen.png" width="350" alt="screen.png">

**Main stack: react native, flow, styled-components**

***This app uses flow for type checking.***

1. **Fetches url from a remote url**

2. **Shallow clones data using the spread syntax let shallowClone = [...result]**

3. **Maps through the shallow cloned array and adds a video url, and record time inside of each array object**

4. **Paginates data with concat + page number**

5. **API used to "sugar-coat" custom data : https://jsonplaceholder.typicode.com/photos?_limit=10&_page=**

**Note:  https://jsonplaceholder.typicode.com/photos?_limit=10&_page= API only serves as a data model to showcase the handling of numerous(Thousands) of objects within the array,with javascript the rendered output is coated on top of, or added into the cloned array objects of the api.**
