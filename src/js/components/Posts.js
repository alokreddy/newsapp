import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Post = (props) => {
  return (
    // <pre>{JSON.stringify(props)}</pre>
    <ListGroup>
      {props.data.map((el) => (
        <ListGroup.Item varient="dark" key={el.publishedAt}>
          {el.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Post;
