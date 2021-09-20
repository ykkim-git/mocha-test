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
