function validateCreditCard(card) {
    // Remove all non-digit characters
    const sanitized = card.replace(/[^0-9]/g, '');

    const bandeiras = [
        { name: "Visa", regex: /^4\d{12}(\d{3})?$/ },
        { name: "MasterCard", regex: /^(5[1-5]\d{14}|2(2[2-9]|[3-6]\d|7[01])\d{12})$/ },
        { name: "American Express", regex: /^3[47]\d{13}$/ },
        { name: "Discover", regex: /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/ },
        { name: "Hipercard", regex: /^6062\d*$/ },
        { name: "Diners Club", regex: /^3\d{13}$/ },
        { name: "EnRoute", regex: /^2(014|149)\d*$/ },
        { name: "JCB", regex: /^35\d{14}$/ },
        { name: "Voyager", regex: /^86\d{3}\s?\d{4}\s?\d{5}\s?\d{1,3}$/ },
        { name: "Aura", regex: /^50(69|12)\d{12}$/ }, 
        { name: "Elo", regex: /^(4011|4312|4389|45[1-9]\d|50[0-8]\d{2}|6277|6363)\d*$/ } 
    ];

    // Validate and identify the bandeira
    for (let bandeira of bandeiras) {
        if (bandeira.regex.test(sanitized)) {
            return `Bandeira: ${bandeira.name}`;
        }
    }

    return "Bandeira desconhecida ou número inválido.";
}

// Example usage
console.log(validateCreditCard("6062 8218 1174 8368"));  