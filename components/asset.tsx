import * as React from 'react';
import '../style.css';

type AssetProps = {
  imgUrl: string;
  description: string;
  price: string;
};

export default function Asset({ imgUrl, description, price }: AssetProps) {
  return <div >
    <img src = {imgUrl}/>
    <h3>{description}</h3>
    <h5>{price}</h5>
  </div>;
}
