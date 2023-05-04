import "../component/NavBar.js";
import Customers from "../js/customers.js";

const URL_API = "https://64524861bce0b0a0f741cb69.mockapi.io/";
const regCli = document.querySelector('#regCli');
const listCli = document.querySelector('#listCli');
const SearchCli = document.querySelector('#SearchCli');

const getCustomers = async () => {

    try{
        const respuesta = await fetch(`${URL_API}/Users`);
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

listCli.addEventListener("click", getCustomers);


function viewDataHtml(dataUsers){
    
    const divCards = document.querySelector('#cardsUsers');
    divCards.innerHTML = '';

    dataUsers.forEach(user => {
        
        const cardUser = document.createElement('div');
        cardUser.innerHTML = /* html */ `
            <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Info card title</h5>
                        <p class="card-text">${user.name} ${user.lastname}</p>
                        <p class="card-text">${user.email}</p>
                    </div>
            </div>

            `;
           
            divCards.appendChild(cardUser);
            console.log(dataUsers);

});
    


}