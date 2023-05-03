// const pedirAumento = new Promise ((res,req)=>
//     {
//         const tiempo = 10;
//         if(tiempo >= 10){
//             res('Ya tengo el tiempo para pedir aumento de sueldo');
//         }else{
//             req('Todavia no puedo pedir aumento no tengo la antiguedad');
//         }});

// pedirAumento.then((result)=>{console.log(result);}).catch((err)=>{console.log(err);})
// console.log(pedirAumento);




// const URL_API = 'data/data.txt';
// const loadDataBtn = document.querySelector('#cargarData');

// loadDataBtn.addEventListener("click",getData);

// function getData(){
//     fetch(URL_API)
//         .then(URL_API).then(res => {return res.text();}).then((datos) =>{console.log(datos);}).catch((err)=>{console.log(err);})
// }



const URL_API = 'data/studen.json';

const loadDataBtn = document.querySelector('#cargarData');
loadDataBtn.addEventListener("click",getData);

function getData(){
    fetch(URL_API)
    .then(res => {return res.json();})
    .then((datos) =>{viewHTML(datos);})
    .catch((err)=>{console.log(err);})
}

function viewHTML(myData){
    const {id,name,edad,ingles} = myData;
    console.log(myData);
    console.log(myData.id);
    const div = document.createElement('div');
    div.innerHTML = '<P> id: '+myData.id+'</P><P>Nombre: '+myData.name+'</P><P>Edad: '+myData.edad+'</P><P>Ingles: '+myData.ingles+'</P>';
    document.body.appendChild(div);
    
}
