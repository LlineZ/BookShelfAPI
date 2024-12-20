import erroBase from "./erroBase.js";

class RequsicaoIncorreta extends erroBase{
    constructor(message = "Um ou mais dados inseridos estão incorretos",status = 400){
        super(message, status)
    }



}
export default RequsicaoIncorreta