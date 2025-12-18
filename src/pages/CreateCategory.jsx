import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FormCreateCategory } from "../components/FormCreateCategory.jsx"

export function CreateCategory() {
    const { id } = useParams()
    const [category, setCategory] = useState(null)

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/categorias/${id}`)
                .then(res => res.json())
                .then(data => setCategory(data))
        }
    }, [id])

    return (
        <>
            <h1>{id ? "Editar Categoría" : "Crear Categoría"}</h1>
            <FormCreateCategory category={category} />
        </>
    )
}
