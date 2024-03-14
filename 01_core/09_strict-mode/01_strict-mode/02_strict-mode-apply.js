/* 2. 엄격 모드 적용 */
/*
   전역의 선두 또는 함수 몸체의 선두에 'user strict'를 추가한다.
*/

//'use strict';        //전역의 선두에 사용

function test() {
    'use strict'       

    x = 10;            //ReferenceError: x is not defined
    //'use strict'
    // 코드의 선두에 위치시키지 않으면 strict mode가 제대로 동작하지 않는다. 
}
test();


//즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다. 
(function(){
    'use strict';
})();