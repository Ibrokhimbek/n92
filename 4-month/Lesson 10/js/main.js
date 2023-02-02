//? ATM project
const inputCcyFrom = $("#ccy__from");
const inputCcyTo = $("#ccy__to");
const selectCcy = $("#ccy__select");
let data = null;

const history = JSON.parse(localStorage.getItem("history")) || [];

fetch("http://xolisnazar.uz/api/index/currency")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.currencyData);
    data = res.currencyData;

    data.forEach((ccy) => {
      const template = `<option value="${ccy.Ccy}">${ccy.CcyNm_UZ}</option>`;
      selectCcy.innerHTML += template;
    });
  });

selectCcy.addEventListener("change", function () {
  inputCcyFrom.placeholder = this.value;
  calculate("ccyToUzs");
});

inputCcyFrom.addEventListener("change", function () {
  calculate("ccyToUzs");
});

inputCcyTo.addEventListener("change", function () {
  calculate("uzsToCcy");
});

function calculate(type) {
  const date = new Date();
  const exchangeTrack = {
    id: history[history.length - 1]?.id + 1 || 0,
    from: selectCcy.value,
    to: "UZS",
    date: `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }.${date.getFullYear()} ${
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`,
    fromSum: inputCcyFrom.value,
    toSum: null,
  };
  const selectedCcy = data.find((item) => item.Ccy === selectCcy.value);
  let result = null;
  switch (type) {
    case "ccyToUzs":
      result = selectedCcy.Rate * inputCcyFrom.value;
      exchangeTrack.toSum = result;
      inputCcyTo.value = Math.round(result);
      history.push(exchangeTrack);
      localStorage.setItem("history", JSON.stringify(history));
      break;
    case "uzsToCcy":
      exchangeTrack.from = "UZS";
      exchangeTrack.to = selectCcy.value;
      exchangeTrack.fromSum = inputCcyTo.value;
      result = inputCcyTo.value / selectedCcy.Rate;
      exchangeTrack.toSum = result;
      inputCcyFrom.value = Math.round(result);
      history.push(exchangeTrack);
      localStorage.setItem("history", JSON.stringify(history));
      break;
  }
  console.log(history);
}
