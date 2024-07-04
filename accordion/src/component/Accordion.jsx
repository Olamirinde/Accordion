//Single Selection

import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] w-[100vw">
        <div className="w-[500px]">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div
                className="bg-orange-500 mb-[10px] pt-3 pb-3 pr-5 pl-5"
                key={dataItem.id}>
                <div
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="text-white flex justify-between items-center cursor-pointer">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ? (
                  <div className="text-white h-auto">{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
