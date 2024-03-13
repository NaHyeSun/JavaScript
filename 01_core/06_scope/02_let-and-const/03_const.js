/* 3. const */
/*
   const 키워드는 상수(constant)를 선언하기 위해 사용한다.
   let 키워드와 마찬가지로 블록 레벨 스코프를 가지며 
   변수 호이스팅이 발생하지 않는 것처럼 동작한다. 
   아래에서는 let키워드와의 차이점을 중심으로 살펴보자.

   <상수 : 재할당이 금지된 변수>
   const 키워드로 선언된 변수에 원시 값을 할당하면 원시 값은 변경 할 수 없는 값이고
   const 키워드에 의해 재할당이 금지되므로 값을 변경할 방법은 없다. 
   일반적으로 상수의 이름은 대문자로 선언해 상수임을 명확히 나타내며
   여러 단어로 이루어진 경우 언더스코어(_)로 구분하는 스네이크 케이스로 표현하는 것이 일반적이다.
*/

// 1. const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.
//const x;        //SyntaxError: Missing initializer in const declaration
const x = 1;

// 2. const키워드로 선언한 변수는 재할당이 금지된다.
//x = 2;          //TypeError: Assignment to constant variable.

// 할인율은 변경할 수 없는 상수로서 사용 될 값
const DISCOUNT_RATE = 0.15;
// 정가
let price = 15000;
// 할인가
let discountPrice = price * (1 - DISCOUNT_RATE);
console.log(discountPrice);

/* const 키워드로 선언 된 변수에 객체를 할당한 경우 property 값을 변경 할 수 있다. */
const teacher = {
    name : '판다',
    age : 20,
}

teacher.name = '다람쥐';
console.log(teacher);

//단, 객체 재할당은 불가하다. 
//teacher = {};

/*
    < 전역 변수의 문제점 >
    1. 모든 코드가 전역 변수를 참조하고 변경할 수 있는 "암묵적 결합"을 허용한다.
       변수의 유효 범위가 크면 클수록 코드 가독성은 나빠지고 의도치 않게 
       상태가 변경될 수 있는 위험성도 높다.
    2. 전역 변수는 "생명주기가 길다"
       메모리 리소스도 오래 소비하며, 상태 변경이 가능한 시간 및 기회가 많다.
       더욱이 중복 된 변수명을 통해 의도치 않은 재할당이 일어날 수도 있다. 
    3. "스코프 체인 상에서 종점에 존재" 하므로 전역 변수의 검색 속도가 가장 느리다.
    4. "네임스페이스가 오염"된다.
       자바 스크립트는 파일이 분리되어 있어도 하나의 전역 스코프를 공유하므로
       예상치 못한 결과를 가져올 수 있다.
    
       => 변수의 스코프는 좁을수록 좋다. 
    
*/