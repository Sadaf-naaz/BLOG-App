import React,{useState} from 'react'

const UpdatePost = ({ selectedBlog, handleUpdate, closeModal }) => {
    const [updatedTitle, setUpdatedTitle] = useState(selectedBlog.title);
  const [updatedContent, setUpdatedContent] = useState(selectedBlog.postText);
console.log(selectedBlog)
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(selectedBlog.id, updatedTitle, updatedContent);
    closeModal();
    // setSelectedBlog(null);
    // setUpdatedTitle('');
    //   setUpdatedContent('');
  };
  return (
    <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Blog</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <textarea
                placeholder="Content"
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
              />
              <div className='form-buttons'>
              <button type="submit">Update</button>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
            </div>
            </form>
          </div>
        </div>
  )
}

export default UpdatePost
