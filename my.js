$(document).ready(function(){
    const SALT = "i#8^*uu";
    const HASH_WORD4 = ['595bf8aca6783496f45804f1ee782ae6', '238a7beb2aa98eec69bb8c87a3a5b807', '5857a15197da7e2cb27ac79c1df7c8d0', '8d677a55fba358494140215ec3847d08'];
    const HASH_WORD21 = ['86693b7716365cf8da2ab2dbc20c45c2', '007df5a0418dabfde62cfe84c3ad9dae'];
    const CORRECT_WORD = [
        '379eff4c6472c0b6fce840d08ca79983','96f0fcf02b32dfb67908c226f1a2e133', '416f77986735274b7b2312e8037ce4d9',
        'aa22974056c4ef1285f8697565ebe682', 'b2767bf5d76e85f6a6f6f6cf5f2332c3', 'c893fecf4284259f3baf610b4bfeef33', '2bbfb8e162998fc07d552ffc14103b04',
        'de8a6066f3cf9abd3e5184c3a2658d1d', '1f8b75e6724b043c876a7f36bfa2931f', '2a72875320aedc6f93e1505563922aa5', 'f69402eeb5c6ccb5a2d794a56d1a7e52',
        '04a6c4384aa8c581ae1d4ba230947914', '321a4116cfaf2d34a3a70ec8e69818f7', '939e22f4cddff64d419c88e89653ca0f'
    ].concat(HASH_WORD4, HASH_WORD21);
    let openNext = false;

    $('.checkBlock button').click(function () {
        //first row
        simpleVerification('595bf8aca6783496f45804f1ee782ae6', '#word1');
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
        simpleVerification('595bf8aca6783496f45804f1ee782ae6', '#word19');
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

        
    });
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

    function verificationW2 () {
     //katmeret
     //можливі варіанти під час розгадування, які не не підходять по сенсу/граматиці:
     //kat, mer, katmer, katet, meret, merkatet katav, merav, katmerav, merkatav, katame, merame, katmerame, merkatame, dejkatav, dejmerav, dejkatmerav, dejmerkatav
     }

    function verificationW4 () {
        let element = $('#word4');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());
 
        if (HASH_WORD4.includes(strHash)) {
            setSuccessClass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else {
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
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else if (strHash === hash[1]) {
            setMistakelass(element);
        }else{
            setErrorClass(element);
        }
    }

    function verificationW6 () {
        // mokun
// можливі варіанти які не не підходять по сенсу/граматиці:
// mok, mokdo, mokan, mokex, mok'un, mokanti, mokeri, mokuvi, mok'an, mok'ex, mok'anti, mok'eri, mok'uvi
    }

    function verificationW7 () {
        // 7. sogizüd
        // другий ПРАВИЛЬНИЙ варіант sogizyd
        // можливі варіанти які не не підходять по сенсу/граматиці:
        // giz, gizüd/gizyd, gizes, sogiz, sogizes
    }

    function verificationW9 () {
        // ku'un
// можливі варіанти які не не підходять по сенсу/граматиці:
// ku, kudo, kuan, kuex, kuun, kuanti, kueri, kuuvi, ku'an, ku'ex, ku'anti, ku'eri, ku'uvi 
    }


    function verificationW10 () {
        let hashS = '321a4116cfaf2d34a3a70ec8e69818f7';
        let hashM = ['498dc1f95495c2b5990f0025709207d7', '1b52dc64f8177409f5fd9dcddf40f835', 'ff2012e17838756c277fd6d60f207603'];
        let element = $('#word10');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());

        if (strHash === hashS) {
            setSuccessClass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else if (hashM.includes(strHash)) {
            setMistakelass(element);
        }else{
            setErrorClass(element);
        }
    }

    function verificationW12 () {
        // dva'un
// можливі варіанти які не не підходять по сенсу/граматиці:
// dva, dvado, dvaan, dvaex, dvaun, dvaanti, dvaeri, dvauvi, dva'an, dva'ex, dva'anti, dva'eri, dva'uvi 
    }

    function verificationW13 () {
        let hash = ['04a6c4384aa8c581ae1d4ba230947914', '93c9062d1435619534818e403ee71624'];
        let element = $('#word13');
        let text =  element.val();
        let strHash = md5(SALT + text.toLowerCase());
 
        if (strHash === hash[0]) {
            setSuccessClass(element);
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else if (strHash === hash[1]) {
            setMistakelass(element);
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
        }else if(CORRECT_WORD.includes(strHash)){
            setMistakePlaceClass(element);
        }else if (hashM.includes(strHash)) {
            setMistakelass(element);
        }else{
            setErrorClass(element);
        }
    }

    function verificationW17 () {
        // nadva'un
// можливі варіанти які не не підходять по сенсу/граматиці:
// dva, dvado, dvaan, dvaex, dvaun, dvaanti, dvaeri, dvauvi, dva'an, dva'ex, dva'anti, dva'eri, dva'uvi
// nadva, nadvado, nadvaan, nadvaex, nadvaun, nadvaanti, nadvaeri, nadvauvi, nadva'an, nadva'ex, nadva'anti, nadva'eri, nadva'uvi 

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
        // hosun
// можливі варіанти які не не підходять по сенсу/граматиці:
// hos, hosdo, hosan, hosex, hos'un, hosanti, hoseri, hosuvi, hos'an, hos'ex, hos'anti, hos'eri, hos'uvi 


    }

    function verificationW26 () {
        // remet
// можливі варіанти які не не підходять по сенсу/граматиці: rem, remav, remame, dejremav

    }

   
});