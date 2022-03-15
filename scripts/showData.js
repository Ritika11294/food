//Make API call and grab data
//Append data


async function getData(url) {

    try {
        let res = await fetch(url)

        let data = await res.json()
        return data
    }
    catch (e) {
        console.log("e:", e);
    }

}


function appendData(data, location) {
     location.innerHTML=null
    data.meals.forEach((el) => {
        
            let div = document.createElement("div");
            div.setAttribute("class", "main_box");
    
            let image = document.createElement("img");
            image.src = el.strMealThumb;

            let name = document.createElement("p");
            name.innerHTML = el.strMeal;
            name.setAttribute("class", "name")

            div.append(image, name)

            location.append(div)


    })


}

export {getData, appendData}    