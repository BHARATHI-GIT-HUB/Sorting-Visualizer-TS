import React, { useContext } from "react";
import { Context, ItemContext } from "./utilis/AlgoContext";

const Main = () => {
  const { items } = useContext(ItemContext);
  const { settings } = useContext(Context);

  return (
    <section className="row-span-5 mx-10 ">
      <div className="flex w-full h-full items-end overflow-hidden">
        {items.map((item, idx) => {
          return (
            <div
              key={`${item}-${settings.arrLen}-${idx}`}
              className="flex-1"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(22,22,22,1) 5%, rgba(210,210,210,1) 60%)",
                height: `${item / 6}%`,
                margin: 1.64,
              }}
              id={`${idx}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Main;
