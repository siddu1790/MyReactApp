import { useState, useEffect } from 'react';
import SearchIcon from './search.svg'
import NationalParks from './NationalParks';
import './SearchParks.css';

const API_URL = "https://developer.nps.gov/api/v1/parks?limit=20&api_key=ocBfsNlrlLsdslccwvHAIefdMBOBqGN7sj3Yl76I"

export function SearchParks() {

  const [search, setSearch] = useState("");
  const [parks, setParks] = useState([]);

  const searchNationalParks = async (parkCode) => {
    const response = await fetch(`${API_URL}&statecode=${parkCode}`);
    const parksResp = await response.json();
    console.log(parksResp.data);
    setParks(parksResp.data);
    
  }

  useEffect(() => {
    searchNationalParks("UT");

  }, []);

    return (
        <>
            <h1>US National Parks      </h1>

            <div className="search">

                <input placeholder="Enter State code for National Parks"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />

                <img src={SearchIcon}
                    alt="search"
                    onClick={() => searchNationalParks(search)} />
            </div>

            {parks?.length > 0 ? (
                <div className="container">
                    {parks.map((park) => (
                        <NationalParks park={park} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2> No Parks Found</h2>
                </div>
            )
            }

        </>
    )

}