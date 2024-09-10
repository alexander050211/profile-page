import "./App.css";

import profile from "./assets/anxiety.jpg";

function App() {
  return (
    <div className="wrapper">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={profile} className="profileImage" alt="profile image" />
        <p style={{ fontSize: "3em" }}>박인혁</p>
      </div>
      <ul>
        <li>컴퓨터공학부 24학번 05년생</li>
        <li>MBTI는 ISTP</li>
        <li>취미는 PS, 롤, 음악</li>
        <li>많이 배우고 싶습니다! 잘 부탁드립니다!</li>
      </ul>
    </div>
  );
}

export default App;