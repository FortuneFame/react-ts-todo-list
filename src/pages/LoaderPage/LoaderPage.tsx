import "./LoaderPage.scss";
import Loader from "../../components/Atoms/Loader/Loader";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

const LoaderPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
    <div className={`loader-page ${theme.palette.primary}`}>
      <Loader />
    </div>
  );
};

export default LoaderPage;
