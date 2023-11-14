import {getItemDetail, clearItemDetail} from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {useParams} from 'react-router-dom';
import load from '../../Media/Loading.gif'; 
import './ItemDetail.css';

const ItemDetail = () => {
  const items = useSelector ((state) => state.items);
  let params = useParams();
  let dispatch = useDispatch();
  let detail = useSelector(state => state.itemDetail);
  let loading = useSelector (state => state.loading);
console.log('detail: ', detail)  
  return (
    loading ? <img id="load" src={load} alt="Loading..."/> : 
    <div id="background">
      <div id='detail'>
        <div id='col1'>
          <img id='imgDetail' src={detail.pictures[0].url} alt='image'/>
          <h2 id='descrTitle'>Descripción del producto</h2>
          <p id="description">{detail.description}</p>
        </div>
        <div id='col2'>
          <p id='conditionAndSold'>
            {detail.condition === 'new' ? 'Nuevo' : 'Usado'} - 
            {items.map(m => m.id === params.id && ` ${m.sold_quantity} vendidos` )}
          </p>
          <h3>{detail.title}</h3>
          <p id='price'>$ {detail.price.toLocaleString('es-ES')}</p>
          <button id='buyButton'>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
