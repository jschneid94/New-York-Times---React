import React from 'react';

export const FormBtn = props => (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      <i class="fa fa-search"> </i>
      {props.children}
    </button>
  );