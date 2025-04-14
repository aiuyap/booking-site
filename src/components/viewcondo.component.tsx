import { useParams } from "react-router-dom";

function ViewCondo() {
  const { condoId } = useParams();
  return (
    <>
      <section className="flex h-full w-full items-center justify-center bg-gray-100">
        <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-md">
          <h1 className="text-center text-2xl font-bold">Condo Details</h1>
          <p className="mt-4 text-center text-gray-600">
            Here you can view the details of the condo.
          </p>
        </div>
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
