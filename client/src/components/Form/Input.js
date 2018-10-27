import React from 'react';

export const Input = props => (
    <div className="form-group">
      <label for={props.id}>
        <strong>{props.text}</strong>
      </label>
      <input className="form-control" {...props} />
    </div>
);