class ServerUtil {
  constructor() {
    this.env="dev"
    this.devUrl="http://127.0.0.1:3000/"
    this.prodUrl="http://www.zhaocj.top:3000/"
  }

  get apiUrl(){
    // console.log(this.devUrl)
    return this.env==="dev"?this.devUrl:this.prodUrl
  }
}

export {ServerUtil}