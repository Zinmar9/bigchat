// import { auth } from "firebase";

const styles = (theme) => ({
  content: {
    height: "calc(100vh - 70px)",
    overflow: "auto",
    // padding: "20px",
    // marginLeft: "100px",
    // marginRight: "10px",
    // boxSizing: "border-box",
    // overflowY: 'scroll',
    // marginTop: "-100px",
    // width: "calc(100% - 300px)",
    position: "flex",
  },

  userSent: {
    float: "right",
    clear: "both",
    padding: "2px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#5399F3",
    color: "white",
    width: "auto",
    height: "auto",
    marginLeft: "50px",
    borderRadius: "10px",
    paddingLeft: "20px",
  },

  friendSent: {
    float: "left",
    clear: "both",
    padding: "2px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#dcdee6",
    color: "black",
    width: "250px",

    borderRadius: "10px",
  },
});

export default styles;
