
$(document).ready(function() {
  $('.add_to_cart').click(function(e) {
    var data = {
      items:[]
    };
    var random = Math.floor(1000 + Math.random() * 9000);
    $('.metafeild_product input[type="checkbox"]:checked').each(function() {
      var variantId = $(this).attr('data');
      var quantity = 1;
      data.items.push({
        id: variantId,
        quantity: quantity,
        properties:{
          'Bundle_id': random
        }
      });
    });

    console.log(data);
    
      $.ajax({
        url: '/cart/add.js',
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function(response) {
          // console.log('Product(s) added to cart successfully:', response);
          alert("done");
        },
        error: function(xhr, status, error) {
          console.log('Error adding to cart:', error);
        }
      }); 
    //     function setproperty(params) {
    //   $('.cart-item').attr('bundle_id', params);
    // }
  });
    // $(document).on('click', '.remove_product', function(e) {
    //     e.preventDefault();
    //     var this_ = this
    //     var key = $(this_).attr('data-key');
    //     // console.log(key);
    //     $.ajax({
    //         type: "POST",
    //         url: "/cart/change.js",
    //         data: {
    //           id: key, 
    //           quantity: 0
    //         },
    //         dataType: 'json',
    //         success: function (data) {
    //             // updateCartDetails(data);
    //             $(this_).closest('.cart-item').remove();
    //         },
    //         error: function (xhr, status, error) {
    //             console.error('Error removing product:', error);
    //         }
    //     });
    // });

$(document).on('click', '.remove_product', function(e) {
    e.preventDefault();
    var updateData = {}
     var bundle_id = $(this).attr('bundle_id');
    $('.cart-item[bundle-id="'+bundle_id+'"]').each(function () {
        var key = $(this).data('itemkey'); 
       updateData[key] = 0;
    });
  
   console.log(updateData);

    $.ajax({
        type: "POST",
        url: "/cart/update.js",
        data: {
         updates: updateData
        },
        dataType: 'json',
        success: function (data) {
          console.log('yes');
         console.log(data);
        },
        error: function (xhr, status, error) {
            console.log('Error removing product:', error);
        }
    });
});


});


// document.addEventListener('DOMContentLoaded', function() {
//     const cartTotalElement = document.getElementById('cart-total-count');
//     function updateCartTotal() {
//         fetch('/cart.js', { credentials: 'same-origin' })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 const cartTotalCount = data.item_count;
//                 cartTotalElement.textContent = cartTotalCount;
//                 console.log(cartTotalCount); 
//             })
//             .catch(error => {
//                 console.error('Error fetching cart:', error);
//             });
//       }
//     updateCartTotal();
//     setInterval(updateCartTotal, 2000); 
// });
 // var randomProperty = Math.random().toString(36).substring(7);


// function removeproduct() {
//     $('.remove_product').click(function (e) {
//         e.preventDefault();
        
//         var $removeBtn = $(this);
//         var id = $removeBtn.data('id');
        
//         $.ajax({
//             type: "DELETE",
//             url: "/cart/remove.js",
//             data: { id: id },
//             success: function (data) {
//                 $('.cart-data-details__total').remove();
//             },
//             error: function (xhr, status, error) {
//                 console.error('Error removing product:', error);
//                 // Handle error case if needed
//             }
//         });
//     });
// });



// fetch collection with html css using ajax
// document.addEventListener('DOMContentLoaded', function() {
//   var buttons = document.querySelectorAll('.fetch-collection-button');
//   buttons.forEach(button => {
//     button.addEventListener('click', function(event) {
//       var collectionHandle = event.target.dataset.collectionHandle;
//       fetchProducts(collectionHandle);
//     });
//   });
//   function fetchProducts(collectionHandle) {
//     var limit = 10;
//     $.ajax({
//       url: `/collections/${collectionHandle}?view=ajax-product-grid&limit=${limit}`,
//       type: 'GET',
//       dataType: 'html',
//       success: function(data) {
//         var data_products = $(data).find('.product-grid-container').html();
//         $('#inner').html(data_products);
//         console.log(data_products);    
//       },
//       error: function(xhr, status, error) {
//         console.error('An error occurred: ' + error);
//       }
//     });
//   }
// });
