export class Base64 {

    static getMimetype(base64URL){

        let regex = /^(.+);base64,(.*)$/;
        let result = base64URL.match(regex);
        return result[1];
    }

    static toFile(base64URL){

        let mimeType = Base64.getMimetype(base64URL);
        let ext = mimeType.split('/')[1];
        let fileName = `file${Date.now()}.${ext}`;

        return fetch(base64URL)
            .then(res =>{return res.arrayBuffer();})
            .then(buf => {return new File([buf], fileName, {type: mimeType});});
            

    }

}