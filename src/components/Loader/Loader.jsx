import css from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="palevioletred"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
