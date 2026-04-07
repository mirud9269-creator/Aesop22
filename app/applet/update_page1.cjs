const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Portfolio.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const newData = `const page1DataRaw = [
  {
    title: "남구 야음동 쌍용스윗닷홈 - 품격을 더하는 맞춤형 공간 디자인",
    tags: ["#쌍용스윗닷홈"],
    img: "https://postfiles.pstatic.net/MjAxOTA4MzBfMjU2/MDAxNTY3MTUyMDM5Njk4.VnO4MQKPgYTky1hJgA9et5LaQawhFcHD1twxMYKPZTcg.Q12V2d8SAkcH9Q2OnRmet3G4QAsHmE7ypVA-dQKsTt0g.JPEG.guseo109/20190825_145434.jpg?type=f238",
    link: "링크입력"
  },
  {
    title: "울산인테리어 중구 반구동 도원빌라 구축 빌라 리모델링",
    tags: ["#반구동도원빌라"],
    img: "https://via.placeholder.com/400x300?text=No+Image",
    link: "링크입력"
  },
  {
    title: "울산인테리어 [33평] 북구 송정동 송정양수자인",
    tags: ["#송정양수자인"],
    img: "https://via.placeholder.com/400x300?text=No+Image",
    link: "링크입력"
  },
  {
    title: "새로운 데이터를 입력하세요 1",
    tags: ["#태그"],
    img: "https://via.placeholder.com/400x300?text=No+Image",
    link: "#"
  }
];`;

const regex = /const page1DataRaw = \[[\s\S]*?\];/;
content = content.replace(regex, newData);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated page1DataRaw.');
