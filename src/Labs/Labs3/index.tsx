import BooleanVariables from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import IfElse from "./IfElse";
import LegacyFunctions from "./LegacyFunctions";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";

export default function Lab3() {
  return(
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <VariablesAndConstants/>
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <LegacyFunctions />
    </div>
);}
