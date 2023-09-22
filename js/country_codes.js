const input = document.querySelector("#phone")

export const iti = intlTelInput(input, {
    initialCountry: "co",
    preferredCountries: ["co","us","ve"],
    separateDialCode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"
})

window.iti