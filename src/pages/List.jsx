import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TableProducts } from '../components/TableProducts'

export function List() {
    const [products, setProducts] = useState([])

        const fetchProducts = async () => {
            const products = await fetch('http://localhost:3001/productos')
                .then((e) => e.json())
            setProducts(products)
        }

            useEffect(() => {
            fetchProducts()
        }, [])

    const deleteProduct = async (id) => {
    const confirmar = window.confirm("¿Seguro que deseas eliminar?");
        if (!confirmar) return;

        await fetch(`http://localhost:3001/productos/${id}`, {
            method: "DELETE"
        });

        fetchProducts();
    };
    return (
        <>
            <h1>Listado de Productos</h1>
            <Link to={'/create'}>
                <Button variant='primary'>Registra Producto</Button>
            </Link>
                
                 <Link to={'/categories'}>
                <Button variant='secondary'>Categoría</Button>
            </Link>
            {
                products.length > 0 ?(
                    <TableProducts products={products}
                    onDelete={deleteProduct} />
                ):(
                    <h2>No hay productos</h2>
            )}




        </>
    )
}