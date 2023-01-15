import { useState, useEffect, useRef, useContext } from "react";
import React from "react";
import { Algo, Context } from "./utilis/AlgoContext";

const Header = () => {
  const { sort, settings, setSettings } = useContext(Context);

  const [toggle, setToggle] = useState<boolean | null>(false);
  const [disable, setDisable] = useState<String | null>("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        toggle &&
        ref.current &&
        !ref.current.contains(e.target) &&
        toggle == true
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);

  const onArrayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, arrLen: +e.target.value }));

    if (settings.arrLen < 100) {
      setSettings((c) => ({ ...c, delay: +e.target.value / 10 }));
    } else {
      setSettings((c) => ({ ...c, delay: +e.target.value / 300 }));
    }
  };

  const onAlgoChange = (type: Algo) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, algoType: type }));
  };

  const onReset = (isReset: boolean) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, isReset: !isReset }));
  };
  const genericHamburgerLine = `h-[5px] w-8 my-1 rounded-sm bg-white transition ease transform duration-300`;

  return (
    <div ref={ref} className="overflow-hidden flex flex-col gap-4">
      <div className="flex justify-start items-center gap-3 px-4 bg-black py-2">
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className="py-3"
        >
          <div
            className={`${genericHamburgerLine} ${
              toggle
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              toggle ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              toggle
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
        <h2 className="text-[#afafaf] text-5xl font-Jura">
          Sorting Visualizer
        </h2>
      </div>
      <section className="min-h-screen shadow-md absolute bg-black text-[#818181] mt-[4rem]">
        {toggle && (
          <div className="relative flex flex-col justify-start items-start gap-2 w-[22rem] mt-5">
            <h1 className="py-4 pl-16 w-full text-start font-Jura font-semibold text-4xl text-[#d17f3f] ">
              Algorithms
            </h1>
            <button
              disabled={settings.algoType == disable ? true : false}
              className={`cursor-pointer text-2xl font-semibold text-[#818181] hover:text-[#afafaf] hover:bg-[#818181] py-2 pl-16 w-full text-start  ${
                settings.algoType == "bubble sort"
                  ? " !text-[#afafaf] bg-[#818181]"
                  : ""
              }`}
              onClick={() => {
                onAlgoChange("bubble sort");
                setToggle(false);
              }}
            >
              Bubble Sort
            </button>
            <button
              disabled={settings.algoType == disable ? true : false}
              className={`cursor-pointer text-2xl font-semibold text-[#818181] hover:text-[#afafaf] hover:bg-[#818181] py-2 pl-16 w-full text-start ${
                settings.algoType == "insertion sort"
                  ? "!text-[#afafaf] bg-[#818181]"
                  : ""
              }`}
              onClick={() => {
                onAlgoChange("insertion sort");
                setToggle(false);
              }}
            >
              Insertion Sort
            </button>

            <button
              disabled={settings.algoType == disable ? true : false}
              className={`cursor-pointer text-2xl font-semibold text-[#818181] hover:text-[#afafaf] hover:bg-[#818181] py-2 pl-16 w-full text-start ${
                settings.algoType == "merge sort"
                  ? " !text-[#afafaf] bg-[#818181]"
                  : ""
              }`}
              onClick={() => {
                onAlgoChange("merge sort");
                setToggle(false);
              }}
            >
              Merge Sort
            </button>
            <button
              disabled={settings.algoType == disable ? true : false}
              className={`cursor-pointer text-2xl font-semibold text-[#818181] hover:text-[#afafaf] hover:bg-[#818181] py-2 pl-16 w-full text-start ${
                settings.algoType == "quick sort"
                  ? " !text-[#afafaf] bg-[#818181]"
                  : ""
              }`}
              onClick={() => {
                onAlgoChange("quick sort");
                setToggle(false);
              }}
            >
              Quick Sort
            </button>
            <button
              disabled={settings.algoType == disable ? true : false}
              className={`cursor-pointer text-2xl font-semibold text-[#818181] hover:text-[#afafaf] hover:bg-[#818181] py-2 pl-16 w-full text-start ${
                settings.algoType == "heap sort"
                  ? " !text-[#afafaf] bg-[#818181]"
                  : ""
              }`}
              onClick={() => {
                onAlgoChange("heap sort");
                setToggle(false);
              }}
            >
              Heap Sort
            </button>
          </div>
        )}
      </section>
      <div className="container flex justify-between items-center min-w-max">
        <h1 className="text-white text-4xl font-light capitalize ">
          {settings.algoType}
        </h1>
        <div className="flex justify-center items-center gap-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="w-8 h-8"
            onClick={() => {
              onReset(settings.isReset);
              setDisable("");
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="w-10 h-10"
            onClick={() => {
              sort(settings.algoType);
              setDisable(settings.algoType);
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold text-white break-normal ">
              Array Size : <span>{settings.arrLen}</span>
            </h3>
            <input
              type="range"
              id="myinput"
              defaultValue={settings.arrLen}
              onChange={onArrayChange}
              min={50}
              max={380}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
