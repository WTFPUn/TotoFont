import axios from "axios"

const StarIcon = ({id, fav}) => {
  let favCheck = fav
  const handleStarClick = () => {
    if(id !== 0) {
      favCheck = favCheck === 1 ? 0 : 1; 
      console.log(favCheck);
      axios.put(`http://localhost:7777/setStar/${id}`,{'fav': favCheck})
          .then((res) => {console.log(res)})
          .catch((error) => {console.log(error);});
    }
  }
  // useEffect(() => setFavSet(fav), [fav]);
  return(
  <svg onClick={handleStarClick} xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${favCheck === 1 ? "fill-yellow-300": "fill-transparent"} mt-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
  )
}

export default StarIcon;

