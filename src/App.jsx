import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const clorVal = new Values("#315c72").all(10);
  const [colors, setColors] = useState(clorVal);

  // toast.error("error");
  // toast.success("success");
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addcolor={addColor} />
      <ColorList value={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
