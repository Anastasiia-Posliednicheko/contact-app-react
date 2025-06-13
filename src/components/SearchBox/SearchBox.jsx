import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "../SearchBox/SearchBox.module.css";


export default function SearchBox(){
   const dispatch = useDispatch();
   const filter = useSelector(selectNameFilter);
   
   const handleChange = event => {
      dispatch(setNameFilter(event.target.value));
   };
   
   return (
      <div className={css.wrapper}>
          <label htmlFor="search" className={css.label}>Find contacts by name</label>
          <input 
             id="search"
             type="text"
             value={filter}
             onChange={handleChange}
             className={css.input}
             placeholder="Find contacts by name…" />
      </div>
   );
  }
