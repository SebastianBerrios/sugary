interface IDessertCard {
  label: string;
  image: string;
  price: number;
  discount?: number;
}

export default function DessertCard({
  label,
  image,
  price,
  discount = 0,
}: IDessertCard) {
  const calcDiscount = () => {
    return price - price;
  };

  return (
    <div>
      <img src={image} alt={label} />
      <p>{label}</p>
      <p>{price}</p>
    </div>
  );
}
