"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { Slider } from "../ui/slider";
import NumberTicker from "../magicui/number-ticker";
import { Check, Loader2 } from "lucide-react";
export const CardContainer = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [arr, setArr] = useState([1]);
  const [arrValue, setArrValue] = useState("$100k-1M");
  const [growth, setGrowth] = useState([1]);
  const [growthValue, setGrowthValue] = useState("10-20%");

  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0
    }).format(value);
  };

  useEffect(() => {
    switch (arr[0]) {
      case 0:
        setArrValue("0-100k");
        break;
      case 1:
        setArrValue("100k-1M");
        break;
      case 2:
        setArrValue("1-10M");
        break;
      case 3:
        setArrValue("10-100M");
        break;
      case 4:
        setArrValue("100-500M");
        break;
      case 5:
        setArrValue("+500M");
        break;
      default:
        break;
    }
  }, [arr]);

  useEffect(() => {
    switch (growth[0]) {
      case 0:
        setGrowthValue("0-10%");
        break;
      case 1:
        setGrowthValue("10-20%");
        break;
      case 2:
        setGrowthValue("20-30%");
        break;
      case 3:
        setGrowthValue("30-40%");
        break;
      case 4:
        setGrowthValue("40-50%");
        break;
      case 5:
        setGrowthValue("+50%");
        break;
      default:
        break;
    }
  }, [growth]);

  const handleClick = () => {
    // Animate cards
    setIsClicked(true);
    console.log("clicked 1");
    setTimeout(() => {
      // Make the cards disappear
      console.log("clicked 2");
      setTimeout(() => {
        // Show result
        console.log("clicked 3");
      }, 2000);
    }, 1000);
  };
  return (
    <div className="p-6 bg-neutral-50 rounded-lg border-neutral-100 border w-[500px] shadow-sm">
      <span className="flex flex-row justify-between items-center">
        <p className="font-mono text-neutral-500 text-xs font-medium">
          Funding round
        </p>
        <Link
          href="https://fifthside.studio"
          className="font-mono text-neutral-300 text-xs hover:text-neutral-400 transition-colors"
        >
          5th Side Studio
        </Link>
      </span>
      <span className="flex flex-col justify-start items-start mt-8 gap-8">
        <div className="flex flex-col justify-start items-center w-full">
          <span className="flex flex-row justify-between items-center w-full mb-2">
            <p className="text-sm">Annual Recurring Revenue</p>
            <p className="text-xs text-neutral-500 font-mono">{arrValue}</p>
          </span>
          <Slider
            defaultValue={arr}
            step={1}
            min={0}
            max={5}
            onValueChange={(value) => {
              setArr(value);
            }}
          />
        </div>
        <div className="flex flex-col justify-start items-center w-full">
          <span className="flex flex-row justify-between items-center w-full mb-2">
            <p className="text-sm">YoY ARR growth </p>
            <p className="text-xs text-neutral-500 font-mono">{growthValue}</p>
          </span>
          <Slider
            defaultValue={growth}
            step={1}
            min={0}
            max={7}
            onValueChange={(value) => {
              setGrowth(value);
            }}
          />
        </div>
      </span>
      <div className="w-full flex flex-row justify-center items-center my-20 mt-28 relative">
        <div
          className={cn(
            "bg-white w-full max-w-[75%] border rounded-lg p-2 absolute z-20 transition-all duration-400 h-28 flex flex-col justify-start items-start shadow-sm",
            isClicked ? "opacity-0 scale-75 translate-y-9" : ""
          )}
        >
          <span className="w-full flex flex-row justify-between items-center">
            <p className="font-mono text-xs text-neutral-500">ASK</p>
            <p className="font-mono text-xs text-neutral-300">
              we don't check anything
            </p>
          </span>
          <span className="h-full flex flex-row justify-center items-center w-full text-3xl font-medium text-center">
            $<NumberTicker value={arr[0] * growth[0] * 1000} />M
          </span>
        </div>
        <div
          className={cn(
            "bg-white w-full max-w-[75%] border rounded-lg p-2 absolute -translate-y-2 z-10 transition-all delay-2000 duration-400 h-28 shadow-sm flex flex-col justify-center items-center",
            isClicked ? "scale-75 translate-y-9 opacity-0" : "scale-95"
          )}
        >
          <p className="font-medium">Check your bank</p>
          <span className="text-blue-500 flex flex-row justify-center items-center mt-2 font-medium rounded-full p-2 bg-blue-50 gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <p className="text-sm">Sending</p>
          </span>
        </div>
        <div
          className={cn(
            "bg-white w-full max-w-[75%] border rounded-lg p-2 absolute -translate-y-4 z-0 scale-90 transition-all delay-4000 duration-400 h-28 shadow-sm flex flex-col justify-center items-center",
            isClicked ? "translate-y-9 opacity-0 scale-75" : "scale-90"
          )}
        >
          <p className="font-medium">Transfered</p>
          <span className="text-emerald-500 flex flex-row justify-center items-center mt-2 font-medium rounded-full p-2 bg-emerald-50 gap-2">
            <Check className="h-4 w-4" />
            <p className="text-sm">
              You are ${arr[0] * growth[0] * 1000}M richer
            </p>
          </span>
        </div>
        <span className="flex flex-col justify-start items-center">
          <p>Customize it here</p>
          <p className="text-neutral-500 text-sm underline hover:text-neutral-600 transition-all">
            Github repo
          </p>
        </span>
      </div>
      <span>
        <p className="text-center w-full text-lg font-medium">
          How much can you get?
        </p>
        <div className="w-full px-16 my-2">
          <Separator />
        </div>
        <p className="text-center w-full px-12 text-neutral-500 text-sm">
          Fund your Startup and never look back. If you don't pay us back, don't
          worry, we have no lawyers. Just try your best. We will do the same.{" "}
        </p>
      </span>
      <span className="flex flex-row justify-center w-full mt-4">
        <Button onClick={handleClick}>Calculate</Button>
      </span>
    </div>
  );
};
