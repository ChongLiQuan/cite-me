//Initialize variables
//On-Click for Generate Button
document.getElementById("btnGenerateCitation").onclick = function() {
    var style = citationStyle();
    generateCitation(style)
};

//On-Click for Save Button
document.getElementById("btnAddToCitationList").onclick = function() {
    mySaveList(document.getElementById("txtCitationText").value)
};

//On-Click for Clear Button
document.getElementById("btnClearCitationList").onclick = function () {
    document.getElementById("citationList").value = " ";
}

//To fetch option value from the drop-down field on the html
function citationStyle() {
    var select = document.getElementById("style");
    var value = select.options[select.selectedIndex].value;

    return value;
}

//Function to Save List
function mySaveList(citation) {
    document.getElementById("citationList").value += citation + '\n' + '\n';
}

//Function to Generate Citation
function generateCitation(value) {
    var author = document.getElementById("txtAuthor").value;
    var date = document.getElementById("txtDate").value;
    var month = document.getElementById("txtMonth").value;
    var year = document.getElementById("txtYear").value;
    var title = document.getElementById("txtTitle").value;
    var url = document.getElementById("txtURL").value;
    var dateAccess = document.getElementById("txtAccessed").value;
    var webName = document.getElementById("txtWebName").value;
    var wordMonth;

    //Change the month to word format
    switch (month) {
        case '1':
            wordMonth = "January";
            break;
        case '2':
            wordMonth = "February";
            break;
        case '3':
            wordMonth = "March";
            break;
        case '4':
            wordMonth = "April";
            break;
        case '5':
            wordMonth = "May";
            break;
        case '6':
            wordMonth = "June";
            break;
        case '7':
            wordMonth = "July";
            break;
        case '8':
            wordMonth = "August";
            break;
        case '9':
            wordMonth = "September";
            break;
        case '10':
            wordMonth = "October";
            break;
        case '11':
            wordMonth = "November";
            break;
        case '12':
            wordMonth = "December";
            break;

    }

    switch (value) {
        case "harvard":
            //Harvard References
            document.getElementById("txtCitationText").innerHTML =
                author + ". (" + year + ") " + title +  " Available from: " + url + " [Accessed:" + dateAccess + "]"
            ;
            return citation;
            break;

        case "wikipedia":
            //Wikipedia References
            document.getElementById("txtCitationText").innerHTML =
                author + ". (" + year + "). " + title + ". " +  webName + ". "+ url + ". [Accessed:" + dateAccess + "]"
            ;
            return citation;
            break;

        case "chicago":
            //APA References
            document.getElementById("txtCitationText").innerHTML =
                author + ". " + year + ". " + "\"" + title + ".\" " + "Last Modified Date: " + wordMonth + " " + date + ", " + year + ". " + url + "."
            ;
            return citation;
            break;

        case "apa":
            //APA References
            document.getElementById("txtCitationText").innerHTML =
                title + ". (" + year + ", " + wordMonth + " " + date + "). " + webName + ". " + url
            ;
            return citation;
            break;

        case "mla":
            //MLA References
            document.getElementById("txtCitationText").innerHTML =
                "\"" + title + ".\" " + webName + ", " + year + ". " + url + "."
            ;
            return citation;
            break;
    }
}

function downloadFile(filename, content) {
    // It works on all HTML5 Ready browsers as it uses the download attribute of the <a> element:
    const element = document.createElement('a');

    //A blob is a data type that can store binary data
    // "type" is a MIME type
    // It can have a different value, based on a file you want to save
    const blob = new Blob([content], { type: 'plain/text' });

    //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
    const fileUrl = URL.createObjectURL(blob);

    //setAttribute() Sets the value of an attribute on the specified element.
    element.setAttribute('href', fileUrl); //file location
    element.setAttribute('download', filename); // file name
    element.style.display = 'none';

    //use appendChild() method to move an element from one element to another
    document.body.appendChild(element);
    element.click();

    //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
    document.body.removeChild(element);
};

window.onload = () => {
    document.getElementById('btnDownloadCitationList').
    addEventListener('click', e => {

        //The value of the file name input box
        const filename = "Citation List";

        //The value of what has been input in the textarea
        const content = document.getElementById('citationList').value;

        // The && (logical AND) operator indicates whether both operands are true. If both operands have nonzero values, the result has the value 1 . Otherwise, the result has the value 0.

        if (filename && content) {
            downloadFile(filename, content);
        }
    });
};
