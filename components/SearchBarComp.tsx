/* Ignore this for now 
   Attempt at using sample data to make the search bar work
*/


import React, { useState }  from "react"
import { Input, Box } from '@chakra-ui/react';
import getCourse from "../helpers/getCourse";
import courseList from "../data/01.json"



const SearchBar = () => {
  const [courseEntered, setCourseEntered] = useState('');
  const [retCourses, setRetCourses] = useState([]);

  const handleFilter = (event) => {
    const searchCourse = event.CurrentTarget.value;
    setCourseEntered(searchCourse);
    const newFilter = courseList.filter((value) => {
      return value.code.toLowerCase().includes(searchCourse.toLowerCase());
    });
    if (searchCourse === "") {
      setRetCourses([]);
    } else {
      setRetCourses(newFilter);
    }
  };

  return (
    <>
      <Input 
        mr="10" 
        ml="10" 
        width="100%"
        placeholder='Search For a Course' 
        value={courseEntered}
        onChange={handleFilter}
        />
      <Box>

      </Box>
  </>
  )
}
        
export default SearchBar;

