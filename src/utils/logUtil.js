class LogUtil {
  constructor(env = "dev") {
    this.env = env;
  }

  jlog = (data, tag = "") => {
    if (this.env != "dev") return;
    console.log("--log:" + tag + "\r\n");
    console.log(JSON.stringify(data));
    console.log("--end log" + "\r\n");
  };
}

export default LogUtil;
