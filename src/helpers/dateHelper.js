
export function formatDate(dateString) {
    const data = new Date(dateString)

    return data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).replace(/de /g, "").replace(".", ",")
}
