function handlePoint(_value, mainValue) {
  if (mainValue.includes(".")) return mainValue;

  return mainValue + ".";
}

function handleNumber(value, mainValue) {
  if (mainValue === "0") return value;

  return mainValue + value;
}

export function addNumber(value, mainValue, expValue) {
  const dispatch = {
    ".": handlePoint,
    "*": handleNumber,
  };

  const handler = dispatch[value] || dispatch["*"];
  return {
    mainValue: handlerValue(value, mainValue),
    expValue: expValue,
  };
}

export function addSign(_value, mainValue, expValue) {
  if (mainValue === "0") mainValue = mainValue;

  if (mainValue.startsWith("-")) mainValue = mainValue.slice(1);

  if (!mainValue.startsWith("-")) mainValue = "-" + mainValue;

  return {
    mainValue: mainValue,
    expValue: expValue,
  };
}

export function addOperator(value, mainValue, expValue) {
  if (mainValue === "0" && expValue === "") expValue = expValue;

  if (mainValue === "0") {
    expValue = expValue.replace(/[\+\-\×\÷]\s*$/, `${value}`);
  }

  if (mainValue !== "0") expValue += mainValue + ` ${value}`;

  return {
    mainValue: "0",
    expValue: expValue,
  };
}

export function clearValues(_value, _mainValue, _expValue) {
  return {
    mainValue: "0",
    expValue: "",
  };
}
