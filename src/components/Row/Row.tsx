import { useEffect, useState } from "react";
import { biomApi } from "../../services/bioms/bioms.api";
import { BiomDto } from "../../services/bioms/bioms.dto";
import "./Row.css";

export function Row({ biomElem }: { biomElem: BiomDto }) {
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const collapseRow = windowWidth < 640;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {collapseRow ? (
        <button
          type="button"
          className="collapsible"
          onClick={() => setIsActive(!isActive)}
        >
          {biomElem.name}
        </button>
      ) : (
        ""
      )}
      {isActive || !collapseRow ? (
        <tr>
          {Object.values(biomElem).map((elem, index) => (
            <td key={index} data-label={biomApi.getTableHead()[index]}>
              {elem}
            </td>
          ))}
        </tr>
      ) : (
        ""
      )}
    </>
  );
}
