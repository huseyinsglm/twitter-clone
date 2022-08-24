import React from "react";

const SideLink = ({name, Icon, active, onMenuItemClick}) => {
    const isActive = active === name;
    return (
        <li className="group" onClick={() => onMenuItemClick(name)}>
            <a
                href={name.toLowerCase()}
                className=" block text-xl mb-2 pointer-events-none cursor-pointer "
            >
                <div className="inline-block">
                    <div
                        className={`flex items-center  rounded-full group-hover:bg-primary-light group-hover:text-primary-base pl-3 pr-8 py-3
          
           ${isActive ? "text-primary-base" : ""}
          `}
                    >
                        <Icon/>
                        <span className="font-bold ml-4 ">{name}</span>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default SideLink;