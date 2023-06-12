import React from "react";

const Button = ({ onLoadMore }) => {
    return (
      <button type="button" onClick={onLoadMore}>
        <span>Load more</span>
      </button>
    );
  };

 
export default Button;