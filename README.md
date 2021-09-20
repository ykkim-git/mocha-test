# mocha

> npm install mocha --global

모카는 기본적으로 현재 실행된 지점의 test 디렉토리 아래에 있는 파일을 실행한다.

```javascript
test / test.js;

var assert = require("assert"); //nodejs에서 제공하는 aseert 모듈

describe("계산기 테스트", function () {
  it("1+1은 2를 반환", function (done) {
    assert.equal(1 + 1, 2);
    done();
  });

  it("2*2 는 4를 반환", function (done) {
    assert.equal(2 * 2, 4);
    done();
  });
});
```

test.js 파일을 저장하고 mocah를 호출하면 테스트 가능.

> mocha

```
// 결과
계산기 테스트
  ✓ 1+1은 2를 반환
  ✓ 2*2 는 4를 반환
```

test 디렉토리 아래에 test.js 만 실행하고 싶다면

> mocha test/test.js

위와 같은 명령어를 실행한다.

만약 디렉토리에 test/test.js & test/ttt.js 파일이 있다면 모두 실행된다.

```javascript
test / ttt.js;

console.log(`hello world!`);
```

> mocha

```
hello world !

계산기 테스트
  ✓ 1+1은 2를 반환
  ✓ 2*2 는 4를 반환
```

## assert

### assertion 함수를 쉽게 사용하기 위해 node.js에서 제공하는 표준 모듈

## describe

### suite 테스트 케이스를 생성한다.

```javascript
describe("테스트 이름", function () {});
```

## it

### it으로 테스트 코드를 작성한다. 첫번째 인수는 테스트 케이스 이름을 넣어준다. 두번째 파라미터로는 Mocha가 done객체를 전달해줄 테스트케이스의 함수를 넣어준다. 여기서 done 객체는 테스트 케이스가 종료되었을 때 호출한다. 비동기 처리도 할 수 있다.

```javascript
it("1+1은 2를 반환", function (done) {
  assert.equal(1 + 1, 2);
  done();
});
```

---

## 카테고리화

### 더 큰 프로젝트에서 사용하기 위해 카테고리를 더 나누기.

```javascript
var assert = require("assert");

describe("계산기 테스트", function () {
  describe("더하기 테스트다!", function () {
    it("1+1은 2를 반환해라", function (done) {
      assert.equal(1 + 1, 2);
      done();
    });
    it("100+100은 200을 반환해라", function (done) {
      assert.equal(100 + 100, 200);
      done();
    });
  });

  describe("곱하기 테스트다!", function () {
    it("2*2는 4를 반환해라", function (done) {
      assert.equal(2 * 2, 4);
      done();
    });
    it("2*1111는 2222를 반환해라", function (done) {
      assert.equal(2 * 1111, 2222);
      done();
    });
  });
});
```

```
계산기 테스트
  더하기 테스트다!
    ✓ 1+1은 2를 반환해라
    ✓ 100+100은 200을 반환해라
  곱하기 테스트다!
    ✓ 2*2는 4를 반환해라
    ✓ 2*1111는 2222를 반환해라
```

---

## 비동기 코드를 사용한 예제

### 비동기 처리를 위해서는 done객체를 리턴하면 된다.

```javascript
describe("User 테스트", function () {
  describe("저장해라", function () {
    it("에러 없이 저장해라", function (done) {
      var user = new User("Luna");
      user.save(done);
    });
  });
});
```

---

## Hooks

### vue.js의 lifecycle이나 React Hooks처럼 Mocha에서는 BDD스타일 인터페이스를 위해 Hooks를 제공한다.

```javascript
describe("hooks 테스트", function () {
  before(function () {
    //모든 테스트가 실행되기 전에 이 블럭이 실행됩니다.
  });

  after(function () {
    //모든 테스트 실행 후에 이 블럭이 실행됩니다.
  });

  beforeEach(function () {
    //각각의 테스트 실행 전에 이 블럭이 실행됩니다.
  });

  afterEach(function () {
    //각각의 테스트 실행 후에 이 블럭이 실행됩니다.
  });

  //테스트 케이스 작성
});
```

참조: https://a-tothe-z.tistory.com/13