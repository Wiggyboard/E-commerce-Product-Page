let quantity = 1;
let cartQuantity = 0;

$("#thumb-1").addClass("thumbnail-selected");
$("#thumb-1").removeClass("thumbnail");

function plus() {
  quantity++;
  document.getElementById("quantity").textContent = quantity;
}

function minus() {
  if (quantity === 1) {}
  else {
    quantity--;
    document.getElementById("quantity").textContent = quantity;  
  }
}

function addToCart() {
  cartQuantity += quantity;
  document.getElementById("cart-badge").style.display = "block";
  document.getElementById("cart-badge").innerText = cartQuantity;
  document.getElementById("cart-quantity").innerText = cartQuantity + "\xa0\xa0";
  document.getElementById("cart-total").innerText = "$" + 125 * cartQuantity + ".00";
  document.getElementById("cart-icon-container").style.animation="cart-update .2s linear 1";
  setTimeout(resetCartAnimation, 200);
}

function resetCartAnimation() {
  document.getElementById("cart-icon-container").style.animation="none";
}

function openCart() {
  document.body.addEventListener("click", closeCart);
  document.getElementById("cart").style.display = "flex";
  if (cartQuantity > 0) {
    document.getElementById("cart-empty").style.display = "none";
    document.getElementById("cart-filled").style.display = "flex";
  }
}

function closeCart() {
  document.getElementById("cart").style.display = "none";
}

function deleteCart() {
  cartQuantity = 0;
  document.getElementById("cart-badge").style.display = "none";
  document.getElementById("cart-filled").style.display = "none";
  document.getElementById("cart-empty").style.display = "flex";
}

function selectThumb(event) {
  let thumbID = event.currentTarget.getAttribute("id");
  $(".thumbnail-selected").not(this).addClass("thumbnail");
  $(".thumbnail").not(this).removeClass("thumbnail-selected");
  $(event.currentTarget).addClass("thumbnail-selected");
  $(event.currentTarget).removeClass("thumbnail");
  if (thumbID === "thumb-1") {
    document.getElementById("product-image").src = "images/image-product-1.jpg";
  }
  if (thumbID === "thumb-2") {
    document.getElementById("product-image").src = "images/image-product-2.jpg";
  }
  if (thumbID === "thumb-3") {
    document.getElementById("product-image").src = "images/image-product-3.jpg";
  }
  if (thumbID === "thumb-4") {
    document.getElementById("product-image").src = "images/image-product-4.jpg";
  }
}

function openLB() {
  let currentPImage = document.getElementById("product-image").src;
  if ($(window).width() > 1040) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lb-product-image").src = currentPImage;
    $(".lb-thumbnail-selected").addClass("lb-thumbnail");
    $(".lb-thumbnail-selected").removeClass("lb-thumbnail-selected");
    if (currentPImage.includes("1.jpg")) {
      $("#lb-thumb-1").addClass("lb-thumbnail-selected");
    }
    if (currentPImage.includes("2.jpg")) {
      $("#lb-thumb-2").addClass("lb-thumbnail-selected");
    }
    if (currentPImage.includes("3.jpg")) {
      $("#lb-thumb-3").addClass("lb-thumbnail-selected");
    }
    if (currentPImage.includes("4.jpg")) {
      $("#lb-thumb-4").addClass("lb-thumbnail-selected");
    }
  }
}

function selectLBThumb(event) {
  let lbThumbID = event.currentTarget.getAttribute("id");
  $(".lb-thumbnail-selected").not(this).addClass("lb-thumbnail");
  $(".lb-thumbnail").not(this).removeClass("lb-thumbnail-selected");
  $(event.currentTarget).addClass("lb-thumbnail-selected");
  $(event.currentTarget).removeClass("lb-thumbnail");
  if (lbThumbID === "lb-thumb-1") {
    document.getElementById("lb-product-image").src = "images/image-product-1.jpg";
  }
  if (lbThumbID === "lb-thumb-2") {
    document.getElementById("lb-product-image").src = "images/image-product-2.jpg";
  }
  if (lbThumbID === "lb-thumb-3") {
    document.getElementById("lb-product-image").src = "images/image-product-3.jpg";
  }
  if (lbThumbID === "lb-thumb-4") {
    document.getElementById("lb-product-image").src = "images/image-product-4.jpg";
  }
}

