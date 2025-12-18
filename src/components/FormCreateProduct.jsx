import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useNavigate,  useParams } from 'react-router-dom';
import { Link } from "react-router-dom"

export function FormCreateProduct() {
    const { id } = useParams()
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagen, setImagen] = useState('')
    const [categorias, setCategorias] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        const fetchCategorias = async () => {
            const response = await fetch('http://localhost:3001/categorias')
            const data = await response.json()
            setCategorias(data)
        }
        fetchCategorias()
    }, [])
    useEffect(() => {
        if (!id) return;

        const fetchProducto = async () => {
            const res = await fetch(`http://localhost:3001/productos/${id}`)
            const data = await res.json()

            setNombre(data.nombre)
            setPrecio(data.precio)
            setCategoria(data.categoria)
            setImagen(data.imagen)
        }

        fetchProducto()
        }, [id])


    const handlerRegistrar = async (event) => {
        event.preventDefault();
        if (!nombre || !precio || !categoria || !imagen) {
        alert("Complete todos los campos");
            return;
        }

        if (precio <= 0) {
            alert("El precio debe ser mayor a 0");
            return;
        }
        const method = id ? "PUT" : "POST"
        const url = id
            ? `http://localhost:3001/productos/${id}`
            : `http://localhost:3001/productos`
        await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                precio: Number(precio),
                categoria,
                imagen
            })
            })


        alert(id ? "Producto actualizado" : "Producto registrado");
        navigate("/")
    }

    return (
        <Form onSubmit={handlerRegistrar}>
            <Form.Group className='mb-3' controlId='createProduct.nombre'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='createProduct.precio'>
                <Form.Label>Precio</Form.Label>
                <Form.Control type='number' value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </Form.Group>
                <Form.Group className='mb-3' controlId='createProduct.categoria'>
                <Form.Label>Categoría</Form.Label>
                <Form.Select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="">-- Seleccione una categoría --</option>
                    {categorias.map(cat => (
                        <option key={cat.id} value={cat.nombre}>
                            {cat.nombre}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3' controlId='createProduct.imagen'>
                <Form.Label>Imágen</Form.Label>
                <Form.Control type='text' value={imagen} onChange={(e) => setImagen(e.target.value)} />
            </Form.Group>
            <Button type="submit"> {id ? "Actualizar" : "Registrar"}
            </Button>
            <Link to="/list">
                <Button>volver</Button>
            </Link>

        </Form >
    )
}