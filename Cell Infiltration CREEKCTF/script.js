function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    document.getElementById("result").innerText =
        "Signal cascade evaluating genetic signature...";

    const whereClause =
        "username === '" + username + "' && password === '" + password + "'";

   
    let result;

    try {
        result = eval(whereClause); 
    } catch (e) {
        result = false;
    }

    if (result === true) {
        window.location.href = "success.html";
    } else {
        document.getElementById("result").innerText =
            "You disgusting virus, you ain't getting in me today";
    }
}