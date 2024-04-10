import { useEffect, useState } from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Success = () => {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();
  useEffect(()=>{
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 10000);
  
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  
    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  },[])

  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Your seat is Reserved</h1>
          <h1>Redirecting to Home in {count} seconds...</h1>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Success
