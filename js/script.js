const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  let ageDay = document.querySelector("#day");
  let errorDayText = document.querySelector(".error-text--day"); //day 에러 메세지
  let ageMonth = document.querySelector("#month");
  let errorMonthText = document.querySelector(".error-text--month"); //month 에러 메세지
  let ageYear = document.querySelector("#year");
  let errorYearText = document.querySelector(".error-text--year"); //year 에러 메세지

  /**
   * Day 입력값 유효성 검사
   */
  let monthLastDay = new Date(ageYear.value, ageMonth.value, 0).getDate(); // 월의 마지막 날짜

  // 값이 비어있을 경우
  if (!ageDay.value) {
    ageDay.parentElement.classList.add("error-form");
    ageDay.nextElementSibling.classList.add("dp-block");
    errorDayText.classList.remove("dp-block");
  } else if (
    // day가 1~31 사이의 숫자가 아닌 경우
    (ageDay.value && (1 > ageDay.value || ageDay.value > 31)) ||
    // 해당 월에 해당하지 않는 day를 입력할 경우
    monthLastDay < ageDay.value
  ) {
    ageDay.parentElement.classList.add("error-form");
    ageDay.nextElementSibling.classList.remove("dp-block");
    errorDayText.classList.add("dp-block");
  } else {
    ageDay.parentElement.classList.remove("error-form");
    ageDay.nextElementSibling.classList.remove("dp-block");
    errorDayText.classList.remove("dp-block");
  }

  /**
   * Month 입력값 유효성 검사
   */
  // 값이 비어있을 경우
  if (!ageMonth.value) {
    ageMonth.parentElement.classList.add("error-form");
    ageMonth.nextElementSibling.classList.add("dp-block");
    errorMonthText.classList.remove("dp-block");
  } else if (
    ageMonth.value &&
    // month가 1~12 사이의 숫자가 아닌 경우
    (1 > ageMonth.value || ageMonth.value > 12)
  ) {
    ageMonth.parentElement.classList.add("error-form");
    ageMonth.nextElementSibling.classList.remove("dp-block");
    errorMonthText.classList.add("dp-block");
  } else {
    ageMonth.parentElement.classList.remove("error-form");
    ageMonth.nextElementSibling.classList.remove("dp-block");
    errorMonthText.classList.remove("dp-block");
  }

  /**
   * Year 입력값 유효성 검사
   */
  let crrYear = new Date().getFullYear();
  // 값이 비어있을 경우
  if (!ageYear.value) {
    ageYear.parentElement.classList.add("error-form");
    ageYear.nextElementSibling.classList.add("dp-block");
    errorYearText.classList.remove("dp-block");
  } else if (
    ageYear.value &&
    // year이 미래일 경우
    ageYear.value > crrYear
  ) {
    ageYear.parentElement.classList.add("error-form");
    ageYear.nextElementSibling.classList.remove("dp-block");
    errorYearText.classList.add("dp-block");
  } else {
    ageYear.parentElement.classList.remove("error-form");
    ageYear.nextElementSibling.classList.remove("dp-block");
    errorYearText.classList.remove("dp-block");
  }
});
