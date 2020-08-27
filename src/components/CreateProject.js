import React, { useState } from "react";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      title,
      content,
    };
  };

  return (
    <div className='container'>
      <div className='project-wrapper'>
        <form onSubmit={handleSubmit}>
          <div className='form-title'>
            <h2>Create Project</h2>
          </div>
          <div className='form-group'>
            <label>Title</label>
            <input name='title' value={title} onChange={handleTitleChange} />
          </div>
          <div className='form-group'>
            <label>Content</label>
            <input
              name='content'
              value={content}
              onChange={handleContentChange}
            />
          </div>
          <button>Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
