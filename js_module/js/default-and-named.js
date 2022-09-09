// Dalam satu module, kita bisa menggabungkan export default dan export named
// Yang tidak boleh adalah, dalam satu module, membuat lebih dari satu default
// Cara import default dan named secara bersamaan bisa menggunakan perintah :import defaultAlias, {named1, named2} from “./module.js”;import {default as defaultAlias, named1, named2} from “./module.js”;

// bisa mix cara mengexport,
//  tidak boleh export default lebih dari satu kali
// # Kode export default dan Named
export const title = "Mamam Skuy";

const content = "Belajar memasak ikan bumbu cabe Ijo";

const author = "Ajung Nawawi";

export { content };

export default author;

// # Rekomendasi
// Bedakan antara default dan named, karena jika digabungkan kadang akan membingungkan ketika melakukan import
// Sebisa mungkin selalu gunakan export named dibandingkan export default
