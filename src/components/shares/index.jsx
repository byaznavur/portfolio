import { RotatingLines } from "react-loader-spinner";
import "./loading.scss";
const Loading = () => {
  return (
    <div className="loading">
      <RotatingLines
        visible={true}
        height="100"
        width="100"
        color="#61dafb"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
