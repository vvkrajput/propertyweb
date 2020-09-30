let BaseUrl='http://dizical.com/pcnew/api/user/'
let xhr=new XMLHttpRequest();
export function PostData(type, userData){
    console.log("userData",userData,BaseUrl+type);
    
    return new Promise((resolve, reject) => {
        xhr(BaseUrl+type,{
            method: 'POST',
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson)=> {
            console.log("responseJson",responseJson);
            
            resolve(responseJson);
        })
        .catch((error)=>{
            console.log("error",error)
            reject(error);
        })
    })
}

//GET function for get information
export function GetData(type,id){
      console.log("BaseUrl+type/`${id}`",BaseUrl+type+'/'+id);      
    return new Promise((resolve, reject) => {
        fetch(BaseUrl+type+'/'+id,{
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson)=> {
            resolve(responseJson);
        })
        .catch((error)=>{
            reject(error);
        })
    })
}


//POST function for post File
export function PostFile(type, userData){
    console.log("userData",userData);
    const formdata = new FormData();

    formdata.append("user_image", {
      uri: userData.uri,
      name: userData.fileName,
      filename:  userData.fileName,
      type: 'image/jpeg'});
    return new Promise((resolve, reject) => {
        fetch(BaseUrl+type,{
            method: 'post',
            headers: {
			    'Accept': 'application/json',
					'Content-Type': 'multipart/form-data'
			  },
            body: formdata,
          })
          .then((response) => response.json())
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
              console.log("image error",error)
            reject(error);
        });
    })
}

//Set Data function in AsyncStorage
/*export function SetStore(key, value){
    AsyncStorage.setItem(key, value, () => {
        console.log('setItem Done!')
    })
}

//Get Data function in AsyncStorage
export function GetStore(key){
    AsyncStorage.getItem(key).then((value) => {
        console.log(value);
        return value;
    })
}
*/



