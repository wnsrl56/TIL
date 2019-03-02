created_date: 2018-07-24
------

## 정규표현식
------

1. 표현식 간단하게 정리하는 법
 - /reg expression/ 
 - (capturing token)
 - [character set]
 - add conditions (query, quantifier, .. so on)
 - ex) 
    ```
    /([A-Za-z0-9])\w+/g
    ```
 - 풀이 A-Z, a-z, 0-9 해당하는 캐릭터 셋을 토큰 그룹으로 묶는다. 토큰 그룹은 WORD 단위로 자르고, + 즉, 토큰 내에 1개 이상 맞아야 한다. g 전역으로 검사한다.
 
2. link 좋은 사이트
 - [RegExr](https://regexr.com/)
