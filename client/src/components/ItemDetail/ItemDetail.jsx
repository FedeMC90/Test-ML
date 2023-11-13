import {getItemDetail, clearItemDetail} from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {useParams} from 'react-router-dom';
import load from '../../Media/Loading.gif'; 
import './ItemDetail.css';

const ItemDetail = () => {
  let params = useParams();
  let dispatch = useDispatch();
  let detail = useSelector(state => state.itemDetail);
  let loading = useSelector (state => state.loading);

  return (
    loading ? <img id="load" src={load} alt="Loading..."/> : 
    <div id="detail">
      <div id='col1'>
        <img id='imgdetail' src={detail.thumbnail} alt='image'/>
        <p id="description">{detail.description}</p>
      </div>
      <div id='col2'>
        <p>{detail.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
        {/* <p>{sold_quantity}</p> */}
        <h2>{detail.title}</h2>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetail;
