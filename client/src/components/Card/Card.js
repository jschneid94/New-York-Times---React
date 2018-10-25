import React from "react";

const Card = (children) => (
  <div class="card">
    <div class="card-header">
      <strong>
        <i class="fa fa-list-alt"></i>Search</strong>
    </div>
    <div class="card-body">{children}</div>
  </div>
);

export default Card;