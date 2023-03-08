/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { Input } from '@chakra-ui/react'

export default function Searchbar(search: {
    setSearch: Dispatch<SetStateAction<string | undefined>>;
    setGeolocate: Dispatch<SetStateAction<boolean>>;
    geolocate: boolean;
  }) {
    const [input, setInput] = useState<string | undefined>();
  
    useEffect(() => {
      const listener = (event: { key: string; preventDefault: () => void }) => {
        //detects if the user is pressing the enter key to start a search
        if (event.key === "Enter") {
          event.preventDefault();
          search.setSearch(input);
        }
      };
      document.addEventListener("keydown", listener);
      return () => {
        document.removeEventListener("keydown", listener);
      };
    });

    return (
        <div className="flex  items-center">
          <input
            placeholder="search medium size"
            className="search-bar"
            onChange={(e) => setInput(e.target.value)}
            onFocus={(e) => {
              e.target.value = "";
            }}
          ></input>
          <div
            className="icon"
            data-tip="get data by user search"
          >
            <FaSearch
              className="cursor-pointer"
              onClick={() => search.setSearch(input)}
            />
          </div>
          <div className="tooltip tooltip-bottom" data-tip="activate user geolocation">
            <FaMapMarkerAlt
              className="cursor-pointer"
              onClick={() => search.setGeolocate(!search.geolocate)}
            />
          </div>
        </div>
      );
    }

