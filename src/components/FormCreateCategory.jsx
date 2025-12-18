import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export function FormCreateCategory({ category }) {
    const [nombre, setNombre] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (category) {
            setNombre(category.nombre)
        }
    }, [category])

    const handlerSubmit = async (e) => {
        e.preventDefault()

        const data = { nombre }

        const url = category
            ? `http://localhost:3001/categorias/${category.id}`
            : "http://localhost:3001/categorias"

        const method = category ? "PUT" : "POST"

        await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        navigate("/categories")
    }

    return (
        <Form onSubmit={handlerSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre de categoría</Form.Label>
                <Form.Control
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </Form.Group>

            <Button type="submit">
                {category ? "Actualizar" : "Registrar"}
            </Button>
        </Form>
    )
}
