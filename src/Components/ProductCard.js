import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function ProductCard({ el }) {
  return (
    <Card style={{ width: "30%", height: "500px" }}>
      <Card.Img
        variant="top"
        src={el.image}
        style={{ width: "60%", height: "300px" }}
      />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>

        <Link to={`/products/${el.id}`}>
          <Button>details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
