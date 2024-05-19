import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
        onClick: () => void;
      } 

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({onClick}) => {return (
    
        <button onClick={onClick} className={css.btnMore} type="button">Load More</button>
  
);
};

export default LoadMoreBtn;