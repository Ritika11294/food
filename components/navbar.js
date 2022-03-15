function navbar() {

    return `<div id="navbar">
    <div id="nav-left">
        <img id="lines" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_wwju-cVrjQmgJGldcnLuTLi9uJ8wQVrXA&usqp=CAU"
        alt="">
    <img id="logo"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRPuDZIrnhWPPHi82PJNwKJQowTIr-9IfNHHP3bVxNW57TpYwkG3Vb5BxwmbUzxXcePw&usqp=CAU"
        alt="">
    <h1></h1>
    </div>


    <div id="nav-middle">
        <input type="text" id="search_bar" placeholder="Find a Recipe">
        <button id="searchbutton">Search</button>
    </div>

    <div id="nav-right">
        <div id="home"><a href="index.html">Home</a></div>
        <div id="signup"><a href="signup.html">Join Now</a> </div>
        <div id="login"><a href="login.html">Login</a></div>
        <div id="recipe_day"><a href="recipe.html">Recipe of the Day</a></div>
        <div id="latest"><a href="latest.html">Latest Recipe</a></div>
                    
    </div>
</div>`
}

export default navbar 