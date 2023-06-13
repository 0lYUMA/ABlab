const func = document.querySelector('.func'); //전체 슬라이드 컨테이너
const funcImg = document.querySelectorAll('.func li'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const funcCount = funcImg.length; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼
const slideWidth = 960; //한개의 슬라이드 넓이
const slideMargin = 0; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
func.style.width = (slideWidth + slideMargin) * funcCount - slideMargin + 'px';

function moveSlide(num) {
  func.style.left = -num * 960 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  }
  else {
    moveSlide(funcCount-1);
  }
});

next.addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
  if (currentIdx < funcCount - 1) {
    moveSlide(currentIdx + 1);
  } else {
    moveSlide(0);
  }
});