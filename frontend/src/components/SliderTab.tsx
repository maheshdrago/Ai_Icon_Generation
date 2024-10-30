import { Dispatch, ReactNode, SetStateAction } from "react";

export const SliderTab = ({
  tabs,
  setActiveTab,
  activeTab,
  children,
  className
}: {
  tabs: string[];
  setActiveTab: Dispatch<SetStateAction<number>>;
  activeTab: number;
  children?;
  className?:string
}) => {
  return (
    <div className={`${className}`}>
        <div className="flex ">
        {tabs.map((tab, idx) => (
        <button
          className={`p-3 text-gray-400 border-b-2 border-solid ${
            idx === activeTab ? "border-black" : "border-gray-400"
          }`}
          onClick={() => setActiveTab(idx)}
        >
          {tab}
        </button>
      ))}

        </div>
      
      <div className="w-full flex ">
        {children.map((child, idx) =>
          idx == activeTab ? (
            <div className={`w-full ${child.props.className}`}>{child} </div>
          ) : (
            <div className="hidden">{child}</div>
          )
        )}
      </div>
    </div>
  );
};

export const SliderTabItem = ({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return <div className={className}>{children}</div>;
};
