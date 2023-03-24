// let url = "https://jsonplaceholder.typicode.com/users"
// let xml = new XMLHttpRequest()
// const response = (arr) => {
//     for(let i = 0 ; i<arr.length ; i++){
//         let h1 = document.createElement("h1")
//         h1.append(arr[i].name)
//         document.body.append(h1)
//     }
// }
// xml.addEventListener("readystatechange" , () => {
//     if(xml.readyState === 3){
//         let response = JSON.parse(xml.responseText)
//         renders(response)
//     }
// })
//xml.open("GET" , url)
//xml.send()



// const renders = (arr) => {
//     for(let i = 0 ; i<arr.length ; i++){
//         let h1 = document.createElement("h1")
//         h1.append(arr[i].name)
//         document.body.append(h1)
//     }
// }
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then((data) => renders(data))


// fetch("https://reqres.in/api/users" , {
//     method : "POST",
//     headers : {
//         "Content-type" : "application/json"
//     },
//     body: JSON.stringify({name : "Ikrom" , job: "Front end Developer"})
// }).then(response => response.json()).then((data) => console.log(data))



// const handleSub = (arr) => {
//     arr.preventDefault()
//     const data = new FormData()
//     fetch("https://reqres.in/api/users" , {
//       method : "POST",
//       headers : {
//         "Content-type" : "application/json"
//       },
//       body : JSON.stringify({
//         email : data.get("email"),
//         password : data.get("password")
//       })
//     }).then((response) => response.json()).then((data) =>{
//         let {token} = data
//         if(token !== null || token !== undefined){
//             window.location.replace("file:///C:/Users/E-MAX%20PC%20Shop/Desktop/javascript/rest%20operatorlar/new.html")
//         }
//     })
// }
// const form = document.querySelector("form")
// form.addEventListener("submit" , handleSub)

const form = renderElement("form")
const handleSub = (arr) => {
  arr.preventDefault()
  const data = new FormData(arr.target)
  fetch("https://reqres.in/api/users" , {
    method : "POST",
    headers : {
      "Content-type" : "application/json"
    },
    body : {
      email : data.get("email"),
      password : data.get("password")
    }
  }).then((response) => response.json()).then((data) => {
    let {token}= data
    if(token.length !== null || token.length !== undefined){
      window.location.replace("file:///C:/Users/E-MAX%20PC%20Shop/Desktop/javascript/rest%20operatorlar/new.html")
    }
  })
}
form.addEventListener("submit" , handleSub)