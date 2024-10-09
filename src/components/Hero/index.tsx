import cheesecake from "../../assets/images/cheesecake.jpeg";

export default function Hero() {
  return (
    <section className="my-8">
      <div className="py-8 flex justify-evenly items-center bg-soft-pink rounded-e-full">
        <div className="flex flex-col gap-3 max-w-80">
          <h1 className="text-white text-3xl font-bold">
            Es hora de ese dulce que tanto te provoca
          </h1>
          <p className="text-white text-base">
            Pídelo y disfrutalo ¡Te lo mereces!
          </p>
          <a
            className="px-2 py-1 w-fit bg-soft-gray text-[8px] font-bold rounded-full"
            href="/"
          >
            VER PRODUCTOS
          </a>
        </div>
        <img
          className="size-48 rounded-full object-cover"
          src={cheesecake}
          alt="cheesecake"
        />
      </div>
    </section>
  );
}
