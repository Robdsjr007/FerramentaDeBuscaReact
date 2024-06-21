import { useState, useEffect } from "react";

// 4 - Custom hooks

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    // 5 - Refatorando o POST
    const [config, setConfig] = useState(null); // Estado para armazenar a configuração da requisição
    const [method, setMethod] = useState(null); // Estado para armazenar o método da requisição
    const [callFetch, setCallFetch] = useState(false); // Estado para controlar se a requisição deve ser feita

    // 6 - Loading
    const [loading, setLoading] = useState(false)

    // 7 - Tratamento de erro
    const [error, setError] = useState(null)

    // DESAFIO DO DELETE

    const [itemId, setId] = useState(null)

    const httpConfig = (requestData, requestMethod) => {
        if (requestMethod === "POST") {
            setConfig({
                method: requestMethod,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestData),
            });
            setMethod(requestMethod);

            // DESAFIO DELETE

        } else if (requestMethod === "DELETE") {
            setConfig({
                method: requestMethod,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setMethod(requestMethod);
            setId(requestData)
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            // 6 - Loading
            setLoading(true);

            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
                setError("")
            } catch (error) {
               console.log(error.message)
               setError("Houve algum erro ao carregar os dados!")
            }
            
            setLoading(false);
        }

        fetchData();

    }, [url, callFetch]);

    //5 - Refatorando POST

    useEffect(() => {
        const httpRequest = async () => {

            let json

            if (method == "POST") {
                const res = await fetch(url, config);
                json = await res.json();
                
                // DESAFIO DELETE
            } else if (method == "DELETE") {
                const deleteURL = `${url}/${itemId}`
                const res = await fetch(deleteURL, config);
                json = await res.json();
            }
            setCallFetch(json);
        };

        httpRequest();
    }, [config, method, url, itemId]);

    return { data, httpConfig, loading, error};
};