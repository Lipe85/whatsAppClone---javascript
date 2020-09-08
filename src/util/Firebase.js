const firebase = require('firebase');
require('firebase/firestore');

export class Firebase{

    constructor(){

        this._config = {
            apiKey: "AIzaSyA6Mtb9RGL2Hy431JXOPE1lx144Vj6Bq4w",
            authDomain: "whatsapp-clone-a64e6.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-a64e6.firebaseio.com",
            projectId: "whatsapp-clone-a64e6",
            storageBucket: "whatsapp-clone-a64e6.appspot.com",
            messagingSenderId: "344977944633",
            appId: "1:344977944633:web:3bba1e5c893d6599da1de8"
        };

        this.init();

    }

  init(){

    if(!window._initializedFirebase){

        firebase.initializeApp(this._config);

        window._initializedFirebase = true;

    }

  }

  static db(){

        return firebase.firestore();

  }

  static hd(){

        return firebase.storage();

  }

  initAuth(){

    return new Promise((s,f)=>{

      let provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider)
      .then(result=>{

        let token = result.credential.accessToken;
        let user = result.user;

        s({
          user, 
          token
        
        });

      }).catch(err=>{

        f(err)

      });

    });

  }

}