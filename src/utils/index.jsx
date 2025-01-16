const rupiahformat = (value) => (new Intl.NumberFormat ("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
}).format(value, 0))

export {
    rupiahformat
}