created_date: 2018-07-25
------

#### 유니코드 삽입 방법
------

1. UNICODE 참고 사이트
  - [link](https://www.compart.com/en/unicode)
2. Parsing 등의 로직을 진행 후, utf-16 format을 다음 method에 삽입
  - ```
    String.fromCharCode(num1[, ...[, numN]]) 
    ```
  - ex) 들어온 문자길이 만큼 bullet으로 변경해줌
    ```javascript
    function changeStringToBullet(origin) {
      const result = [];
      const bullet = String.fromCharCode(0x2022);
      let length = origin.length;
      while (length--) {
        result.push(bullet);
      }
      return result.join('');
    }
    ```    
3. 기타 참고 사이트
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
