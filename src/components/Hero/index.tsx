import cheesecake from "../../assets/images/cheesecake.jpeg";

export default function Hero() {
  return (
    <section className="w-full my-8 flex">
      <div className="w-full py-8 flex justify-center items-center gap-20 bg-soft-pink rounded-e-full">
        <div className="max-w-80 flex flex-col gap-3">
          <h1 className="text-white text-4xl font-bold">
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
          className="hidden md:block size-48 rounded-full object-cover"
          src={cheesecake}
          alt="cheesecake"
        />
      </div>
      <div className="hidden w-40 lg:flex justify-end items-center bg-red-500 rounded-l-full">
        <div className="h-40 w-20 bg-white rounded-l-full"></div>
      </div>
    </section>
  );
}
