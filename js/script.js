const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  let inputDay = document.querySelector("#day");
  let errorDayText = document.querySelector(".error-text--day"); //day 에러 메세지
  let inputMonth = document.querySelector("#month");
  let errorMonthText = document.querySelector(".error-text--month"); //month 에러 메세지
  let inputYear = document.querySelector("#year");
  let errorYearText = document.querySelector(".error-text--year"); //year 에러 메세지

  /**
   * Day 입력값 유효성 검사
   */
  let monthLastDay = new Date(inputYear.value, inputMonth.value, 0).getDate(); // 월의 마지막 날짜

  // 값이 비어있을 경우
  if (!inputDay.value) {
    inputDay.parentElement.classList.add("error-form");
    inputDay.nextElementSibling.classList.add("dp-block");
    errorDayText.classList.remove("dp-block");
  } else if (
    // day가 1~31 사이의 숫자가 아닌 경우
    (inputDay.value && (1 > inputDay.value || inputDay.value > 31)) ||
    // 해당 월에 해당하지 않는 day를 입력할 경우
    monthLastDay < inputDay.value
  ) {
    inputDay.parentElement.classList.add("error-form");
    inputDay.nextElementSibling.classList.remove("dp-block");
    errorDayText.classList.add("dp-block");
  } else {
    inputDay.parentElement.classList.remove("error-form");
    inputDay.nextElementSibling.classList.remove("dp-block");
    errorDayText.classList.remove("dp-block");
  }

  /**
   * Month 입력값 유효성 검사
   */
  // 값이 비어있을 경우
  if (!inputMonth.value) {
    inputMonth.parentElement.classList.add("error-form");
    inputMonth.nextElementSibling.classList.add("dp-block");
    errorMonthText.classList.remove("dp-block");
  } else if (
    inputMonth.value &&
    // month가 1~12 사이의 숫자가 아닌 경우
    (1 > inputMonth.value || inputMonth.value > 12)
  ) {
    inputMonth.parentElement.classList.add("error-form");
    inputMonth.nextElementSibling.classList.remove("dp-block");
    errorMonthText.classList.add("dp-block");
  } else {
    inputMonth.parentElement.classList.remove("error-form");
    inputMonth.nextElementSibling.classList.remove("dp-block");
    errorMonthText.classList.remove("dp-block");
  }

  /**
   * Year 입력값 유효성 검사
   */
  let crrYear = new Date().getFullYear();
  // 값이 비어있을 경우
  if (!inputYear.value) {
    inputYear.parentElement.classList.add("error-form");
    inputYear.nextElementSibling.classList.add("dp-block");
    errorYearText.classList.remove("dp-block");
  } else if (
    inputYear.value &&
    // year이 미래일 경우
    inputYear.value > crrYear
  ) {
    inputYear.parentElement.classList.add("error-form");
    inputYear.nextElementSibling.classList.remove("dp-block");
    errorYearText.classList.add("dp-block");
  } else {
    inputYear.parentElement.classList.remove("error-form");
    inputYear.nextElementSibling.classList.remove("dp-block");
    errorYearText.classList.remove("dp-block");
  }
});
