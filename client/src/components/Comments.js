import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Comments(props) {
  return (
    <CollapsableMapper data={props.comments} path="comments" field="body" />
  );
}
export default Comments;
