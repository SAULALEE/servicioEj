async function ejecuta() {
    try {
        // Se conecta a servicio.php y recibe su respuesta.
        const resp =
            await fetch("servicio.php")
        if (resp.ok) {
            const texto =
                await resp.text()
            alert(texto)
        } else {
            throw new Error(
                resp.statusText)
        }
    } catch (error) {
        console.error(error)
        alert(error.message)
    }
}