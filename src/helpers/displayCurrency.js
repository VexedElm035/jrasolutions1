const displayINRCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-IN',{
        style : "currency",
        currency : 'MXN',
        minimumFractionDigits : 2
    })

    return formatter.format(num)

}

export default displayINRCurrency