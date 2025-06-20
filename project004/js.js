$(document).ready(function(){

    // 진료과를 클릭하면 세부과목이 나온다



    // 진료예약 달력 만들기




    // 구분을 클릭하면 세부과목이 하나만 나온다
  const $subcates = [$('#subcate1'), $('#subcate2'), $('#subcate3'), $('#subcate4')];

  $('#cate').on('change', function () {
    const index = this.selectedIndex;

    // 모든 세부 진료과 숨기기
    $subcates.forEach($el => {
      $el.addClass('hide').prop('selectedIndex', 0); // 숨기고 초기화
    });

    // index 1~4에 해당하는 것만 보여주기
    if (index >= 1 && index <= 4) {
      $subcates[index - 1].removeClass('hide');
    }
  });


}) // 제이쿼리 끝;