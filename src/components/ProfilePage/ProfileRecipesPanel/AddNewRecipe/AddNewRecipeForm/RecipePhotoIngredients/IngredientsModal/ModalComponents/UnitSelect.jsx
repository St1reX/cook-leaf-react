import useUnitsQuery from "../../../../../../../../queries/useUnitsQuery";
import { useEffect } from "react";

export default function UnitSelect({ unit, onUnitChange }) {
  const { data: units = [] } = useUnitsQuery();

  useEffect(() => {
    if (units.length > 0) {
      onUnitChange(units[0]);
    }
  }, [units]);

  return (
    <div className="w-96">
      <label className="label-text" htmlFor="ingredient-unit">
        Unit
      </label>
      <select
        value={JSON.stringify(unit)}
        onChange={(e) => onUnitChange(JSON.parse(e.target.value))}
        className="select"
        disabled={units.length < 1}
        id="ingredient-unit"
      >
        {units.map((value, index) => (
          <option key={index} value={JSON.stringify(value)}>
            {value.unit_name}
          </option>
        ))}
      </select>
    </div>
  );
}
