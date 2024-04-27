import { useState } from "react";
import css from "./SearchBar.module.css";
import {Toaster} from "react-hot-toast";
import { showError } from "../../services/toaster";

const SearchBar = ({onSubmit}) =>  { const [theme, setTheme] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault();
    if(theme.trim()==="") {
    showError ("Please fill out the form");
return;
}
    onSubmit(theme);
    console.log(theme); };

 const handleChange = (e) => {setTheme(e.target.value)};   
    
    return (
 <header className={css.headerSearch}>
    <form className={css.formSearch} onSubmit={handleSubmit}>
      <input className={css.inputSearch}
        type="text"
        name="theme"
        value={theme}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <Toaster />
      <button className={css.btnSearch} type="submit">Search</button>
    </form>
  </header>);
};

  export default SearchBar;