import Header from "../components/Header";
import "./NotFound.css";

const NotFound = ({cart}) => {
  return (
    <>
      <title>404 Page Not Found</title>
      <Header cart={cart} />
      <div className="not-found">
        <p>Page not found</p>
      </div>
    </>
  );
};

export default NotFound;
