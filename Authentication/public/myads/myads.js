import { myAds } from "../config/firebase.js";
async function userAds() {
  const userProduct = await myAds();
  setTimeout(() => {
    console.log(userProduct);
    var container = document.getElementById("container");

    for (var i = 0; i < userProduct.length; i++) {
      container.innerHTML += `
           <div class="row ads">
           <div class="col-md-3">
             <div class="card-container img-cont img-size">
         <div class="img-container">
           <img src="${userProduct[i].url}"class='pro' alt=""width="102%" height='100%' srcset="">
           <h6>${userProduct[i].title}</h6>
         </div>
             </div>
           </div>  
           <div class="col-md-3 box-flex">
             <div class="username">
               <h5><b>User Name:</b></h5>
               <h6>${userProduct[i].username}</h6>
             </div>
            <div class="cond">
             <h5><b>Condition:</b></h5>
             <h6>${userProduct[i].neww}</h6>
            </div>
           </div>  
           <div class="col-md-3 box-flex">
             <div class="username">
               <h5><b>Brand:</b></h5>
               <h6>${userProduct[i].brand}</h6>
             </div>
            <div class="cond">
             <h5><b>Contact:</b></h5>
             <h6>${userProduct[i].contact}</h6>
            </div>
           </div>  
           <div class="col-md-3 box-flex">
             <div class="username">
               <h5><b>Description:</b></h5>
               <h6>${userProduct[i].description}</h6>
             </div>
            <div class="cond">
             <h5><b>Price:</b></h5>
             <h6>Rs${userProduct[i].price}</h6>
            </div>
           </div>  
           </div>`;
      // const row = document.createElement('div')
      // row.className='row ads'
      // const col1 = document.createElement('div')
      // col1.className='col-md-3'
      // cont img
      // const col2 = document.createElement('div')
      // col1.className='col-md-3 box-flex'
      // const col3 = document.createElement('div')
      // col1.className='col-md-3 box-flex'
      // const col4 = document.createElement('div')
      // col1.className='col-md-3 box-flex'
      // const username = document.createElement('div')
      // const condition = document.createElement('div')
      // const brand = document.createElement('div')
      // const contact = document.createElement('div')
      // const description = document.createElement('div')
      // const price = document.createElement('div')
    }
  }, 2000);
}
userAds();
