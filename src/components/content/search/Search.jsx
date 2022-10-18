import React from "react";

const search = ({ search, setSearch }) => {
  return (
    <form className="flex justify-center mt-10" onSubmit={(e) => e.preventDefault()}>
      <input id="search" type="text" role="searchbox" placeholder="Search Items" className="bg-green-300 rounded p-2 font-mono placeholder:text-white" value={search} onChange={(e) => setSearch(e.target.value)} />
    </form>
  );
};

export default search;
