import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({onClick}) => {return (
    
        <button onClick={onClick} className={css.btnMore} type="button">Load More</button>
  
);
};

export default LoadMoreBtn;