const firebase = require('firebase');
require('firebase/firestore')


export class Firebase {

    constructor(){

        this._firebaseConfig = {
        apiKey: "AIzaSyC3d_vC51PrLJxs2H5PnZ4HtKCaAA6jhWs",
        authDomain: "whatsapp-clone-8813c.firebaseapp.com",
        projectId: "whatsapp-clone-8813c",
        storageBucket: "whatsapp-clone-8813c.appspot.com",
        messagingSenderId: "739456993842",
        appId: "1:739456993842:web:bef9442e841d2590efca2b",
        measurementId: "G-5MYZS4F757"
        }

        this.init();

    }

    init(){
    
        if(!window._initializedFirebase){
            firebase.initializeApp(this._firebaseConfig);
            firebase.firestore().settings({
               
            });

            window._initializedFirebase= true;

        }
    
    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    }

    initAuth(){

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then(result=>{

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user, 
                    token
                });

            })
            .catch(err=>{
                f(err);
            });//Verificação para entrar com a conta google

        });

    }

}