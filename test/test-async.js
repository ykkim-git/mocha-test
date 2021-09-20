describe("User 테스트", function () {
  describe("저장해라", function () {
    it("에러 없이 저장해라", function (done) {
      var user = new User("Luna");
      user.save(done);
    });
  });
});
