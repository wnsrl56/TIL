created_date: 2018-08-01
------

# Resize Observing

> browser 에서 리사이즈는 window event 이므로, Vue에서 해당 문제를 해결하는 2가지 방안을 제시

#### raw javascript
A. addEvnetListener를 통한 문제 해결
  - [참조](https://github.com/WICG/ResizeObserver)

B. 뷰 제작자의 해결 방식
  - [참조2](https://github.com/vuejs/vue/issues/1915)
  
#### plugin을 통한 문제 해결
A. vue에 삽입되는 props로 event를 처리하는 방식
  - 외부 의존이 크기 때문에 보류
  - [참조](https://github.com/David-Desmaisons/Vue.resize)
