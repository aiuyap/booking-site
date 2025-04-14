import { useParams } from "react-router-dom";

function ViewCondo() {
  const { condoId } = useParams();
  return (
    <>
      <section className="flex h-screen w-full items-center justify-center bg-black text-white">
        <div>
          {condoId === "1" ? (
            <p>Condo 1</p>
          ) : condoId === "2" ? (
            <p>Condo 2</p>
          ) : condoId === "3" ? (
            <p>Condo 3</p>
          ) : (
            <p>Condo not found</p>
          )}
        </div>
      </section>
    </>
  );
}

export default ViewCondo;
