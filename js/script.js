let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header')
let checkCart = document.querySelectorAll('.check-cart')



menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

window.onscroll = () => {
  const top = window.scrollY
  if(top>100){
    header.classList.add('actives')
  }else{
    header.classList.remove('actives')
  }
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');  
}



const cartContainer = document.querySelector('.cart-items')
const addBtn = document.querySelectorAll('.check-cart')


addBtn.forEach((b,index) => {
    b.addEventListener('click', (e) => {
        const btnItem = e.target
        const product = btnItem.parentElement.parentElement
        const productImg = product.querySelector('img').src
        const productName = product.querySelector('h3').innerText
        const productPrice = document.querySelector('.price').innerText
        addCart(productImg, productName, productPrice)
        deleteCart()
    })
})

function addCart(productImg, productName, productPrice){
    const cartTable = document.querySelectorAll('.cart-item')
    const addDiv = document.createElement("div")
    addDiv.innerHTML = `
    <div class="cart-item">
        <div class="cart-times">
            <span class="fas fa-times"></span>
        </div>
        <img src="${productImg}" alt="">
        <div class="content">
            <h3>${productName}</h3>
            <div class="price">${productPrice}</div>
        </div>
    </div>`
    cartContainer.append(addDiv)
}
function deleteCart(){
    const timesCart = document.querySelectorAll('.cart-times')
    const cartTable = document.querySelectorAll('.cart-item')
    console.log(cartTable)
    for(let i = 0; i<cartTable.length; i++){
        timesCart[i].addEventListener('click', (e)=>{
            const productD = e.target.parentElement
            productD.parentElement.remove()
        })
    }
}