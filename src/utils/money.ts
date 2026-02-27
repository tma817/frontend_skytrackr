export default function money(value?: number, currency = "CAD") {
    if (typeof value !== "number") return "";
    return new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(value);
}