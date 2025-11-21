"use client";
import Image from "next/image";
import { useState } from 'react';
import products from "@/data/data.json";

function ProductCard(props) {
  const [quantity, setQuantity] = useState(0);
  const cardThumbnail = props.thumbnail;
  const cardName = props.cardName;
  const cardCategory = props.category;
  const cardPrice = props.price;
  
  return (
    <article>
      <header>
	<img src={cardThumbnail} />
      </header>
      <div>
	<h3>{cardName}</h3>
	<h4>{cardCategory}</h4>
      </div>
      <footer>
	<p className="text-amber-500">{ cardPrice }</p>
      </footer>
    </article>
  )
  
}
export default function Home() {
  
  return (
    <>
      <section>
	<h1>Desserts</h1>
	
	<ul>
	  {products.map((product, index) => (
	    <li key={index}>
	      <ProductCard thumbnail={product.image.thumbnail} cardName={product.name} category={product.category} price={product.price} />
	    </li>
	  ))}
	</ul>
      </section>
      
      <section>
	
      </section>
    </>
  );
}
