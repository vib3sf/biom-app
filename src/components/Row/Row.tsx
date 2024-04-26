import { useEffect, useState } from "react";
import { biomApi } from "../../services/biom/biom.api";
import { BiomDto } from "../../services/biom/biom.dto";
import "./Row.css";

export function Row({ biomElem }: { biomElem: BiomDto }) {
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const collapseRow = windowWidth < 700;

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
          {Object.values(biomElem).map(
            (elem: number | string, index: number) => (
              <td key={index} data-label={biomApi.getTableHead()[index]}>
                {elem}
              </td>
            )
          )}
        </tr>
      ) : (
        ""
      )}
    </>
  );
}
