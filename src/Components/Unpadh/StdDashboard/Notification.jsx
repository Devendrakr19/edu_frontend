// import "../../Scss/Stddashboardcss/Notification.scss"s ;
export default function Notification() {
  return (
    <>
      <div className="notification_container">
        <h1>Notifications</h1>
        <hr />
        <div className="notification_content_area">
          <div className="notification_col1">
            <img src="/web.png" alt="" />
          </div>
          <div className="notification_col2">
            <h3 id="notif_heading">
              SkillSprints Inc. and 1 other made an announcement: Watch at:
            </h3>
            <h3 id="notif_link">
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
