function getSuspender(promise) {
    let status = "pending";
    let response;

    const suspender = promise.then(
        (res) => {
            status = "resolved";
            response = res;
        },
        (err) => {
            status = "error";
            response = err;
        }
    );

    const read = () => {
        switch (status) {
            case "pending":
                throw suspender; // Se agrega la palabra clave 'throw' y se usa 'new' para crear un nuevo objeto de Error

            case "error":
                throw new Error(response); // Se usa 'new' para crear un nuevo objeto de Error
            default:
                return response;
        }
    };

    return { read };
}

export function fetchData() {
    const promise = fetch("http://localhost:4000/messages/1")
        .then((response) => response.json())
        .then((data) => data);

    return getSuspender(promise);
}
