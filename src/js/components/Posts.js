import React from "react";

const Post = (props) => {
  return (
    // <pre>{JSON.stringify(props)}</pre>
    <ul>
      {props.data.map((el) => (
        <li key={el.publishedAt}>{el.title}</li>
      ))}
    </ul>
  );
};

export default Post;
