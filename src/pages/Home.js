import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebase-config';
import UpdatePost from './UpdatePost';
// import firebase from 'firebase/app';

const Home = ({ isAuth }) => {
  const [postLists, setPostLists] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  

  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc);
    setPostLists(prevPosts => prevPosts.filter(post => post.id !== id));
  }
  const handleUpdate = async (blogId, title, content) => {
    try {
      const postDoc = doc(db, "posts", blogId)
      await updateDoc(postDoc,{
        title: title,
        postText: content
      });
      // await db.collection('posts').doc(blogId).update({
      //   title: title,
      //   postText: content
      // });
      // Update the local state with the new data
      setPostLists(prevBlogs =>
        prevBlogs.map(blog => (blog.id === blogId ? { ...blog, title: title, postText: content } : blog))
      );
      // setSelectedBlog(null);
      
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  }
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      // console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    };
    getPosts();
  }, []);


  return (
    <div className='homePage'>
      {postLists.map((post) => {
        return (
          <div className='post' key={post.id}>
            <div className='postHeader'>
              <div className='title'>
                <h1>{post.title}</h1>
              </div>
              <div className='deletePost'>
                {isAuth && post.author.id === auth.currentUser.uid &&
                  <div>
                    <button onClick={() => setSelectedBlog(post)}>&#128393;</button>
                    <button onClick={() => {
                      deletePost(post.id);
                    }}>&#128465;</button>
                  </div>}
              </div>
            </div>


            <div className='postTextContainer'>{post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>)
      })}
      {selectedBlog && (
        <UpdatePost
          selectedBlog={selectedBlog}
          handleUpdate={handleUpdate}
          closeModal={() => setSelectedBlog(null)}
        />
        )}
    </div>
  )
}

export default Home
