import { useParams } from "react-router-dom";

function ViewCondo() {
  const { condoId } = useParams();
  return (
    <>
      <section className="flex h-screen w-full items-center justify-center bg-black text-white">
        <div>
          {condoId === "1" ? (
            <>
              <h1>Marco Polo Parkplace</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                unde velit voluptatem optio repudiandae fuga amet, alias odit
                reprehenderit ab sunt eligendi architecto dicta, nisi
                repellendus dolorem tempore. Eum, id.
              </p>
              <p>Available Dates: </p>
            </>
          ) : condoId === "2" ? (
            <p>The Rise at Monterrazas</p>
          ) : condoId === "3" ? (
            <p>Park Point Residences</p>
          ) : (
            <p>Condo not found</p>
          )}
        </div>
      </section>
    </>
  );
}

export default ViewCondo;
