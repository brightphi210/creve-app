import React, { useState } from 'react'
import UserNavbar from '../../Components/UserDashboard/UserNavbar'
import SearchedResultCompo from '../../Components/UserDashboard/SearchedResultCompo'
import { BASE_URL } from '../../Components/api/api'

const SearchResulte = () => {


  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading , setIsLoading] = useState(false)
  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)



  const handleSearch = async (e) => {

    e.preventDefault();

    setIsLoading(true)
      try {
      const response = await fetch(`${BASE_URL}/creativeprofile/?search=${query}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${authTokens.access}`,
        },
      })

      if (!response.ok) {
          setIsLoading(false)
          throw new Error('Network response was not ok');
      }

      setIsLoading(false)
      const data = await response.json();
      console.log(data);
      setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setIsLoading(false);
      }
  };


  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  
  return (
    <div>
        <UserNavbar handleChange={handleChange} handleSearch={handleSearch}/>
        <SearchedResultCompo searchResults={searchResults} query={query} isLoading={isLoading}/>
        {/* <Footer /> */}
    </div>
  )
}

export default SearchResulte