# Basic_Express_Sequelize_Tmplatet

installed
  1. express
  2. sequelize
  2. sequelize-cli
  3. nodemon
  5. mysql2

DB 반영 완료
시퀄라이저를 통해 raw Query를 대신 직관적인 쿼리를 사용

  1. findOrCreate - 특정 요소를 검색하거나, 존재하지 않으면 새로 생성
  2. findAndCountAll - 복수의 요소를 검색하고, 해당하는 데이터와 그 갯수를 반환
  3. findAll - 복수의 요소를 검색
  > 반환되는 항목의 개수 제한
  >Project.findAll({ limit: 10 })

  >첫 10개 항목은 반환받지 않고 넘긴다
  >Project.findAll({ offset: 10 })

  >첫 10개 항목은 반환받지 않고 넘긴 뒤, 2개 항목만 반환한다
  >Project.findAll({ offset: 10, limit: 2 })

  >ORDER BY title DESC
  >Project.findAll({order: 'title DESC'})

  >GROUP BY name
  >Project.findAll({group: 'name'})

  >유사 검색
  >%abc검색시 xabc  CCabc 추출가능
  >abc%검색시 abcx  abcCC 추출가능

  >정렬
  >project.findAll({order: [['postWriter', 'DESC']]})
  
  
  4. count,max,min,sum
  5. https://velog.io/@cadenzah/sequelize-document-1 공식 파트너
  6. https://victorydntmd.tistory.com/92?category=677306 정성 블로그
