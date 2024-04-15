import { useState } from "react";
import css from "./SearchBar.module.css";
import { showError } from "../../services/toaster";

const SearchBar = ({onSubmit}) =>  { const [theme, setTheme] = useState("");

handleSubmit = (e) => {
    e.preventDefault();
    if(theme.trim()==="") {
    showError ("Please fill out the form");
return;
}
    onSubmit(theme);
    console.log(theme); };

 handleChange = (e) => {setTheme(e.target.value)};   
    
    return (
 <header className={css.header-search}>
    <form сlassName={css.form-search} onSubmit={handleSubmit}>
      <input className={css.input-search}
        type="text"
        name="theme"
        value={theme}
        onChange={handleChange}
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
      <button className={css.btn-search} type="submit">Search</button>
    </form>
  </header>);
};

  export default SearchBar;