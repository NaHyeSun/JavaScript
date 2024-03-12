/* 2. method */
/*
   JS의 함수는 객체이다.
   함수는 값으로 취급할 수 있고, 프로퍼티 값으로 사용 할 수 있다. 
*/

var dog = {
    name : '호두',
    // 메소드 = 객체에 묶여 있는 함수
    eat : function(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요~~`)   // this는 현재 인스턴스인 dog를 가리킴.
    }
};

dog.eat('고구마');
