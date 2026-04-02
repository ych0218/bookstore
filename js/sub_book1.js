async function bookData() {
    const params = new URLSearchParams({
        target: "title",
        query: "조선왕조실록 3 세종 문종",
        size: 1
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 3fbf5f6a0705655affbdedbbc28fbc95"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll("#bookJs");
        console.log(boxElements)

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // 요소 생성 및 추가
            box.innerHTML = `<img src="${data.documents[i].thumbnail}" class="josun">
                    <h3>${data.documents[i].title}</h3>
                    <span>${data.documents[i].authors}</span>
                    `
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();

