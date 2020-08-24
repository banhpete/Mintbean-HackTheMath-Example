import React from 'react';
import './Template.css'

const Template = (props) => {
  return (
    <>
      <header>
        <div className="container">
          <h1 className="header">Mintbean - Hack the Math - Population Growth Model</h1>
        </div>
      </header>
      <main>
        {props.children}
      </main>
      <footer></footer>
    </>
  );
}

export default Template;