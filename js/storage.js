function saveData(data){
    localStorage.setItem(
        "mothers_day",
        JSON.stringify(data)
    );
}

function loadData(){

    const data = localStorage.getItem("mothers_day");

    if(!data) return null;

    return JSON.parse(data);
}