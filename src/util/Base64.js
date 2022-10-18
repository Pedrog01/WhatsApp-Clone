export class Base64 {

    static getMimetype(urlBase64){

            let regex = /^data(.+);base64,(.*)$/;
            let result = this.el.pictureCamera.src.match(regex);
            let mimeType = result[1];

    }

} 