import React, { useState } from "react";

export default function Womens() {
  return (
    <div>
      Womens
      <SearchComponent />
    </div>
  );
}

const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");
  const data = [
    { id: 1, title: "SHIRT" },
    { id: 2, title: "Pant" },
    { id: 3, title: "JAcket" },
  ];

  const handleSearch = (e) => {
    const searchedText = e.target.value.toUpperCase();
    setSearchText(searchedText);
  };

  const filteredData = data.filter((item) =>
    item.title.toUpperCase().includes(searchText)
  );

  return (
    <div>
      <input type="text" onChange={handleSearch} placeholder="Search..." />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

// export default SearchComponent;
