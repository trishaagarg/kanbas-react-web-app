import BackgroundColours from "./BackgroundColours";
import BootstrapGrids from "./BootstrapGrids";
import BootstapTables from "./BootstrapTables";
import Borders from "./Borders";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Flex from "./Flex";
import ForegroundColours from "./ForegroundColours";
import Margins from "./Margins";
import Padding from "./Padding";
import Position from "./Positions";
import ScreenSizeLabel from "./ScreenSizeLabel";
import Zindex from "./Zindex";
import Float from "./Float";
import "./index.css";
import GridLayout from "./GridLayout";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";
import ReactIconsSampler from "./ReactIcons";

export default function Lab2() {
  return (
    <div className="container" id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p id="wd-first-p">
        Style attribute allows configuring look and feel right on the element.
        Although it's very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <div className="mb-4">
        <ForegroundColours />
      </div>
      <div className="mb-4">
        <BackgroundColours />
      </div>
      <div className="mb-4">
        <Borders />
      </div>
      <div className="mb-4">
        <Padding />
      </div>
      <div className="mb-4">
        <Margins />
      </div>
      <div className="mb-4">
        <Corners />
      </div>
      <div className="mb-4">
        <Dimensions />
      </div>
      <div className="mb-4">
        <Position />
      </div>
      <div className="mb-4">
        <Zindex />
      </div>
      <div className="mb-4">
        <Float />
      </div>
      <div className="mb-4">
        <GridLayout />
      </div>
      <div className="mb-4">
        <Flex />
      </div>
      <div className="mb-4">
        <ReactIconsSampler />
      </div>
      <div className="mb-4">
        <BootstrapGrids />
      </div>
      <div className="mb-4">
        <ScreenSizeLabel />
      </div>
      <div className="mb-4">
        <BootstapTables />
      </div>
      <div className="mb-4">
        <BootstrapLists />
      </div>
      <div className="mb-4">
        <BootstrapForms />
      </div>
      <div className="mb-4">
        <BootstrapNavigation />
      </div>
    </div>
  );
}
