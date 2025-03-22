// Entrada: "5511912341234"
// Saída: "11 9 1234-1234"

const formatPhoneText = (phone: string) => {
    return phone.replace(/^55(\d{2})(\d)(\d{4})(\d{4})$/, "($1) $2 $3-$4");
}

export default formatPhoneText