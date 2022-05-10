import axios from 'axios'

const apiInstance = axios.create({
    baseURL:'http://localhost:3000/',
    headers: {
        API: 'API Fake',
    },
})

export async function getAllLanistes() {
    try {
        const res = await apiInstance('/lanistes');
        console.log("datA", res.data)
        return res.data
    } catch (e) {
        throw new Error('Une erreur est survenue')
    }
}



export async function getLanistesById() {
    try {
        const res = await apiInstance(`/lanistes/`);
        console.log("dDtA", res.data)

            return res.data
    } catch (e) {
        throw new Error('Une erreur est survenue')
    }
}



export async function getAllLudis() {
    try {
        const res = await apiInstance('/ludis');
        console.log("datA", res.data)
        return res.data
    } catch (e) {
        throw new Error('Une erreur est survenue')
    }
}

export async function getAllGladiateurs() {
    try {
        const res = await apiInstance('/gladiateurs');
        console.log("datA", res.data)
        return res.data
    } catch (e) {
        throw new Error('Une erreur est survenue')
    }
}

export async function getAllEntrainements() {
    try {
        const res = await apiInstance('/entrainements');
        console.log("datA", res.data)
        return res.data
    } catch (e) {
        throw new Error('Une erreur est survenue')
    }
}

// export async function getLanisteByName(name) {
//     try {
//         const res = await apiInstance.get(name);
//         console.log("data", res.data)
//         return res.data
//     } catch (e) {
//         if (e.response.status === 404) {
//             throw new Error(`Le laniste ${name} n'existe pas`)
//         }
//         throw new Error('Une erreur est survenue')
//     }
// }
