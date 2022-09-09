const company = "PT. Alim Rugi" // varibel

// function
function sum (a, b) {
    return a + b
}

// class
class Company {
    constructor (name, address) {
        this.name = name;
        this.address = address;
    }

    getCompany() {
        console.info(`Nama Perusahaan: ${this.name}, alamat ${this.address}`);
    } 
}

export {company, sum, Company}