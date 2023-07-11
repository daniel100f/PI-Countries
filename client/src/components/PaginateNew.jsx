import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../redux/actions";
import style from "../styles/PaginateNew.module.css";

const PaginateNew = ({ cantPages }) => {
  const { numPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  function next() {
    dispatch(nextPage());
  }

  function prev() {
    dispatch(prevPage());
  }

  return (
    <div className={style.page}>
      <div className={style.primerBoton}>
        <button className={style.button} onClick={prev}>PREV</button>
        <p className={style.next}>
        {numPage > 1 ? <p>{numPage - 1}</p> : null }
        </p>
      </div>

      <h3>{numPage}</h3>
      <p className={style.next}>
      {numPage < cantPages ? <p>{numPage + 1}</p> : null}
      </p>

      <button className={style.button} onClick={next}>NEXT</button>
    </div>
  );
};

export default PaginateNew;


