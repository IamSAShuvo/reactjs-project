import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img src="image3.png" alt="Salman Aziz" srcSet="" className="avatar" />
  );
}

function Intro() {
  return (
    <div className="intro">
      <h1>Salman Aziz</h1>
      <p>
        As a recent graduate with a Bachelor of Science in Computer Engineering,
        I am extremely interested in the computer engineering field. After
        reviewing the key qualifications for this role, I am confident that I am
        well-prepared to be a valuable contributor to company growth and
        success.
      </p>
      <br />
      <p>
        Through my academic journey, I applied a strong focus on building my
        programming abilities. I work best in roles where utilizing programming
        allows me to make a positive impact while using creative problem-solving
        to resolve issues and achieve goals.
      </p>
      <br />
      <p>
        My academic strengths have greatly contributed to the development of my
        problem-solving, teamwork and collaboration skills. I would welcome the
        opportunity to further discuss the details of my experience and
        attributes which I believe will be an asset to this team.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="#4A80FF" />
      <Skill skill="JavaScript" emoji="❤️" color="#F5DD21" />
      <Skill skill="Web Design" emoji="👌" color="#C4E3AE" />
      <Skill skill="Git and GitHub" emoji="👍" color="#FF6F56" />
      <Skill skill="React" emoji="💪" color="#65E6FF" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
