import axios from "axios";

const CloseIcon = ({id}) => {
  const handleCloseClick = () => {
    if(id !== 0) {
      axios.delete(`http://localhost:7777/removeStat/${id}`)
          .then((res) => {console.log(res)})
          .catch((error) => {console.log(error);});
    }
  }
  return(
    <svg onClick={handleCloseClick} className="hover:fill-red-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default CloseIcon;