const FormatePrice = ({ price }) => {
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,

    }).format(price)
};

export default FormatePrice;