import { useEffect, useState } from "react";
import "./App.css";

const API_URL =
  "https://api.restcountries.com/countries/v" +
  "?limit=12" +
  "&response_fields=names.common,codes.alpha_2,flag.url_png,region,population";

function App() {
  const [paises, setPaises] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function obtenerPaises() {
      try {
        setCargando(true);
        setError(null);

        const respuesta = await fetch(API_URL, {
          headers: {
            Authorization:
              `Bearer ${import.meta.env.VITE_COUNTRIES_API_KEY}`,
          },
          signal: controller.signal,
        });

        if (!respuesta.ok) {
          throw new Error(
            json.errors?.[0]?.message ||
              `Error HTTP: ${respuesta.status}`
          );
        }

        const json = await respuesta.json();
        console.log("Respuesta de REST Countries:", json);
        setPaises(json.data.objects);

      } catch (err) {
        if (!controller.signal.aborted) {
          console.error(err);
          setError(
            "No se pudieron cargar los países"
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    }

    obtenerPaises();

    return () => controller.abort();
  }, []);

  return (
    <main>
      <h1>Countries Explorer</h1>
      <p>Lista de países obtenidos de REST Countries</p>

      {cargando && <p>Cargando países...</p>}

      {error && <p className="error">Error: {error}</p>}

      {!cargando && !error && (
        <section className="paises">
          {paises.map((pais) => (
            <article
              className="pais"
              key={pais.codes.alpha_2}
            >
              <img
                src={pais.flag?.url_png}
                alt={`Bandera de ${pais.names.common}`}
              />

              <h2>{pais.names.common}</h2>

              <p>Región: {pais.region || "No disponible"}</p>

              <p>
                Población:{" "}
                {pais.population?.toLocaleString("es-BO") ??
                  "No disponible"}
              </p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default App;

