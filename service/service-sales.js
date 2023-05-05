import "../component/NavBar.js";

const URL_API = "https://64524861bce0b0a0f741cb69.mockapi.io/";
const regCli = document.querySelector('#regSale');
const listSale = document.querySelector('#listSale');
const SearchCli = document.querySelector('#SearchSale');

const getSales = async () => {

    try{
        const respuesta = await fetch(`${URL_API}/Users/:id/sales`);
        //Respuesta correcta
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            viewDataHtml(datos);
        } else if(respuesta.status === 401){
            console.warn('La url no es correcta');
        } else if(respuesta.status === 404){
            console.warn('El cliente que buscas no existe');
        }else {
            console.warn('Se presento un eror en la petición');
        }
    }catch(error){
        console.error(error);
    }

}

listSale.addEventListener("click", getSales);

function viewDataHtml(dataSale){
    
    const divSales = document.querySelector('#cardsSales');
    divCards.innerHTML = "";

    dataSale.forEach(sale => {
        
        const cardSale = document.createElement('div');
        cardUser.innerHTML = /* html */ `
            <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Info card title</h5>
                        <p class="card-text">${sale.nameVendedor}</p>
                        <p class="card-text">${sale.productos}</p>
                    </div>
            </div>

            `;
           
            divSales.appendChild(cardSale);
            console.log(dataSale);

    });
    
}