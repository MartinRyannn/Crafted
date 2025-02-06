import "../styles/styles.scss"; // Keep this import for the styles
import Container1 from "../components/Container1";
import Container2 from "../components/Container2";
import Container3 from "../components/Container3";
import Container4 from "../components/Container4";
import CursorDot from "../components/CursorDot"; // Import the CursorDot

function Main() {
  return (
    <section className="mainContainer">
      <CursorDot /> {/* Add the cursor dot here */}
      <div className="container-black"><Container1 /></div>
      <div className="container-white"><Container4 /></div>
      <div className="container-black"><Container3 /></div>
      <div className="container-white"><Container2 /></div>
    </section>
  );
}

export default Main;
