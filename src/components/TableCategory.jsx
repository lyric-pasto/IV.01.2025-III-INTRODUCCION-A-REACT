import { Button, Table } from "react-bootstrap"
import { Link } from "react-router-dom"

export function TableCategory({ categories, onDelete }) {
    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {categories.map(cat => (
                    <tr key={cat.id}>
                        <td>{cat.nombre}</td>
                        <td>
                            <Link to={`/categories/edit/${cat.id}`}>
                                <Button size="sm" variant="warning">
                                    Editar
                                </Button>
                            </Link>

                            <Button
                                size="sm"
                                variant="danger"
                                className="ms-2"
                                onClick={() => onDelete(cat.id)}
                            >
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
