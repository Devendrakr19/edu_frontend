import "./Tnotification.scss";
export default function Tnotification() {
  return (
    <>
      <div className="Tnotification_container">
        <h1>Notifications</h1>
        <hr />
        <div className="Tnotification_content_area">
          <div className="Tnotification_col1">
            <img src="/web.png" alt="" id="tnotificaton_img" />
          </div>
          <div className="Tnotification_col2">
            <h3 id="Tnotif_heading">
              SkillSprints Inc. and 1 other made an announcement: Watch at:
            </h3>
            <h3 id="Tnotif_link">
              https://youtu.be/xoRO5IWPt2A?feature=sharedIf you create any
              content, you know what it feels like to look at that big, empty
              document. If you find content writing a chore, check out my
              latest, free training video: ChatGPT: Create Content Automatically
              which shows you how to automate the content creation process.How
              AI is Changing Content CreationThe thrill of connecting with your
              audience is real, but so is the pressure to constantly produce
              captivating content. That's where the concept of automated content
              creation steps in, changing the game by using AI to simplify the
              process.
            </h3>
            <p>7 days ago</p>
          </div>
        </div>
      </div>
    </>
  );
}
