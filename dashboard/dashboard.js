// inicialização de variáveis chaves
var entriesAmount = 25;
var currentEntrie = 5;
var currentPage = 3;
var peopleQt = 6;

// criando pessoas e funções pra montar a tabela
var Person = function(name, dateCreated, role, status, photo){
    this.name = name;
    this.dateCreated  = dateCreated;
    this.role = role;
    this.status = status;
    this.photo = photo;
}

Person.prototype.statusIcon = function(){
    if(this.status == "Active"){
        return "<i class=\"fa fa-circle\" aria-hidden=\"true\" id=\"statusIcon\" style=\"font-size: 12px;color: #6ed659;\"></i>";
    }
    else if(this.status == "Inactive"){
        return "<i class=\"fa fa-circle\" aria-hidden=\"true\" id=\"statusIcon\" style=\"font-size: 12px;color:  #d6d459;\"></i>";
    }
    else return "<i class=\"fa fa-circle\" aria-hidden=\"true\" id=\"statusIcon\" style=\"font-size: 12px;color: #dd405a;\"></i>";
}

Person.prototype.addToTable = function(item){
    return "<td>" + item + "</td>";
}

Person.prototype.createItem = function(i){
    var html = "";
    html += "<tr " + "id=\"tableItem" + i + "\">";
    // add numero
    html += "<td>" + i + "</td" + "<td>";
    // add imagem e nome
    html += "<td>" + this.photo + "<span>" + this.name + "</span>" + "</td>";
    // add date and role
    html += this.addToTable(this.dateCreated);
    html += this.addToTable(this.role);
    // add status
    html += "<td>" + this.statusIcon() + this.status + "</td>";
    // add action buttons
    html += "<td> " + "<button class=\"cogIcon" + " " + i + "\"/>" +
        "<i class=\"fa fa-cog " + i + "\" aria-hidden=\"true\" style=\"color: #22bee6;\" ></i>" +
        "</button >" +
        "<button class=\"cancelIcon" + " " + i + "\"/>" +
        "<i class=\"fa fa-times-circle " + i + "\" aria-hidden=\"true\" style=\"color: #dd405a;\"></i>" +
        "</button >";
    return html;
}

//apenas scripts essenciais para o funcionamento

window.addEventListener('DOMContentLoaded', function () {
    var people = [];
    people.push(new Person("Michael Scott", "04 / 10 / 2012", "Manager", "Active", "<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1323877428%2Fthe_office_nbc_tv_show_image_steve_carrol_as_michael_scott__1__400x400.jpg&f=1&nofb=1\" alt=\"Michael Scott\">"));
    people.push(new Person("Dwight Schrute", "04/10/2012", "Sales Representative", "Active", "<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheofficeanalytics.files.wordpress.com%2F2017%2F11%2Fdwight.jpeg%3Fw%3D1200&f=1&nofb=1\" alt=\"Dwight Schrute\">"));
    people.push(new Person("James Halpert", "04/04/2012", "Sales Representative", "Inactive", "<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F2953301296%2F3c9f22df7b1eec05cc646d461158828b_400x400.jpeg&f=1&nofb=1\" alt=\"Jim Halpert\">"));
    people.push(new Person("Pamela Beesly", "04/05/2015", "Receptionist", "Inactive", "<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.nbc.com%2Fsites%2Fnbcunbc%2Ffiles%2Fmetaverse_assets%2F1%2F0%2F6%2F3%2F4%2F0%2Fpam-500x500.jpg&f=1&nofb=1\" alt=\"Pam Beesly\">"));
    people.push(new Person("Kevin Malone", "04/04/2013", "Accountant", "Suspended", "<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2Fcd4842fe273d1d987ca238a279319a1a%2Ftumblr_ppmc8cjraH1seiesj_500.jpg&f=1&nofb=1\" alt=\"Kevin Malone\">"));
    people.push(new Person("Angela Martin", "04/10/2012", "Senior Accountant", "Active", "<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com%2Fimages%2Fcharacters%2Fp-the-office-angela-kinsey.jpg&f=1&nofb=1\" alt=\"Angela Martins\">"));
    var html = "<tr>";

    for(var i = 0; i < peopleQt; i++){
        html += people[i].createItem(i);
    }

    html += "</tr>"
    $("#tableBody").html(html);
    
 }, false);



