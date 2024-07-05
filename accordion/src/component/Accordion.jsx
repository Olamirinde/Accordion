import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <>
      <div className="flex h-[100vh] w-[100vw] items-center justify-center p-5 text-2xl md:text-3xl">
        <div className="w-[500px]">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div
                className="mb-[10px] bg-orange-800 pb-3 pl-5 pr-5 pt-3"
                key={dataItem.id}
              >
                <div
                  onClick={() => handleSelection(dataItem.id)}
                  className="flex cursor-pointer items-center justify-between font-bold text-white"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ? (
                  <div className="h-auto text-white">{dataItem.answer}</div>
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
