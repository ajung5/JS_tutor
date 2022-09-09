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


// Kita dapat menggunakan alias ketika melakukan export di module
// Caranya menggunakan kata kunci as, lalu diikuti dengan nama alias :export { variable as variableLain, function as functionLain, Class as ClassLain }

// export {company as perusahaan, sum as total, Company as Perusahaan}

export {company, sum, Company}