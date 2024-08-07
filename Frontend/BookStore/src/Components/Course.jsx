import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetu adipisicing elit. Porro,
            assumenda? epellendus, iste corrupti? Tempore Laudantium repellendus
            accusamus accusantium sed architecto odio, nisi expedita quas quilem
            nesciunt depitis doloe non dfsds non aspernaure prasentium asumenta
            sint wqwwsef, sfdgdfgdg, fsdfssggtet fsdfs efsfd tet qwasdss asfsdf
            sdfs sdfsf dfsfds sfsdfsdf sfdsfsdf sfdsfsdf sfsdfs sfdsfsdf
            fsdfsdfsdf?
          </p>
          <Link to='/'>
            <button className="text-white hover:bg-pink-700 mt-6 bg-pink-500 rounded-md px-4 py-2 cursor-pointer duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
