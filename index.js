

let postsArr = []

fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
.then(response => response.json())
.then(data => {
     postsArr = data.slice(0, 6)
        renderPosts(postsArr);
});

function renderPosts(arr){

    app.innerHTML = ""
    for (let obj of arr){
    //    console.log(obj)
        
       app.innerHTML += `<h1 class="title">${obj.title}</h1>
       <p class="body" > ${obj.body} </p>
       <hr/>`
    }
}


const app = document.getElementById("app")


const blogForm = document.getElementById("blog-form")

blogForm.addEventListener('submit', function(event){
    event.preventDefault()
    const formData = new FormData(blogForm)

    let formDataObj = {}
    for (let value of formData.entries()){
        formDataObj[value[0]] = value[1]
    }
    // console.log(formDataObj)

    fetch("https://apis.scrimba.com/jsonplaceholder/posts",{
        method:"POST",
        body: JSON.stringify(formDataObj),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        postsArr.unshift(data)
        console.log(postsArr)
        renderPosts(postsArr)
        document.getElementById("post-title").value = ""
        document.getElementById("post-body").value = ""

    })
   
    })


