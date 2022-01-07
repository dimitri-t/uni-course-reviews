
const getCourse = async (courseCode: String) => {
  
  const response = await fetch(`/api/courses/${courseCode}`, {
    method: 'GET',
  });
  console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export default getCourse;