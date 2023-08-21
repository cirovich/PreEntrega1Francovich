import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Presentacional.css';

function Presentacional(props) {
  return (
    <div>
    <section>
    {props.data.length === 0 
    ? <p> LOADING </p> : 
    props.data.map((item,i)=> (
    <Card key={i} style={{ width: '25rem' }}>
      <Card.Img variant="top" src={item.image_url} />
      <Card.Body> 
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.tagline}
        </Card.Text>
        <Button variant="primary">Detalle</Button>
      </Card.Body>
    </Card>
    ))}
  </section>
  </div>
  );
}

export default Presentacional;