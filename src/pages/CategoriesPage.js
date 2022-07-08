// Acceder a datos de la Uls
import { useLocation, useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Instancia de URLS search params que permitira extraer los valores del query String
  const query = new URLSearchParams(location.search);

  // Si el usuario no manda nada tendra un valor inicial de 0e en Skip y 15 en limit.
  const skip = parseInt(query.get("skip")) || 0;
  const limit = parseInt(query.get("limit")) || 15;

  const handleNext = () => {
    console.log("Next");

    // ACTUALIZAR EL QUERY
    query.set("skip", skip + limit);
    // query.set("limit", 200);

    // Nos retornara la cadena de caracteres con la query que nosotros necesitamos y que ya hemos actualizado
    navigate({ search: query.toString() });
  };

  return (
    <div>
      <h1>Categories Page</h1>
      <h2>Skip: {skip}</h2>
      <h2>Limit: {limit}</h2>

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default CategoriesPage;
