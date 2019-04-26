//Make a random id
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
////////////////////////////////////////////////////////////////////////////////////////////
//    Recompile a div                                                                     //
//    https://stackoverflow.com/questions/25759497/angularjs-dynamically-set-attribute    //
//    http://jsfiddle.net/r2vb1ahy/                                                       //
////////////////////////////////////////////////////////////////////////////////////////////
 function compile(element){
   var el = angular.element(element);    
   $scope = el.scope();
     $injector = el.injector();
     $injector.invoke(function($compile){
        $compile(el)($scope)
     })     
 }
 function setNgAttribute(domId, ngAttribute, value){
     var el = document.getElementById(domId);
     el.setAttribute(ngAttribute, value);
     compile(el);
 }

  /////////////////////////////////////////////////////////////
 //                       Random data                       //
/////////////////////////////////////////////////////////////
//  function seekDb(){
//    var data = [
//       {"designation": "justo. Praesent", "unitPrice": "72504", "availableQuantity": 1},
//       {"designation": "In mi", "unitPrice": "24564", "availableQuantity": 10},
//       {"designation": "Mauris vestibulum,", "unitPrice": "18160", "availableQuantity": 7},
//       {"designation": "ipsum. Suspendisse", "unitPrice": "45047", "availableQuantity": 6},
//       {"designation": "dictum eu,", "unitPrice": "88589", "availableQuantity": 9},
//       {"designation": "pede blandit", "unitPrice": "12056", "availableQuantity": 9},
//       {"designation": "ultrices. Vivamus", "unitPrice": "23089", "availableQuantity": 1},
//       {"designation": "diam vel", "unitPrice": "4780", "availableQuantity": 10},
//       {"designation": "eu dui.", "unitPrice": "12158", "availableQuantity": 6},
//       {"designation": "et malesuada", "unitPrice": "3297", "availableQuantity": 4},
//       {"designation": "lobortis augue", "unitPrice": "46717", "availableQuantity": 1},
//       {"designation": "sodales purus,", "unitPrice": "52274", "availableQuantity": 9},
//       {"designation": "posuere cubilia", "unitPrice": "83827", "availableQuantity": 4},
//       {"designation": "vitae dolor.", "unitPrice": "58550", "availableQuantity": 8},
//       {"designation": "ut, pellentesque", "unitPrice": "21702", "availableQuantity": 5},
//       {"designation": "vitae, posuere", "unitPrice": "9563", "availableQuantity": 5},
//       {"designation": "fames ac", "unitPrice": "55581", "availableQuantity": 9},
//       {"designation": "Aliquam vulputate", "unitPrice": "92857", "availableQuantity": 7},
//       {"designation": "ipsum nunc", "unitPrice": "23109", "availableQuantity": 3},
//       {"designation": "magna nec", "unitPrice": "43249", "availableQuantity": 2},
//       {"designation": "id, libero.", "unitPrice": "61617", "availableQuantity": 5},
//       {"designation": "eu, eleifend", "unitPrice": "82792", "availableQuantity": 4},
//       {"designation": "magnis dis", "unitPrice": "25352", "availableQuantity": 9},
//       {"designation": "Nunc ullamcorper,", "unitPrice": "41551", "availableQuantity": 4},
//       {"designation": "amet ultricies", "unitPrice": "2532", "availableQuantity": 6},
//       {"designation": "ullamcorper viverra.", "unitPrice": "63239", "availableQuantity": 7},
//       {"designation": "augue ut", "unitPrice": "61833", "availableQuantity": 10},
//       {"designation": "in, cursus", "unitPrice": "2630", "availableQuantity": 7},
//       {"designation": "at pede.", "unitPrice": "86256", "availableQuantity": 8},
//       {"designation": "arcu et", "unitPrice": "33662", "availableQuantity": 6},
//       {"designation": "id, ante.", "unitPrice": "79455", "availableQuantity": 4},
//       {"designation": "amet, risus.", "unitPrice": "9696", "availableQuantity": 5},
//       {"designation": "quam, elementum", "unitPrice": "6666", "availableQuantity": 1},
//       {"designation": "et magnis", "unitPrice": "86028", "availableQuantity": 7},
//       {"designation": "Morbi vehicula.", "unitPrice": "0054", "availableQuantity": 3},
//       {"designation": "Etiam imperdiet", "unitPrice": "68997", "availableQuantity": 2},
//       {"designation": "Donec tincidunt.", "unitPrice": "95728", "availableQuantity": 7},
//       {"designation": "montes, nascetur", "unitPrice": "11390", "availableQuantity": 3},
//       {"designation": "tristique aliquet.", "unitPrice": "33736", "availableQuantity": 10},
//       {"designation": "malesuada id,", "unitPrice": "20248", "availableQuantity": 2},
//       {"designation": "facilisis facilisis,", "unitPrice": "20288", "availableQuantity": 1},
//       {"designation": "Sed auctor", "unitPrice": "32737", "availableQuantity": 2},
//       {"designation": "Integer vulputate,", "unitPrice": "50169", "availableQuantity": 1},
//       {"designation": "mi pede,", "unitPrice": "41665", "availableQuantity": 4},
//       {"designation": "ornare, lectus", "unitPrice": "89348", "availableQuantity": 8},
//       {"designation": "pharetra, felis", "unitPrice": "78775", "availableQuantity": 3},
//       {"designation": "sodales elit", "unitPrice": "5935", "availableQuantity": 7},
//       {"designation": "Mauris eu", "unitPrice": "11687", "availableQuantity": 3},
//       {"designation": "Quisque varius.", "unitPrice": "85052", "availableQuantity": 4},
//       {"designation": "a, auctor", "unitPrice": "17588", "availableQuantity": 9},
//       {"designation": "Nullam feugiat", "unitPrice": "45440", "availableQuantity": 8},
//       {"designation": "eget odio.", "unitPrice": "24674", "availableQuantity": 5},
//       {"designation": "ridiculus mus.", "unitPrice": "37505", "availableQuantity": 10},
//       {"designation": "vitae nibh.", "unitPrice": "5484", "availableQuantity": 3},
//       {"designation": "vitae odio", "unitPrice": "62480", "availableQuantity": 3},
//       {"designation": "aliquam, enim", "unitPrice": "34693", "availableQuantity": 10},
//       {"designation": "est. Mauris", "unitPrice": "54530", "availableQuantity": 8},
//       {"designation": "Sed nunc", "unitPrice": "23403", "availableQuantity": 6},
//       {"designation": "augue ac", "unitPrice": "14122", "availableQuantity": 9},
//       {"designation": "Mauris blandit", "unitPrice": "68440", "availableQuantity": 8},
//       {"designation": "tempor erat", "unitPrice": "52673", "availableQuantity": 5},
//       {"designation": "urna, nec", "unitPrice": "26766", "availableQuantity": 5},
//       {"designation": "est ac", "unitPrice": "5738", "availableQuantity": 8},
//       {"designation": "a feugiat", "unitPrice": "87072", "availableQuantity": 3},
//       {"designation": "quis urna.", "unitPrice": "43375", "availableQuantity": 5},
//       {"designation": "at pretium", "unitPrice": "89472", "availableQuantity": 1},
//       {"designation": "mi. Aliquam", "unitPrice": "57166", "availableQuantity": 9},
//       {"designation": "Phasellus libero", "unitPrice": "79875", "availableQuantity": 2},
//       {"designation": "Phasellus nulla.", "unitPrice": "31617", "availableQuantity": 10},
//       {"designation": "neque. In", "unitPrice": "25652", "availableQuantity": 10},
//       {"designation": "quam vel", "unitPrice": "2695", "availableQuantity": 8},
//       {"designation": "iaculis, lacus", "unitPrice": "78057", "availableQuantity": 5},
//       {"designation": "mauris sapien,", "unitPrice": "55897", "availableQuantity": 3},
//       {"designation": "et malesuada", "unitPrice": "68371", "availableQuantity": 4},
//       {"designation": "sit amet,", "unitPrice": "11002", "availableQuantity": 10},
//       {"designation": "libero. Donec", "unitPrice": "88143", "availableQuantity": 3},
//       {"designation": "porttitor tellus", "unitPrice": "58268", "availableQuantity": 10},
//       {"designation": "Suspendisse tristique", "unitPrice": "20935", "availableQuantity": 5},
//       {"designation": "luctus felis", "unitPrice": "83448", "availableQuantity": 7},
//       {"designation": "mauris a", "unitPrice": "78568", "availableQuantity": 7},
//       {"designation": "orci, adipiscing", "unitPrice": "79053", "availableQuantity": 1},
//       {"designation": "arcu. Curabitur", "unitPrice": "15206", "availableQuantity": 9},
//       {"designation": "Pellentesque ultricies", "unitPrice": "92071", "availableQuantity": 2},
//       {"designation": "ut nisi", "unitPrice": "10914", "availableQuantity": 7},
//       {"designation": "faucibus orci", "unitPrice": "20836", "availableQuantity": 1},
//       {"designation": "vulputate mauris", "unitPrice": "88624", "availableQuantity": 9},
//       {"designation": "blandit viverra.", "unitPrice": "54801", "availableQuantity": 4},
//       {"designation": "dui, in", "unitPrice": "72956", "availableQuantity": 4},
//       {"designation": "sollicitudin orci", "unitPrice": "61651", "availableQuantity": 1},
//       {"designation": "id, ante.", "unitPrice": "80085", "availableQuantity": 4},
//       {"designation": "placerat, orci", "unitPrice": "98448", "availableQuantity": 9},
//       {"designation": "tellus lorem", "unitPrice": "23648", "availableQuantity": 5},
//       {"designation": "dolor. Fusce", "unitPrice": "98005", "availableQuantity": 6},
//       {"designation": "tristique aliquet.", "unitPrice": "51502", "availableQuantity": 8},
//       {"designation": "ac risus.", "unitPrice": "85468", "availableQuantity": 2},
//       {"designation": "diam lorem,", "unitPrice": "51635", "availableQuantity": 1},
//       {"designation": "aliquet nec,", "unitPrice": "13351", "availableQuantity": 8},
//       {"designation": "dui. Suspendisse", "unitPrice": "22945", "availableQuantity": 5},
//       {"designation": "Lorem ipsum", "unitPrice": "49540", "availableQuantity": 9},
//       {"designation": "a, facilisis", "unitPrice": "42916", "availableQuantity": 6}
//    ];

//    var db = firebase.firestore();
//    data.forEach(function(product){
//       db.collection("products").doc(makeid(15))
//       .set(product)
//       .then(function() {
//          console.log("Document successfully written!");
//          // $window.location.href = '/products';
//       })
//       .catch(function(error) {
//          console.error("Error writing document: ", error);
//       });
//    });
//  }
//  seekDb();