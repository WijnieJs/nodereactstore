import React, { Fragment } from 'react';

 
const layout = props => (
  <Fragment>
    <header className="main-header">{props.header}</header>
    {props.mobileNav}
    <main className="content">{props.children}</main>
  </Fragment>
);

export default layout;
