import React from "react";

const Form = () => (
  <form>
      <label for="topic">Topic</label>
      <input name="topic" id="topic"/>
      <label for="startYear">Start Year</label>
      <input name="startYear" id="startYear"/>
      <label for="endYear">End Year</label>
      <input name="endYear" id="endYear"/>
  </form>
);

export default Form;