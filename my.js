$(document).ready(function(){
    const SALT = "i#8^*uu";
    const HASH_WORD4 = ['5857a15197da7e2cb27ac79c1df7c8d0', '238a7beb2aa98eec69bb8c87a3a5b807'];
    const HASH_WORD7 = ['ae8ddd2731a67f791be759386ee2cdd8', 'a3f16e0e13008fca49d4f7ccd996bd7f'];
    const HASH_WORD9 = ['3d19467836b301e6ddca9f8ce9471e34', 'f6cca3ccc0e17ec6e93becbdcd208a05'];
    const HASH_WORD12 = ['8af087274d376c735558b5b68b969fbb', 'bb0486486b4f036cbd1ab1151b81951d'];
    const HASH_WORD17 = ['d2e9fc3e872f55491f1f3312258c9f0b', '75dbdcc21bca3478e813c0d5f04239a3'];
    const HASH_WORD21 = ['86693b7716365cf8da2ab2dbc20c45c2', '007df5a0418dabfde62cfe84c3ad9dae'];
    const CORRECT_WORD = [
        '379eff4c6472c0b6fce840d08ca79983','96f0fcf02b32dfb67908c226f1a2e133', '416f77986735274b7b2312e8037ce4d9', '595bf8aca6783496f45804f1ee782ae6',
        'aa22974056c4ef1285f8697565ebe682', 'b2767bf5d76e85f6a6f6f6cf5f2332c3', 'c893fecf4284259f3baf610b4bfeef33', '2bbfb8e162998fc07d552ffc14103b04',
        'de8a6066f3cf9abd3e5184c3a2658d1d', '1f8b75e6724b043c876a7f36bfa2931f', '2a72875320aedc6f93e1505563922aa5', 'f69402eeb5c6ccb5a2d794a56d1a7e52',
        '04a6c4384aa8c581ae1d4ba230947914', '321a4116cfaf2d34a3a70ec8e69818f7', '939e22f4cddff64d419c88e89653ca0f', 'b432986c44c9e7e4c8315ba21f3a3930',
        '8880b74209d5c468ed0cbc4c0229ff23', '960ecdca0dafc7990a75e66f85c38164', 'bda1d856ff9fcb4f32503c53b0b23608'
    ].concat(HASH_WORD4, HASH_WORD7, HASH_WORD9, HASH_WORD9, HASH_WORD12, HASH_WORD17, HASH_WORD21);
    let openNext = false;

    $('.checkBlock button').click(function () {
        //first row
        verificationCa('#word1');
        verificationW2();
        simpleVerification('379eff4c6472c0b6fce840d08ca79983', '#word3');
        verificationW4();
        verificationW5();
        verificationW6();
        verificationW7();

        //second row
        simpleVerification('96f0fcf02b32dfb67908c226f1a2e133', '#word8');
        verificationW9();
        verificationW10();
        simpleVerification('416f77986735274b7b2312e8037ce4d9', '#word11');
        verificationW12();
        verificationW13();

        //third row
        simpleVerification('aa22974056c4ef1285f8697565ebe682', '#word14');
        simpleVerification('b2767bf5d76e85f6a6f6f6cf5f2332c3', '#word15');
        verificationW16();
        verificationW17();
        simpleVerification('c893fecf4284259f3baf610b4bfeef33', '#word18');
        verificationCa('#word19');
        simpleVerification('2bbfb8e162998fc07d552ffc14103b04', '#word20');
        verificationW21();
        simpleVerification('96f0fcf02b32dfb67908c226f1a2e133', '#word22');

        //fourth row
        simpleVerification('de8a6066f3cf9abd3e5184c3a2658d1d', '#word23');
        verificationW24();
        simpleVerification('1f8b75e6724b043c876a7f36bfa2931f', '#word25');
        verificationW26();
        simpleVerification('2a72875320aedc6f93e1505563922aa5', '#word27');


        // open grad msg
        isSuccess();
        
    });
// -----------
    function isSuccess() {
        let elements = $('input.success');
        if (elements.length === 27) {
            $('.gradBlock').css('display','block');
            $('.checkBlock').css('display','none');
        }
    };
//-----------------------
    function setSuccessClass(elem){
        elem.addClass("success");
        elem.removeClass("error");
        elem.removeClass("mistakePlace");
        elem.removeClass("mistake");
        elem.attr("disabled", true);
    }
    function setMistakePlaceClass(elem){
        elem.addClass("mistakePlace");
        elem.removeClass("error");
        elem.removeClass("mistake");
    }
    function setMistakelass(elem){
        elem.addClass("mistake");
        elem.removeClass("error");
        elem.removeClass("mistakePlace");
    }
    function setErrorClass(elem){
        elem.addClass("error");
        elem.removeClass("mistake");
        elem.removeClass("mistakePlace");
    }
//--------------
    function simpleVerification ( hash, idInput) {
       let element = $(idInput);
       let text =  element.val();
       let strHash = md5(SALT + text.toLowerCase());

       if (strHash === hash) {
        setSuccessClass(element);
       }else if(CORRECT_WORD.includes(strHash)){
        setMistakePlaceClass(element);
       } else{
        setErrorClass(element);
       }

    }
	
	function verificationCa(id) {
        let hashS = '595bf8aca6783496f45804f1ee782ae6';
        let element = $(id);
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());
   
        if (strHash === hashS) {
         setSuccessClass(element);
		}else if (HASH_WORD4.includes(strHash)) {
			 setMistakelass(element);
		 }else if(CORRECT_WORD.includes(strHash)){
			 setMistakePlaceClass(element);
		 }else{
			 setErrorClass(element);
		 }
    }

    function verificationW2 () {
     let hashS = 'b432986c44c9e7e4c8315ba21f3a3930';
     let hashM = ['c3dda1cbbee902c643733d99ebdd30b7', '96f0fcf02b32dfb67908c226f1a2e133', '157404ad9bd3c8f39fc9680e6417c77d', 
     '79c9b304081254c238924ace2f389757', 'ac4a36486e0a18f95876fa66d4cf7d9a', '6f8847816315b449455ff8ef668fcb32', 
     'b20c7614df9992d2e450202121bc4474', '73580d7719472b82c5a84d97a949d720', '6a031b30022a17d3efd83a7cf2696737', 
     'e7e5e76a9319e492da13387f9160739c', '0457e32c9c4ad981215e9fac3b58534a', '69e35d87cf30defa47427a16ac02df81', 
     '8bd1a61a9a7d923121b32ad600f5ccad', '5d976fd3a342497ee05ce5c5676b9229', '1a4eb4ba0c84d71604faa82ebd0f8ef2', 
     'ea4d7030c5d317d2fcb490b4947b621c', 'cce1567e7721558f663b03c056cd980e', 'a7ac392b93960e058547e1754e0cd5dd'];
     let element = $('#word2');
     let text =  element.val();
     let strHash = md5(SALT + text.toLowerCase());

     if (strHash === hashS) {
         setSuccessClass(element);
	}else if (hashM.includes(strHash)) {
         setMistakelass(element);
     }else if(CORRECT_WORD.includes(strHash)){
         setMistakePlaceClass(element);
     }else{
         setErrorClass(element);
     }
    
    }

    function verificationW4 () {
        let element = $('#word4');
		let hashM = '595bf8aca6783496f45804f1ee782ae6';
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());
		
        if (HASH_WORD4.includes(strHash)) {
            setSuccessClass(element);
		}else if (hashM === strHash) {
			 setMistakelass(element);
		 }else if(CORRECT_WORD.includes(strHash)){
			 setMistakePlaceClass(element);
		 }else{
			 setErrorClass(element);
		 }
		
    }

    function verificationW5 () {
        let hash = ['f69402eeb5c6ccb5a2d794a56d1a7e52', 'bc606aeb7ed5e1d9b3200f18ec7724df']
        let element = $('#word5');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());
 
        if (strHash === hash[0]) {
            setSuccessClass(element);
		}else if (strHash === hash[1]) {
            setMistakelass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else{
            setErrorClass(element);
        }
    }

    function verificationW6 () {
        let hashS = '8880b74209d5c468ed0cbc4c0229ff23';
        let hashM = ['ec45aeeb8a6d1d226626c4087755e300', '84a85eb5e8646191b145155e74461ae0', '20a3e37bee88113ffc57d6dc37a52957', 
        '63b7496d6b3f2d3d55ce5f41a5f9eaf5', '181993af357c8297903ba8addce2ff16', '6df1e3e7a7dcbff7c0cd496a1ed36ecf', 
        '6b8f229e0a294fc8eb99629080c1ac4b', '2729e5fd1fb8e5fa5ca4870428ace145', 'aa896d50b6db6c27d39d61a2f4178a92', 
        '6e3a7bca96105d49fe470e8a34fbbc5a', '605462c5a5055f4247d79bc8f1a6bf5d', 'af4b89128529cd8984436ed00fc240e4', 
        'c5b6a9d6092da655c8f21a59b0457749', '0f759004f5e98f0a92e276029e6f4dc3', '47f43eb7ef38d4088fd2804136388f0f', 
        'be911efbf161f7b7d10e28f3fc9d123a', 'c6eb45754bc5727ad7f6fb24b23f7a1e', '90f4669a8e616e2f0a7bf72a12e6fc06', 
        'f9fdfa2746c9c4abcdd772325cee0633'];
        let element = $('#word6');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());
   
        if (strHash === hashS) {
            setSuccessClass(element);
		}else if (hashM.includes(strHash)) {
            setMistakelass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else{
            setErrorClass(element);
        }
    }

    function verificationW7 () {
        let hashM = ['61a86b8c4d5a4b68e015a2b06e566bb2', 'b4a37509cc97b133a094c7b4a6b67d8f', 'f962110b42bc992952b07eb63268e46e',
        '3f1e38b633da183f18946710f5f0d685', 'e5df5e58c2b0ed2af3a5ce8c659e9720', '3a969e8a3c580c18e59881f89f946b10'];
        let element = $('#word7');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());

        if (HASH_WORD7.includes(strHash)) {
            setSuccessClass(element);
		}else if (hashM.includes(strHash)) {
            setMistakelass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else{
            setErrorClass(element);
        }
    }

    function verificationW9 () {
        let hashM = ['17f6eac1abd722eac8cc0524dd8bdb72', '10b518f2fbe08a489c53c3d1073bebfd', 'e2d2da294749dc4226d60a3705c17ff9',
         '4efc41dc900aee511d540c56d32abc33', 'ce21d291a24acc49f8f04e620163ad01', 'b45b9a479700df2496370070ccf24a64', 
         '64dfed85ec4fe663423a03428ce93a70', '0a2af3a0f992ab86ed41ed2939838d00', 'e4b7ece0c2f7c227c123e79a2c7d4b71', 
         'd0201ce22c27a325413e96228522ef5d', '0dde37108324879ddf6f1d232d338d6c', '42ea8bc9dd9d9ae788396a1f8d614322', 
         'b650b29a8dc701f250b54e87bd37eb32', '94717546a9f341311ac422f62610adc4', 'accb27d87f7e9ec711859f853cf459a1', 
         '9610794c376840e6c6023b7807c6622a', '06425b9ea973bc3f27b60568bd39f101', 'f14150a5b2eaa6e7560bfbd62a1d4b2c'];
        let element = $('#word9');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());

        if (HASH_WORD9.includes(strHash)) {
            setSuccessClass(element);
		}else if (hashM.includes(strHash)) {
            setMistakelass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else{
            setErrorClass(element);
        }
    }

    function verificationW10 () {
        let hashS = '321a4116cfaf2d34a3a70ec8e69818f7';
        let hashM = ['498dc1f95495c2b5990f0025709207d7', '1b52dc64f8177409f5fd9dcddf40f835', 'ff2012e17838756c277fd6d60f207603'];
        let element = $('#word10');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());

        if (strHash === hashS) {
            setSuccessClass(element);
		}else if (hashM.includes(strHash)) {
            setMistakelass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else{
            setErrorClass(element);
        }
    }

    function verificationW12 () {
        let hashM = ['17f6eac1abd722eac8cc0524dd8bdb72', '4222e1de1972ad7860ce883977ba674c', '1f5b2950dac3d336ddd1c07d8d03b1e3',
         'b1f278d1cad279db7a60ade71ebc2b4e', '9b73e98522395850b6f89712fee93399', 'a063e07824592e194f44d87248277557',
         '0d92daa30f9d92f4340346188b964d0b', '331e960c04023dabb88ec4fa288401f9', 'a9baf1ee6ca5ef3214c4fad727ca992f',
         '676c5fa9dfddb5b747e095fbacfee00d', 'fb72673989af84554ed8d06b8fdb46d9', 'a9907c5a93d4d9f3fd92fed4c7f671f9',
         '0c81cbd5452953b4f213da11a1597c5b', '60979e7aeb22069be6d1031a5494c043', 'd2091d2ccb14464e10442d298fa01fa8',
         '4f094596a195d46395e3c3c5bc690d12', '8f1d8f4b228b2faa3b65913f2234825a', '4ba86b6476482e459711dd01dd08ac3b',
         '94df10f1b044f83c0e2a739b97a9b755'];
       let element = $('#word12');
       let text =  element.val();
       let strHash = md5(SALT + text.toLowerCase());

       if (HASH_WORD12.includes(strHash)) {
           setSuccessClass(element);
		}else if (hashM.includes(strHash)) {
           setMistakelass(element);
		}else if(CORRECT_WORD.includes(strHash)){
           setMistakePlaceClass(element);
		}else{
           setErrorClass(element);
		}

    }

    function verificationW13 () {
        let hash = ['04a6c4384aa8c581ae1d4ba230947914', '93c9062d1435619534818e403ee71624'];
        let element = $('#word13');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());
 
        if (strHash === hash[0]) {
            setSuccessClass(element);
		}else if (strHash === hash[1]) {
            setMistakelass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else{
            setErrorClass(element);
        }
    }

    function verificationW16 () {
        let hashS = '939e22f4cddff64d419c88e89653ca0f';
        let hashM = ['d74667ec268ad1f92615e50295d185b4', '6d931446c8eaf19ea45eca61003fa642', 'cc70a779fed0df1e42ddf86bc9d066a5'];
        let element = $('#word16');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());

        if (strHash === hashS) {
            setSuccessClass(element);
		}else if (hashM.includes(strHash)) {
            setMistakelass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else{
            setErrorClass(element);
        }
    }

    function verificationW17 () {
        let hashM = ['4222e1de1972ad7860ce883977ba674c', '1f5b2950dac3d336ddd1c07d8d03b1e3', 'b1f278d1cad279db7a60ade71ebc2b4e',
        '9b73e98522395850b6f89712fee93399', 'a063e07824592e194f44d87248277557', '0d92daa30f9d92f4340346188b964d0b',
        '331e960c04023dabb88ec4fa288401f9', 'a9baf1ee6ca5ef3214c4fad727ca992f', 'da33d0fb3af4c7e800be6069833c7780',
        '0c549f4b819d45c84c2ff17cc6ed0dbb', '5cc787d30f68db9e8af08a37d9b210d0', '8ccf5e476acfb7314107137104a680a2',
        '12c2f2ab3112fad23dd5bed0176d3e49', '8b98d8595a4e41ce54545275f4ef28d5', 'f0394db56b72bacc18b3c5bf2e946e62',
        '52137af25ac89edc9757e511a738919d', '676c5fa9dfddb5b747e095fbacfee00d', 'fb72673989af84554ed8d06b8fdb46d9',
        '0c81cbd5452953b4f213da11a1597c5b', 'a9907c5a93d4d9f3fd92fed4c7f671f9', '60979e7aeb22069be6d1031a5494c043',
        'd2091d2ccb14464e10442d298fa01fa8', '4f094596a195d46395e3c3c5bc690d12', '8f1d8f4b228b2faa3b65913f2234825a',
        '4ba86b6476482e459711dd01dd08ac3b', '94df10f1b044f83c0e2a739b97a9b755', '97ff5aedeaec9ae21d2508cae06fa713',
        'df622efdeed2e43e3a8b07f49c38be27', '1dfc8a4c5a8faa4a2042f13b8e3a0c42', '12c49fc0c7d33943b5f49c3094c10d32',
        '709316cd54a4c6f972af743fb7101943', '9fe51e443c454f4a3dd30029618d2c34', 'ff003e918fcc6da91b5bf60881717564', 
        'd5cf23dfd9506bd985cebe8cdf5d971c', '8471f1a7467e42130fa790abae9b485c', 'cdea70745083115ed2096dd3a746599b'];
        let element = $('#word17');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());

        if (HASH_WORD17.includes(strHash)) {
            setSuccessClass(element);
		}else if (hashM.includes(strHash)) {
            setMistakelass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else{
            setErrorClass(element);
        }
    }

    function verificationW21 () {
        let element = $('#word21');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());

        if (HASH_WORD21.includes(strHash)) {
            setSuccessClass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else {
            setErrorClass(element);
        }
    }

    function verificationW24 () {
        let hashS = 'bda1d856ff9fcb4f32503c53b0b23608';
        let hashM = ['d74667ec268ad1f92615e50295d185b4', 'e2b01a8921b713bea87e824cc3ae96c3', '846cbf488e8d340eacc51283ef0f4143', 
         '9cb25fa164a66769184b23a7ef891f58', '0486b4728d5f2ca9da4611b58a2535ab', 'e9501bfee589192f82bfe20d208961e9',
         'fc1babb6f5404603f8aedfba8238c119', '04a941685fa9340ee1594d0460838a34', '87817c4ad1ca52e494930ab0b26f82c7',
         '161a82de4cdad3ac53766d3eabe8852b', 'a4ca10afc954e2d243ad665cc2c39262', 'aff568a01beda406bb5dcebf97809933',
         '7f70007310c2e57c21cadd09f3b43ed5', 'b082ec8f760bb7b0c6676db759ed736f', '45c7c761b3ac63f1e7809fc0fe498e30',
         'c57547cab48b32e0b8b5f4a79d24e599', '41741837322e0e3e0057ebc991cbd1f5', '0a2b4f1fe284a21ac0d461862412b8e5',
         'ccec1673146f8204ab6eb6825799f1ab'];
        let element = $('#word24');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());

        if (strHash === hashS) {
            setSuccessClass(element);
		}else if (hashM.includes(strHash)) {
            setMistakelass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else{
            setErrorClass(element);
        }
    }

    function verificationW26 () {
        let hashS = '960ecdca0dafc7990a75e66f85c38164';
        let hashM = ['416f77986735274b7b2312e8037ce4d9', '315f416e66a07782ba16f06e0eccab2b', 'e6eccdc1f5163b9d8dce4efe0f90df0d', '94827aee042011724e6d1948743d4040'];
        let element = $('#word26');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());

        if (strHash === hashS) {
            setSuccessClass(element);
		}else if (hashM.includes(strHash)) {
            setMistakelass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else{
            setErrorClass(element);
        }
    }

   
});
