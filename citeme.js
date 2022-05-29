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

}