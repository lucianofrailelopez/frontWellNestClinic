import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'; // Importa useDispatch y useSelector
import { addToCart, placeOrder } from '../actions'; // Importa las nuevas acciones

function Pharmacy() {
  const [productos, setProductos] = useState([]);
  const [filtroTipo, setFiltroTipo] = useState('');
  const [ordenPrecio, setOrdenPrecio] = useState('asc');
  const [busqueda, setBusqueda] = useState('');
  const [filtroDescuento, setFiltroDescuento] = useState('');

  // Nuevo estado para el carrito
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Llama a la acción para agregar al carrito
    dispatch(addToCart(product));
  };

  const handlePlaceOrder = () => {
    // Llama a la acción para realizar un pedido
    dispatch(placeOrder(cart));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://serverwellnestclinic.onrender.com/api-docs/products?tipo=${filtroTipo}&precio=${ordenPrecio}&search=${busqueda}&descuento=${filtroDescuento}`);
        setProductos(response.data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    fetchData();
  }, [filtroTipo, ordenPrecio, busqueda, filtroDescuento]);

  return (
    <div>
      {/* Controles de Filtro */}
      <div>
        <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
          {/* Opciones de filtrado por tipo de medicamento */}
        </select>
        <select value={ordenPrecio} onChange={(e) => setOrdenPrecio(e.target.value)}>
          {/* Opciones de orden de precio */}
        </select>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select value={filtroDescuento} onChange={(e) => setFiltroDescuento(e.target.value)}>
          {/* Opciones de filtrado por descuento */}
        </select>
      </div>

      <div className="productos">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            {/* Mostrar información del producto */}
            {/* Botón para agregar al carrito */}
            <button onClick={() => handleAddToCart(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      {/* Carrito de compras */}
      <div>
        <h2>Carrito de Compras</h2>
        {cart.map((item) => (
          <div key={item.id}>
            {item.name} - ${item.price}
          </div>
        ))}
        <button onClick={handlePlaceOrder}>Realizar Pedido</button>
      </div>
    </div>
  );
}

export default Pharmacy;