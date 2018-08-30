import firebase from 'firebase';

export const initializeFirebase = () => {
 

  var config = {
    apiKey: "AIzaSyACaL6qsfIAgQ1QUCWhPmyn76D1UL54VmA",
    authDomain: "push-test-de5c2.firebaseapp.com",
    databaseURL: "https://push-test-de5c2.firebaseio.com",
    projectId: "push-test-de5c2",
    storageBucket: "push-test-de5c2.appspot.com",
    messagingSenderId: "824440442769"
  };

  firebase.initializeApp(config);


}

export const  askForPermissioToReceiveNotifications = () => {
  
   var prom1 = new Promise((resolve,reject)=>{
    const messaging = firebase.messaging();
    messaging.requestPermission();
    const token = messaging.getToken();
    console.log(token);
    resolve(token);
   })
   
   return prom1.then((token)=>{
    console.log(token);
    fetch("https://iid.googleapis.com/iid/v1/"+ token + "/rel/topics/all",{
      method: 'POST',
      headers:{'Authorization':'key=AAAAv_R6z5E:APA91bHLXWzm5oMfs44Q6iZRxOQhI9-kQKaxpeY497zYE_XamXGlPymImjGhXpst_zjv89h4zrRWh7DmoPpw8rCnHXhmHAIcSWl75A6d5sPq0TNgLDGaemewxe7BIhW4fqLt5nLFekDX',
      'Content-Type':'application/json'
    }
    }).then(res => console.log(res))
    .catch(error => console.error('Error:', error))
    return token;
   })


    

    
    

    
    
  
}
