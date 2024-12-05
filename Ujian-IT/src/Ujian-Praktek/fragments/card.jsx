import { products } from "../data/data";
import Paragraph from "../component/paragraph";
import Image from "../component/image";
import Button from "../component/button";
import H1 from "../component/h1";
import H3 from "../component/h3";
import "../style.css";

export default function Card() {
  return (
    <div className="card-grid">
      {products
        .filter(
          (product) => parseInt(product.price.replace(/[\D]/g, "")) > 4000000
        )
        .map((product) => (
          <div key={product.id} className="card">
            <div className="card-image">
              <Image src={product.imageUrl} alt={product.name} />
            </div>
            <div className="card-content">
              <div className="card-title">
                <H1 h1={product.name} />
              </div>
              <div className="card-text">
                <H3 h3={product.price} />
              </div>
              <div className="card-text">
                <Paragraph paragraph={product.description} />
              </div>
              <div className="card-button">
                <Button />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
