import { Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


const Layout = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Layout
