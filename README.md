# react-redux-next
- What I learned?
    - Javascript
    - Typescript
    - Next.js
    - Redux
    - Debuging
    - App Unit Test

<br><br>

# javascript 학습 내용

- Event Handling
- Updating ui, Working with state

<br><br>

## <h2>사용자 이벤트에 반응하는 방법</h2><br>
ex. 버튼 클릭시 title 변경

: on으로 시작하는Props들로 리스너 설정가능(리액트 리스너 작동원리) <br>
: 리스너에 해당하는 함수 필요, 익명함수 가능<br>

- `jsx코드에 직접적인 함수 작성보다는 jsx 호출 이전 코드에서 화살표함수로 작성하는 것이 보기에 좋다.`

<br>

`on리스너 props= 함수()`는 jsx코드가 평가될때 실행되기에 괄호를 제외하고 작성,, 그래야 리스너가 작동할때 해당 함수를 실행될 수 있다.

<br>

함수이름 관례: 리스너명 + Handler


- 일반 변수는 재평가로 트리거 되지 않는다. 리액트는 무시하고 코드가 실행되도 트리거되지 않고 화면이 렌더링되지 않는다. 처음 렌더링 후 호출되지 않는다. 

- 함수 안에서 useState가 호출되어야 한다. useState로 컴포넌트함수가 새로 호출될 수 있음

- state가 등록된 컴포넌트만 state변경될때마다 트리거되어 다시 호출된다.

<br>

## <h2>useState</h2> 

- 각 컴포넌트별 인스턴스를 기반으로 독립적 state를 갖는다. 한 아이템에서 state 변경시 다른 아이템은 변경되지 않는다. 

- 특정 인스턴스만 업데이트되고 다른 인스턴스 상태에는 영향을 미치지 않는다. 


cf) event.target.value=>현재 속성 얻을 수 있다.

- 3개의 독립적인 state가 아니라, 1개의 state로 객체로 초기화해서 관리할 수 있다. 다른 값들 대신에 다시 쓰이는 것이 useState이므로 ...state명으로 작성해 `키와 쌍`을 가져온다.

<br><br>

## <h2>예전 state 접근해 사용해야 할 경우</h2>

<br>

```javascript
ex. setUsersInput({
 ...userInput,
 enteredTitle:event.target.value
})
//-->좋지 못한 방법
```

```javascript
ex. setUsersInput(prevState=>{
return {...prevState,  enteredTitle:event.target.value};
}) 
//-->괜찮은 방법
```

 <br>

- 양방향 바인딩-폼 작업시 유용
value은 최신 state로 설정, onChange로 상태 변경 수신


- 자식컴포넌트 대 부모컴포넌트 데이터 통신(상향식)***중요패턴<br>
props추가 , 함수를 가리키는 포인터 전달해 매개변수로 데이터 전달 가능

<br>

```javascript
//하위 컴포넌트에서 상위 컴포넌트로 데이터 전달시
const formHanlder = (event) => {
    event.preventDefault();
    props.onSaveExpenseDataHandler({
      title: title,
      amount: amount,
      date: new Date(date),
    });
}

//상위 컴포넌트에서 하위 컴포넌트가 보낸 데이터를 받는다.
const NewExpense = (props) => {
  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };

    //또 상위 컴포넌트로 데이터 전달 가능
    props.expenseHanlder(expenseData);
  };

  return (
    <>
      <ExperienceForm onSaveExpenseDataHandler={saveExpenseDataHandler} />
    </>
  );
};

```