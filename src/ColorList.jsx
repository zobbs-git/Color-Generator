import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ value }) => {
  return (
    <section className="colors">
      {value.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};
export default ColorList;
