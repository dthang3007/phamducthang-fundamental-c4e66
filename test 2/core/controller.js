const controller = {}
controller.register = async function (registerInfor) {
    let email = registerInfor.email
    let password = registerInfor.password
    let displayName = registerInfor.firstname + " " + registerInfor.lastname
    view.setText('register-success', " ")
    view.setText('register-error', " ")
    view.disable("register-btn")
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({
            displayName: displayName
        })
        await firebase.auth().currentUser.sendEmailVerification()
        view.setText('register-success', "An erification email has been sended to your email address")
    } catch (err) {
        view.setText("register-error", err.message)
    }
    view.enable("register-btn")
}
controller.signIn = async function (loginInfor) {
    let email = loginInfor.email
    let password = loginInfor.password
    view.setText('login-success', " ")
    view.setText('login-error', " ")
    view.disable("login-btn")
    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(result)
        if (!result.user || !result.user.emailVerified) {
            throw new Error("You must verify email")
        }
        view.showComponents("main");

        // define UI
        const list = document.getElementById("content-list")

        // realtime data
        db.collection('user').orderBy("time", "desc").onSnapshot(snapshot => { //desc =>> stt giảm dần 
            let changes = snapshot.docChanges() // detect change intime , la 1 array
            //console.log(changes)
            changes.forEach(change => {
                if (change.type == 'added') {
                    render(change.doc)
                } else if (change.type == 'modified') {
                   
                    // if (document.getElementById("like").style.backgroundColor == "#2185d0") {
                        updateLikeData(change.doc.id, change.doc.data().like)
                    // }
                    // if (document.getElementById("dislike").style.backgroundColor == "red") {
                        updateDislikeData(change.doc.id, change.doc.data().dislike)
                    // }
                }
                })
            });

        function updateLikeData(id, dataLike) {
            let likecount = document.getElementById(id + " " + "like")
            // let button1 = document.getElementById(id+ " " + "btnlike")
            //     // if(!parent.classList.contains('btn-interact')) return;
                
            //     //e.target
            //     button1.style.backgroundColor='#2185d0';
            likecount.textContent = dataLike
        }
        
        function updateDislikeData(id, dataDislike) {
            let dislikecount = document.getElementById(id + " " + "dislike")
            // let button2 = document.getElementById(id + " " + "btndislike")
            //     // if(!parent.classList.contains('btn-interact')) return;
            //     //e.target
            //     button2.style.backgroundColor='red';
            dislikecount.textContent = dataDislike
        }
      
        function render(doc) {
            let posts = document.createElement('div')
            posts.setAttribute("class", "content")
            // image   


            let image = document.createElement('img')
            image.setAttribute("class", "image-class")

            image.src = 'https://loremflickr.com/640/360'


            // include 3 
            let content = document.createElement('div')
            content.setAttribute("class", 'wrapper-info')
            content.setAttribute("id", "doc.id")

            //hastag
            let hastag = document.createElement('p')
            hastag.textContent = "#" + doc.data().hastag
            hastag.setAttribute("class", "hastag")
            //userName
            let author = document.createElement('p')
            author.textContent = doc.data().userName
            author.setAttribute("class", "author")
            //content
            let post = document.createElement('p')
            post.textContent = doc.data().content
            post.setAttribute("class", "post")



            content.appendChild(hastag)
            content.appendChild(author)
            content.appendChild(post)
            //interact
            let interact = document.createElement("div")
            interact.setAttribute("class", "interact")

            //like
            let likecount = document.createElement("p")
            likecount.setAttribute("id", doc.id + " " + "like")
            likecount.textContent = doc.data().like
            //button like    
            let icon1 = document.createElement("i")
            icon1.setAttribute("class", "fas fa-thumbs-up")

            let button1 = document.createElement("button")
            button1.setAttribute("class", "btn-interact")
            // button1.setAttribute("id",doc.id + " " + "btnlike")
            let count1 = doc.data().like
            button1.addEventListener("click", () => {
                ++count1
                db.collection('user').doc(`${doc.id}`).update({
                    like: count1
                })
            })

            button1.appendChild(icon1)
            //dislike
            let dislikecount = document.createElement("p")
            dislikecount.setAttribute("id", doc.id + " " + "dislike")
            dislikecount.textContent = doc.data().dislike
            //button dislike   
            let icon2 = document.createElement("i")
            icon2.setAttribute("class", "fas fa-thumbs-down")

            let button2 = document.createElement("button")
            button2.setAttribute("class", "btn-interact")
            // button2.setAttribute("id",doc.id + " " + "btndislike")
            let count2 = doc.data().dislike
            button2.addEventListener("click", () => {
                ++count2
                db.collection('user').doc(`${doc.id}`).update({
                    dislike: count2
                })
            })

            button2.appendChild(icon2)

            interact.appendChild(likecount)
            interact.appendChild(button1)
            interact.appendChild(dislikecount)
            interact.appendChild(button2)
            //end    
            posts.appendChild(image)
            posts.appendChild(content)
            posts.appendChild(interact)
            list.appendChild(posts)
        }


    } catch (err) {
        view.setText("login-error", err.message)
    }
    view.enable("login-btn")
}