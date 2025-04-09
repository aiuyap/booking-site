function Hero() {
  return (
    <section
      className="bg-cover bg-center"
      style={{
        height: "calc(100vh - 68px)",
      }}
    >
      <div className="flex h-full w-full items-center justify-center bg-black">
        <h1 className="text-center text-4xl font-bold text-white md:text-6xl">
          Book your next staycation with us.
        </h1>
      </div>
    </section>
  );
}
export default Hero;
