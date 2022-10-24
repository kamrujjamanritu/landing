import React, { useState } from 'react';
import { GrSearch } from "react-icons/gr";
import searchUniversity from "../../pages/api/universityData.json";
import { MdClose } from "react-icons/md";

const Search = ({ handleModal }) => {

    const [filterSearchData, setFilterSearchData] = useState([]);

    const [searchEnter, setSearchEnter] = useState("");

    const handleFilter = (event) => {
        const desiredUniversity = event.target.value;
        setSearchEnter(desiredUniversity);
        const newDesiredUniversity = searchUniversity.filter((value) => {
            return value.name.toLowerCase().includes(desiredUniversity.toLowerCase());
        })

        if (desiredUniversity === "") {
            setFilterSearchData([]);
        } else {
            setFilterSearchData(newDesiredUniversity);
        }


    }

    const clearInput = () => {
        setFilterSearchData([]);
        setSearchEnter("");
    }


    return (
        <section className='search'>
            <div className="search__container">
                <h2>Finding universities has never been easier</h2>
                <div className="search__box">
                    <p className="tertiary-text">Start with searching universities</p>
                    <div className="search__input">
                        <form method="post" autoComplete='off' onSubmit={(e) => { handleModal(); e.preventDefault(); }}>
                            <input type="text" name="search__universitites" id="search__universities" value={searchEnter} onChange={handleFilter} placeholder='Search universities, courses, locations...' />
                            <GrSearch />
                            {filterSearchData.length === 0 ? "" : <a id="closeSearch" onClick={clearInput}><MdClose /></a>}
                        </form>
                        {filterSearchData.length != 0 && (
                            <div className="dataResult">
                                <div>
                                    {
                                        filterSearchData.slice(0, 10).map((value) => {
                                            return (
                                                <h3 key={value.id}>
                                                    <button onClick={() => { handleModal(); clearInput(); }}>{value.name}</button>
                                                </h3>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <img src="./assets/images/circle.png" alt="Circle" className='circle' />
        </section>
    );
}

export default Search;