function nextLB() {
  let currentLBPImage = document.getElementById("lb-product-image").src;
  $(".lb-thumbnail").not(this).removeClass("lb-thumbnail-selected");
  if (currentLBPImage.includes("1.jpg")) {
    document.getElementById("lb-product-image").src = "images/image-product-2.jpg";
    $("#lb-thumb-2").addClass("lb-thumbnail-selected");
    $("#lb-thumb-1").removeClass("lb-thumbnail-selected");
    $("#lb-thumb-1").addClass("lb-thumbnail");
  }
  if (currentLBPImage.includes("2.jpg")) {
    document.getElementById("lb-product-image").src = "images/image-product-3.jpg";
    $("#lb-thumb-3").addClass("lb-thumbnail-selected");
    $("#lb-thumb-2").removeClass("lb-thumbnail-selected");
    $("#lb-thumb-2").addClass("lb-thumbnail");
  }
  if (currentLBPImage.includes("3.jpg")) {
    document.getElementById("lb-product-image").src = "images/image-product-4.jpg";
    $("#lb-thumb-4").addClass("lb-thumbnail-selected");
    $("#lb-thumb-3").removeClass("lb-thumbnail-selected");
    $("#lb-thumb-3").addClass("lb-thumbnail");
  }
  if (currentLBPImage.includes("4.jpg")) {
    document.getElementById("lb-product-image").src = "images/image-product-1.jpg";
    $("#lb-thumb-1").addClass("lb-thumbnail-selected");
    $("#lb-thumb-4").removeClass("lb-thumbnail-selected");
    $("#lb-thumb-4").addClass("lb-thumbnail");
  }
}

function previousLB() {
  let currentLBPImage = document.getElementById("lb-product-image").src;
  $(".lb-thumbnail").not(this).removeClass("lb-thumbnail-selected");
  if (currentLBPImage.includes("1.jpg")) {
    document.getElementById("lb-product-image").src = "images/image-product-4.jpg";
    $("#lb-thumb-4").addClass("lb-thumbnail-selected");
    $("#lb-thumb-1").removeClass("lb-thumbnail-selected");
    $("#lb-thumb-1").addClass("lb-thumbnail");
  }
  if (currentLBPImage.includes("2.jpg")) {
    document.getElementById("lb-product-image").src = "images/image-product-1.jpg";
    $("#lb-thumb-1").addClass("lb-thumbnail-selected");
    $("#lb-thumb-2").removeClass("lb-thumbnail-selected");
    $("#lb-thumb-2").addClass("lb-thumbnail");
  }
  if (currentLBPImage.includes("3.jpg")) {
    document.getElementById("lb-product-image").src = "images/image-product-2.jpg";
    $("#lb-thumb-2").addClass("lb-thumbnail-selected");
    $("#lb-thumb-3").removeClass("lb-thumbnail-selected");
    $("#lb-thumb-3").addClass("lb-thumbnail");
  }
  if (currentLBPImage.includes("4.jpg")) {
    document.getElementById("lb-product-image").src = "images/image-product-3.jpg";
    $("#lb-thumb-3").addClass("lb-thumbnail-selected");
    $("#lb-thumb-4").removeClass("lb-thumbnail-selected");
    $("#lb-thumb-4").addClass("lb-thumbnail");
  }
}

function closeLB() {
  document.getElementById("lightbox").style.display = "none";
}

function openMenu() {
  document.getElementById("menu-lightbox").style.display = "flex";
  document.getElementById("menu").style.animation = "menu-slide .3s ease 1 both";
  setTimeout(resetOpenMenuAnimation, 300);
}

function resetOpenMenuAnimation() {
  document.getElementById("menu").style.left = "0";
  document.getElementById("menu").style.animation = "none";
}

function closeMenu() {
  document.getElementById("menu").style.animation = "menu-slide .3s ease 1 reverse both";
  setTimeout(resetCloseMenuAnimation, 300);
}

function resetCloseMenuAnimation() {
  document.getElementById("menu-lightbox").style.display = "none";
  document.getElementById("menu").style.left = "-25rem";
  document.getElementById("menu").style.animation = "none";
}

function nextMobilePImage() {
  let currentPImage = document.getElementById("product-image").src;
  if (currentPImage.includes("1.jpg")) {
    document.getElementById("product-image").src = "images/image-product-2.jpg";
  }
  if (currentPImage.includes("2.jpg")) {
    document.getElementById("product-image").src = "images/image-product-3.jpg";
  }
  if (currentPImage.includes("3.jpg")) {
    document.getElementById("product-image").src = "images/image-product-4.jpg";
  }
  if (currentPImage.includes("4.jpg")) {
    document.getElementById("product-image").src = "images/image-product-1.jpg";
  }
}

function previousMobilePImage() {
  let currentPImage = document.getElementById("product-image").src;
  if (currentPImage.includes("1.jpg")) {
    document.getElementById("product-image").src = "images/image-product-4.jpg";
  }
  if (currentPImage.includes("2.jpg")) {
    document.getElementById("product-image").src = "images/image-product-1.jpg";
  }
  if (currentPImage.includes("3.jpg")) {
    document.getElementById("product-image").src = "images/image-product-2.jpg";
  }
  if (currentPImage.includes("4.jpg")) {
    document.getElementById("product-image").src = "images/image-product-3.jpg";
  }
}