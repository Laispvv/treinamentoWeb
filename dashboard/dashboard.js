// inicialização de variáveis chaves
var entriesAmount = 25;
var currentEntrie = 5;
var currentPage = 3;
var peopleQt = 6;

// =============================================================== Criação de Person ===================================================================
var Person = function (name, dateCreated, role, status, photo) {
    this.id = generateId();
    this.name = name;
    this.dateCreated = dateCreated;
    this.role = role;
    this.status = status;
    this.photo = photo;
}

var statusIconObj = function (obj) {
    if (obj.status == "Active") {
        return "<i class=\"fa fa-circle\" aria-hidden=\"true\" id=\"statusIcon\" style=\"font-size: 12px;color: #6ed659;\"></i>";
    }
    else if (obj.status == "Inactive") {
        return "<i class=\"fa fa-circle\" aria-hidden=\"true\" id=\"statusIcon\" style=\"font-size: 12px;color:  #d6d459;\"></i>";
    }
    else return "<i class=\"fa fa-circle\" aria-hidden=\"true\" id=\"statusIcon\" style=\"font-size: 12px;color: #dd405a;\"></i>";
}

var createItemForObject = function (obj, index) {
    var idDoObj = obj.id;
    var html =
        `<tr id=${idDoObj}>
            <td> ${index} </td>
            <td> ${obj.photo}
                <span>
                    ${obj.name}
                </span>
            </td>
            <td> ${obj.dateCreated} </td>
            <td> ${obj.role} </td>
            <td> ${statusIconObj(obj)} ${obj.status} </td>
            <td>
                <button class="cogIcon ${idDoObj}">
                    <i class="fa fa-cog ${idDoObj}" aria-hidden="true" style="color:#22bee6;"></i>
                </button>
                <button id="${idDoObj}" onClick=onCancelButtonClick(this) class="cancelIcon ${idDoObj}">
                    <i id="${idDoObj}" class="fa fa-times-circle ${idDoObj}" aria-hidden="true" style="color:#dd405a;"></i>
                </button>
            </td>
        </tr>`;
    return html;
}

var generateId = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// =================================================================================================================================================

var people = [];

people.push(new Person("Michael Scott", "04 /10/2012", "Manager", "Active", "<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1323877428%2Fthe_office_nbc_tv_show_image_steve_carrol_as_michael_scott__1__400x400.jpg&f=1&nofb=1\" alt=\"Michael Scott\">"));
people.push(new Person("Dwight Schrute", "04/10/2012", "Sales Representative", "Active", "<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheofficeanalytics.files.wordpress.com%2F2017%2F11%2Fdwight.jpeg%3Fw%3D1200&f=1&nofb=1\" alt=\"Dwight Schrute\">"));
people.push(new Person("James Halpert", "04/04/2012", "Sales Representative", "Inactive", "<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F2953301296%2F3c9f22df7b1eec05cc646d461158828b_400x400.jpeg&f=1&nofb=1\" alt=\"Jim Halpert\">"));
people.push(new Person("Pamela Beesly", "04/05/2015", "Receptionist", "Inactive", "<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.nbc.com%2Fsites%2Fnbcunbc%2Ffiles%2Fmetaverse_assets%2F1%2F0%2F6%2F3%2F4%2F0%2Fpam-500x500.jpg&f=1&nofb=1\" alt=\"Pam Beesly\">"));
people.push(new Person("Kevin Malone", "04/04/2013", "Accountant", "Suspended", "<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2Fcd4842fe273d1d987ca238a279319a1a%2Ftumblr_ppmc8cjraH1seiesj_500.jpg&f=1&nofb=1\" alt=\"Kevin Malone\">"));
people.push(new Person("Angela Martin", "04/10/2012", "Senior Accountant", "Active", "<img src=\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com%2Fimages%2Fcharacters%2Fp-the-office-angela-kinsey.jpg&f=1&nofb=1\" alt=\"Angela Martins\">"));

var updateLocalStorage = function (lista) {
    localStorage.setItem('userList', JSON.stringify(lista));
}

window.addEventListener('DOMContentLoaded', function () {


    var html = "<tr>";
    if (!localStorage.getItem('userList')) {
        console.log('nao tem userList, entao deve carregar lista padrao')
        updateLocalStorage(people);
    }

    //se tiver um container para nome então pega as informações dos containers
    if (localStorage.getItem('namePerson')) {
        var name = localStorage.getItem('namePerson');
        var date = localStorage.getItem('datePerson');
        var role = localStorage.getItem('rolePerson');
        var status = localStorage.getItem('statusPerson');
        var imgurl = localStorage.getItem('imageUrl');
        var image = `<img src="data:image/png;base64,${imgurl}" alt="${name}" >`;
        console.log("data:image/png;base64," + imgurl);

        //verificando se as variáveis de pessoa são válidas para adicionar a pessoa
        if (name && date && role && status && image) {
            var newPerson = new Person(name, date, role, status, image);

            const listaParseada = JSON.parse(localStorage.getItem('userList')); //devolve a user list como uma lista de objetos
            listaParseada.push(newPerson);
            console.log(listaParseada);
            updateLocalStorage(listaParseada);
            people = listaParseada;
        }
        // remove as variaveis locais criadas dps da pessoa adicionada
        localStorage.removeItem('namePerson');
        localStorage.removeItem('datePerson');
        localStorage.removeItem('statusPerson');
        localStorage.removeItem('rolePerson');
        localStorage.removeItem('imageUrl');

    }

    const listaParseada = JSON.parse(localStorage.getItem('userList')); //devolve a user list como uma lista de objetos
    //definindo a lista de pessoas igual a lista parseada para garantir que ids permanecem iguais
    people = listaParseada;

    var cont = 1;
    listaParseada.forEach(p => {
        //função que adiciona a pessoa na tela
        html += createItemForObject(p, cont);
        cont++;
    });


    html += "</tr>";

    $("#tableBody").html(html);
}, false);



