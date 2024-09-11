import "./App.css";

import profile from "./assets/anxiety.jpg";
import background from "./assets/IMG_5078.jpg";

function App() {
  return (
    <div className="wrapper">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: background
        }}
      >
        <img src={profile} className="profileImage" alt="profile image" />
        <p style={{ fontSize: "3em" }}>박인혁</p>
      </div>
      <div>
        <ul>
          <li>컴퓨터공학부 24학번 05년생</li>
          <li>MBTI는 ISTP</li>

          <li>취미는 PS(<a className="glowing-text-dynamic" href="https://solved.ac/profile/alex0211">백준</a>, <a className="glowing-text-dynamic" href="https://codeforces.com/profile/alex0211">코드포스</a>), 방탈출, 보드게임</li>
          <li>많이 배우고 싶습니다! 잘 부탁드립니다!</li>
        </ul>
      </div>
    </div>
  );
}

export default App;