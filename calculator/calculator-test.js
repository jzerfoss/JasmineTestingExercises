
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100000,
    years: 10,
    rate: 4.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual("1036.38");
});


it("should return a result with 2 decimal places", function() {
  const values = {
  amount: 1000,
  years: 2,
  rate: 3,
};
  expect(calculateMonthlyPayment(values)).toEqual("42.98");
});

it("should handle min interest rates", function() {
  const values = {
    amount: 10000,
    years: 20,
    rate: .001,
  };
  expect(calculateMonthlyPayment(values)).toEqual("41.67");
});
