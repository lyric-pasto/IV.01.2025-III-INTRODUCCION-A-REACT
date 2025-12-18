import { Table,Button, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function TableProducts({products,onDelete}) {
    const header = ["#", "Nombre", "Precio", "Categoria", "Imagen", "Acciones",]
    
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {header.map(e => (
                            <th key={e}>{e}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.map(e => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.nombre}</td>
                            <td>{e.precio}</td>
                            <td>{e.categoria}</td>
                            <td>{e.imagen && <img src={e.imagen} alt="" width={50} />}</td>
                             <td>
                            <Link to={`/edit/${e.id}`}>
                                <Button variant="warning" size="sm">
                                    Editar
                                </Button>
                            </Link>

                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => onDelete(e.id)}
                            >
                                Eliminar
                            </Button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}