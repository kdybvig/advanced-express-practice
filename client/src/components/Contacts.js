import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Contacts(props) {
  return (
    <CollapsableMapper data={props.contacts} path="contacts" field="name" />
  );
}
export default Contacts;
