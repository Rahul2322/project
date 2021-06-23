//Utility Functions:
//1.To get DOM element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

//Initialize no of parameters
let addParameterCount = 0;
console.log(addParameterCount)



//Hide parameter box unless and untill clicked on custom parameters
let parameterbox = document.getElementById('parametersBox');
parameterbox.style.display = 'none'

//Hide jsontext area on clicking custom parameters
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';

})
//Hide custom parameters  area on clicking JSON
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';

})

let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
   
    let params = document.getElementById('params');
    let string = ` <div class="form-row my-2">
                <label for="url" class="col-sm-2 col-form-label">Parameter ${addParameterCount + 2}</label>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterKey${addParameterCount + 2}" placeholder="Enter Parameter ${addParameterCount + 2} Key">
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterValue${addParameterCount + 2}" placeholder="Enter Parameter ${addParameterCount + 2} Value">
                </div>
                <button  class="btn btn-primary deleteParam">-</button>
                </div>  `;
    //convert the element string to DOM node
    let paramElement = getElementFromString(string);
    // console.log(paramElement)
    params.appendChild(paramElement)


   
    //Add an event listener to remove the parameter on clicking - button

    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove();

        })


    }
    addParameterCount++;
    // console.log(addParameterCount)
})


//If the user clicks on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    document.getElementById('responseJsonText').value = 'Please Wait..Fetching Data..'

    //Fetch all the values user entered
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    // If user has used params option instead of json, collect all the parameters in an object
    if (contentType == 'params') {
        data = {};
        for (let i = 0; i < addParameterCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                //after incrementing count what happens is when we delete suppose paramkey2 we have param1&param3 available so when the loop searches for paramkey 2 its undefined 
                let Key = document.getElementById('parameterKey' + (i + 1)).value;
                let Value = document.getElementById('parameterValue' + (i + 1)).value;
                data[Key] = Value;
            }

        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById('requestJsonText').value;

    }

    //log alll the values to the console for debugging
    console.log('URL is', url);
    console.log('requestType is', requestType);
    console.log('contentType is', contentType);
    console.log('data is', data);

    //if the requesttype is GET,invoke fetch api to create a get request
    if (requestType == 'GET') {
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.text())
            .then((text) => {
                document.getElementById('responseJsonText').value = text
            })
    } else {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(response => response.text())
            .then((text) => {
                document.getElementById('responseJsonText').value = text
            })

    }



})










