import express from "express";

import { Console } from "console";
const port = 3000;
const app = express();



app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  
    res.render("index.ejs");
   

});
app.post('/', (req, res) => {
   
    const title1 = req.body.title;
    const content1 = req.body.content;
    console.log('Received title:', title1);
    console.log('Received content:', content1);
    console.log('Received request:', req);
    console.log('Received content:', req.body);
   

    res.send(`<h2>Posted Content</h2>
    <p>Title: ${title1}</p>
    <p>Content: ${content1}</p>`);
   

});
app.get('/edit-post/:postId', (req, res) => {
    // Fetch the post data based on the postId parameter and render the edit form
    const postId = req.params.postId;
    const post = fetchPostById(postId);
    res.render('edit-post.ejs', { post });
  });
  
  // Handle the form submission
  app.post('/edit-post/:postId', (req, res) => {
    const postId = req.params.postId;
    const updatedPostData = req.body; // New post data from the form submission
    // Update the post data based on the postId and updatedPostData
    // Example: updatePost(postId, updatedPostData);
    res.redirect('/'); // Redirect to the home page or the post listing page
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});