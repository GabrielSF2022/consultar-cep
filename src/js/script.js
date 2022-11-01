const cep = document.querySelector("#cep");
const button = document.querySelector("#button")
const result = document.querySelector(".result")
const result_ivalid = document.querySelector(".container-result-invalid") 

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
        
    }
}

button.addEventListener("click",(e)=>{
    if(cep.value === ''){

        result_ivalid.classList.add("red")
        result_ivalid.textContent = 'CEP INVALIDO!'

        setTimeout(()=>{
            result_ivalid.textContent  = ''
        },3000)
    }
    else{
        let search = cep.value.replace("-","")
        const options = {
            method : 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch(`https://viacep.com.br/ws/${search}/json`)
        .then((response)=> {response.json().
            then( data => showData(data))
        })

        .catch(e => console.log('Deu Erro: '+ e,message))
        console.log(cep.value + "dsfsd")

        result.classList.add('open')

    }

})

