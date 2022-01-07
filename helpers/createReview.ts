interface ReviewInput {
  lecturer?: string;
  review: string;
  courseId: number;
}

const createReview = async (reviewData: ReviewInput) => {
  // Handles the add review button by sending a post request to the api route
  // Add a type to the data to avoid errors
  
  const response = await fetch('/api/createreview', {
    method: 'POST',
    body: JSON.stringify(reviewData)
  });
  console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export default createReview;