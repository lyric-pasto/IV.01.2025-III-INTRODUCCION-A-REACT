import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { TableCategory } from "../components/TableCategory"

export function ListCategory() {
    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        const res = await fetch("http://localhost:3001/categorias")
        const data = await res.json()
        setCategories(data)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const deleteCategory = async (id) => {
        const confirmar = window.confirm("¿Eliminar categoría?")
        if (!confirmar) return

        await fetch(`http://localhost:3001/categorias/${id}`, {
            method: "DELETE"
        })

        fetchCategories()
    }

    return (
        <>
            <h1>Listado de Categorías</h1>

            <Link to="/categories/create">
                <Button>Crear Categoría</Button>
            </Link>
            <Link to="/list">
                <Button>volver</Button>
            </Link>

            {categories.length > 0 ? (
                <TableCategory
                    categories={categories}
                    onDelete={deleteCategory}
                />
            ) : (
                <p>No hay categorías</p>
            )}
        </>
    )
}
