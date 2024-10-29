interface IDessertCard {
  id: number;
  label: string;
  image: string;
  price: number;
  discount?: number;
}

export default function DessertCard({
  id,
  label,
  image,
  price,
  discount = 0,
}: IDessertCard) {
  const calcDiscount = () => {
    return price - price * (discount / 100);
  };

  const newPrice = () => {
    return discount > 0 ? (
      <div className="flex gap-3">
        <span>S/. {calcDiscount()}</span>
        <span className="line-through text-gray-500">S/. {price}</span>
        <span className="px-1 py-0.5 bg-red-300 text-red-500 text-xs rounded-full">
          {discount}%
        </span>
      </div>
    ) : (
      <span>S/.{price}</span>
    );
  };

  return (
    <div key={id} className="grid">
      <img
        className="size-60 rounded-xl object-cover"
        src={image}
        alt={label}
      />
      <div className="grid gap-1 pt-3 pl-2">
        <span className="capitalize font-bold text-sm">{label}</span>
        <span className="text-sm">{newPrice()}</span>
      </div>
    </div>
  );
}
