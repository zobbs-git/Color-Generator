import { useState } from "react";

function Form({ addcolor }) {
  const [color, setColor] = useState("#471515");
  const [text, setText] = useState("text");

  // const [value, setValue] = useState({color: '#222', text: 'heyy'})

  const handleChange = (ev) => {
    setColor(ev.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addcolor(color);
  };

  return (
    <section className="container">
      <h2>color generator</h2>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={color} />
        <input
          type="color"
          id="input"
          onChange={handleChange}
          value={color}
          placeholder="#471515"
        />
        <button type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
}
export default Form;
