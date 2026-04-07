const fs = require('fs');
const path = './src/components/Portfolio.tsx';
let content = fs.readFileSync(path, 'utf8');

const page6Start = content.indexOf('const page6DataRaw = [');
const page7Start = content.indexOf('const page7DataRaw = [');

if (page6Start !== -1 && page7Start !== -1) {
  const newPage6Data = `const page6DataRaw = [
  {
    title: "수익성을 높이는 효율적 공간 구성, 서동현대아파트",
    tags: ["#서동현대", "#세입자용"],
    img: "https://postfiles.pstatic.net/MjAyMTEyMDNfMjM5/MDAxNjM4NTI5Mjg4ODA1.tIZjwvfmv12FKLlFXyAJQdXAEVQ_Yr0vfP-U4oplGQIg.QnTxi5wrhjpXIwdc70YVihKTUxRYiLC87XL4vaUcnWgg.JPEG.guseo109/KakaoTalk_20211201_204149848_03.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222586117159&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "기본에 충실한 모던 하우스, 옥동 서강파크아파트",
    tags: ["#옥동서강파크", "#모던디자인"],
    img: "https://postfiles.pstatic.net/MjAyMTEyMDJfNzUg/MDAxNjM4NDM5OTIyNjMx.rLidQiZj4Zvsywe7WW79ihsChyGYHGtktm23LMpX1uAg.MhnfkL2znLaF1SMreT3gEUqaXG1eHmujejhaDBMeLN0g.JPEG.guseo109/KakaoTalk_20211201_203530962_17.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222585140775&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "가치를 올리는 실용적 리모델링, 성안청구타운",
    tags: ["#성안청구타운", "#실용주의"],
    img: "https://postfiles.pstatic.net/MjAyMTEyMDFfNTMg/MDAxNjM4MzQ0OTQ4OTQx.NRedWIuP3szrv3nP5vaSPag9jGRUV9j_ibaUz6pKg_8g.hIMUYMM3jVxU4Fe_Elif2w6w3R819wwnIR16Q8JozoMg.JPEG.guseo109/KakaoTalk_20211126_132718455_14.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222584000067&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "공간의 효율성을 극대화하다, 성안동 쌍용아진",
    tags: ["#성안동쌍용아진", "#공간활용"],
    img: "https://postfiles.pstatic.net/MjAyMTExMzBfMTE0/MDAxNjM4MjU3NjAwODI4.r2JimaDBWGbf-QzqVHhPVgkPyuaf8cWw3dyt7zNiKwAg.hhANJhroQ5VB3MJKn6iLHh1045NWmwOQdhitLQ8KN94g.JPEG.guseo109/KakaoTalk_20211123_110544594_01.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222582963991&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "협소 공간의 스마트한 변신, 맞춤형 빌라 리모델링",
    tags: ["#빌라인테리어", "#스마트디자인"],
    img: "https://postfiles.pstatic.net/MjAyMTExMjlfMTE0/MDAxNjM4MTcyNTY3MjA1.Dj2YtvjvaYzjYaryMriNqT6gA5izF50sTAil0jE41sAg.u4Q4-Pw01dAWbSJVXa1H0s0LYe3z1e_cFYglK_GcF00g.JPEG.guseo109/KakaoTalk_20211124_153254323_01.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222581977274&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "라이프스타일을 반영한 주거 공간, 동부패밀리아파트",
    tags: ["#동부패밀리아파트", "#라이프스타일"],
    img: "https://postfiles.pstatic.net/MjAyMTExMjdfMTg2/MDAxNjM4MDEzMzU0OTk0.Rm154N1oWf6PNN_SAnB7UNsYmCcYwK3pK-PXfLdH3LUg.pJS6XqEuG6m01L3eAbtwKK8dZ3DGU0aN93bFzsQjO2wg.JPEG.guseo109/KakaoTalk_20211125_103329906.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222577617400&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "집중력을 높이는 프리미엄 학습 공간, 이솝스터디카페",
    tags: ["#스터디카페", "#상공간인테리어"],
    img: "https://postfiles.pstatic.net/MjAyMTExMjRfMjcz/MDAxNjM3NzQ0MjY5MjE1.C1YqiqkbeQxT-StP0YblCV8_ECz5xVrph_X7IfPOEBcg.IP6JCC1lubtu4lVyvOMo5luk416JdDFha9-ifKAf7Jkg.JPEG.guseo109/KakaoTalk_20211124_162046912.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222577534962&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "트렌디한 감각으로 채운 공간, 달동현대아파트",
    tags: ["#달동현대", "#트렌디디자인"],
    img: "https://postfiles.pstatic.net/MjAyMTExMjRfMzEx/MDAxNjM3NzQxMjE1MTM3._gIR0p6uW_N7ntWyQZhVHup7bMYmnwutk-KAbevuVwcg.TWL6Jeo5taITV5QXQFAWO1eS_60yAlyHBsI45C1habcg.JPEG.guseo109/KakaoTalk_20211124_162445692.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222565434255&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "세련된 디테일이 돋보이는 디자인, 옥동 성도아파트",
    tags: ["#옥동성도아파트", "#디테일시공"],
    img: "https://postfiles.pstatic.net/MjAyMTExMTFfMTMz/MDAxNjM2NjMxNTM5MDg3.8V4OZWsk2eYTPLRDxcmY5Z_fBS5pV0BZoDg-w-huJCcg.X_GH8HhEPM2f3x8ZCCjWWPxtf_kmqoSE4lDRxnixThIg.JPEG.guseo109/KakaoTalk_20211111_203608876_18.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222555395569&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "학습 효율을 극대화하는 상업 공간, 이솝스터디카페 2호점",
    tags: ["#상가인테리어", "#학습공간"],
    img: "https://postfiles.pstatic.net/MjAyMTExMDFfNTAw/MDAxNjM1NzU0ODIwOTg1.KaV39-gbGliOUkFfT9s_kUwqwANJcbgwSjlqVXxQuf4g.GHDF6GkkGQlFhaz_8Gh9aR4gUDzHZdRUPK_t8EzeAtUg.JPEG.guseo109/KakaoTalk_20211028_160516794_20.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222551380654&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "따뜻한 무드의 주거 공간 완성, 화봉 휴먼시아",
    tags: ["#화봉휴먼시아", "#웜톤인테리어"],
    img: "https://postfiles.pstatic.net/MjAyMTEwMjhfMTU2/MDAxNjM1NDA4MTQwNzMy.LcQJazMHsYuB-ibk9P9p9jC6VkHrZm8KLWkuOF8XZYYg.jflqLYd292C0EZSnvfPNoYg2u-hUe-Y_WOB-16wps-Ug.JPEG.guseo109/KakaoTalk_20211027_132111448_18.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222509045022&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "시선을 사로잡는 브랜드 공간, 앤드커피 상공간 디자인",
    tags: ["#카페인테리어", "#앤드커피"],
    img: "https://postfiles.pstatic.net/MjAyMTA5MTdfMjY2/MDAxNjMxODYwNjI0NDU4.KybriMq4KW6xhS_ZWFonrjk1H5oA44H91CL2NnJLoxUg.XY1nYtHKjGIKAgh2LKc75oa1skcu5gs3nciRJ5uQnvIg.JPEG.guseo109/1631860623124.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222112580757&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "새로운 가치를 부여하는 리모델링, 태화동 동부아파트",
    tags: ["#태화동동부", "#전체리모델링"],
    img: "https://postfiles.pstatic.net/MjAyMDEwMTFfOTMz/MDAxNjAyMzk3NTY2MTE4.J9oRAU9EMNbnQtI80j6TvMAWy1F1hKnFDB3KCKj1tCsg.BkCfSBaf7EjMtZvnYB6U6iZkvwU9h_1F3HvwhLkN4fwg.JPEG.guseo109/1602397565633.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222062364190&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "하이엔드 주거 문화의 시작, 해운대 동부센트레빌",
    tags: ["#해운대인테리어", "#하이엔드시공"],
    img: "https://postfiles.pstatic.net/MjAyMDA4MTZfMjM1/MDAxNTk3NTc5MTI4Nzk3.8KxBoGiUjBFjOlW1CgON_Cum7Awn4IPk3i79rS7qDnEg.dDS9vty4-ZY5EY95-PxGqlhU4tdca8riKVzyqqrOnH4g.JPEG.guseo109/1597579127770.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222052270237&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "완벽한 가치 상승 솔루션, 한라신천지타운 리모델링",
    tags: ["#한라신천지타운", "#가치상승"],
    img: "https://postfiles.pstatic.net/MjAyMDA4MDVfMjQ4/MDAxNTk2NjMwNTc4MjEy.Cs_JRaYd8WbrWR6tok6r9kGIxvu95Cfws38NyBGKFQcg.k0SYj_xafltfFlz0jdXGJ2eeRCcbIDz3eSeRoGvxPlIg.JPEG.guseo109/1596630575268.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=222035487240&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  },
  {
    title: "디테일의 차이가 만드는 명품 공간, 전하푸르지오",
    tags: ["#전하푸르지오", "#명품인테리어"],
    img: "https://postfiles.pstatic.net/MjAyMDA3MTlfMTU1/MDAxNTk1MTU4NzE0MjE5.678EhIDcfGkVcdkk8AciLb4ThuKvFRNkSoPWfWs17XYg.46G-udDOL5XMmHfVSclZgOuyCTe1Py73ni4nujYR36gg.JPEG.guseo109/1595158714146.jpg?type=f238",
    link: "https://blog.naver.com/PostView.naver?blogId=guseo109&logNo=221878047705&categoryNo=8&parentCategoryNo=&from=thumbnailList"
  }
];

`;

  content = content.slice(0, page6Start) + newPage6Data + content.slice(page7Start);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated page6DataRaw.');
} else {
  console.log('Could not find page6DataRaw or page7DataRaw.');
}
