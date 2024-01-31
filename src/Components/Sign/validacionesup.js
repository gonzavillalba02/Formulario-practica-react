export const validName = (name) => (name.length >= 2);

export const validEmail = (email) => (email.includes('@'));

const lista = ['#', '-', '_', '$', '@']
const mayusculas = []

export const validPassword = (pass) => {

    let band1 = false
    for(let i=0;i<lista.length;i++){
        if(pass.includes(lista[i])){
            band1 = true
            break
        }
    }

    let band2 = false
    for(let i = 65; i <= 90; i++){
        if(pass.includes(String.fromCharCode(i))){
            band2 = true
            break
        }
    }

    return (band1 && band2 && pass.length>=8 && pass.length<=20)
}