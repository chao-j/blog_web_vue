class ServerUtil {
  constructor(env = "dev") {
    this.env = env;
    this.devUrl = "http://127.0.0.1:8081/";
    this.prodUrl = "http://www.zhaocj.top:8081/";
  }

  get apiUrl() {
    // console.log(this.devUrl)
    return this.env === "dev" ? this.devUrl : this.prodUrl;
  }
}

export { ServerUtil };
