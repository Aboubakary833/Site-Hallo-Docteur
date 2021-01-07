export default class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        ${this.headerStyle()}
        <header>
        <div class="container">
            <div class="row pt-2">
                <div class="col-4 col-md-3 mt-lg-0 mt-md-3">
                    <img src="${this.getAttribute('logo')}" alt="Hallo Docteur" id="logo">
                </div>
                <div class="d-none col-md-3 d-md-flex flex-column flex-lg-row text-center mt-4 header-block">
                    <img src="${this.getAttribute('icons')}/clock.png" alt="Horaire" class="mx-auto header-icon">
                    <div class="titles_block mt-lg-1 ml-2">
                        <span>Lundi-Samedi 24H/24H</span><br>
                        <span>Dimanche 6H-22H</span>
                    </div>
                </div>
                <div class="col-4 col-md-3 d-flex flex-column flex-lg-row text-center mt-4 header-block">
                    <img src="${this.getAttribute('icons')}/phone.png" alt="Téléphone" class="mx-auto header-icon">
                    <div class="titles_block">
                        <span>+226 70-04-73-27</span><br>
                        <span class="sub_title_hidden_2">+226 68-02-17-41</span>
                    </div>
                </div>
                <div class="col-4 col-md-3 d-flex flex-column flex-lg-row text-center mt-4 header-block">
                    <img src="${this.getAttribute('icons')}/pin.png" alt="Localisation" class="mx-auto header-icon">
                    <div class="titles_block">
                        <span>Arrondissement 5</span><br>
                        <span class="sub_title_hidden_2">Secteur 22</span><br>
                        <span class="sub_title_hidden_1">Boulevard Charles De Gaulle</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid nav-block">
            <div class="container">
                <div class="row d-flex">
                    <div class="col-md-12 col-lg-10">
                        <nav class="navbar sticky-top navbar-expand-md navbar-light p-0">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                              <div class="navbar-nav">
                                <a id="accueil" class="nav-link text-dark font-weight-bolder" href="${this.getAttribute('href1')}">ACCUEIL</a>
                                <div class="nav_subBlock">
                                <a id="specialites" class="nav-link text-dark font-weight-bolder" href="${this.getAttribute('href3')}">SPECIALITES</a>
                                ${this.subLinks_1()}
                                </div>
                                <a id="documents" class="nav-link text-dark font-weight-bolder" href="${this.getAttribute('href4')}">DOCUMENTS</a>
                                <div class="nav_subBlock">
                                <a id="services" class="nav-link text-dark font-weight-bolder" href="${this.getAttribute('href2')}">SERVICES</a>
                                ${this.subLinks_2()}
                                </div>
                                <a id="contacts" class="nav-link text-dark font-weight-bolder" href="${this.getAttribute('href5')}">CONTACTS</a>
                              </div>
                            </div>
                            <form method="GET" action="${this.getAttribute('search')}" id="searchbar" class="form-inline searchbar">
                                <input type="text" id="searchInput" placeholder="Rechercher..." aria-label="Search">
                                <button type="submit">
                                    <img src="${this.getAttribute('icons')}/search.svg" alt="Rechercher">
                                </button>
                            </form>
                        </nav>
                    </div>
                      <div class="col-lg-2">
                        <div class="medias">
                            <a href="https://m.facebook.com/HALLO-Docteur-102558741791085/" target="_blank"><img src="${this.getAttribute('icons')}/facebook.svg" alt="Facebook" class="mt-2
                              ml-lg-4 ml-md-2 media-icon"></a>
                            <a href="https://twitter.com/HalloDocteur" target="_blank"><img src="${this.getAttribute('icons')}/twitter.svg" alt="Twitter" class="mt-2 ml-lg-4 ml-md-3 media-icon"></a>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </header>
        `;
        const input = document.querySelector('#searchInput');
        const appLinks = ['specialites', 'documents', 'services', 'contacts'];
        const services = ['Consultations', 'Examens', 'Traitements'];
        const specialites = ['Cardiologie', 'Chirurgie', 'Traumatologie', 'Maternite'];
        const form = document.querySelector('#searchbar');
        function evaluate(value) {
            let pages = document.location.href.indexOf('pages');
                if(pages > -1 && !value.includes('.html')) {
                    if(appLinks.includes(value)) {
                        document.location = `${value}.html`;
                    } else if(services.includes(value)) {
                        document.location = `services.html#${value}`;
                    } else if(specialites.includes(value)) {
                        document.location = `specialites.html#${value}`;
                    } else if(value == 'index' || value == 'accueil') {
                        document.location = `../index.html`;
                    }
                } else if (pages > -1 && value.includes('.html')) {
                        document.location = `${value}`;
                        if (value == 'index.html') {
                            document.location = `../index.html`;
                        }
                } else if(pages == -1) {
                    if(appLinks.includes(value)) {
                        document.location = `pages/${value}.html`;
                    } else if(services.includes(value)) {
                        document.location = `pages/services.html#${value}`;
                    } else if(specialites.includes(value)) {
                        document.location = `pages/specialites.html#${value}`;
                    }
                } else if (pages == 1 && value.includes('.html')) {
                    document.location = `pages/${value}`;
                }
            
        }
        form.addEventListener('submit', function (e){
        e.preventDefault();
        let val = input.value;
         evaluate(val);
        }, false);
        
    }
    headerStyle() {
        return `
        <style type="text/css">
        #logo{
            width: 150px;
            height: 150px;
        }
        .header-icon{
            width: 80px;
            height: 80px;
            min-width: 50px;
        }
        .titles_block > span{
            font-size: 1em;
            font-weight: bolder;
        }
        .titles_block > .sub_title{
            font-size: 14px;
            font-weight: normal;
        }
        #${this.getAttribute('active')} {
            color: #eee;
            border-bottom: 3px solid #80b14dff;
        }
        .nav-block{
            border-top: 1.5px solid #ddd;
            border-bottom: 1.5px solid #ddd;
        }
        .searchbar{
            width: auto;
            height: 50px;
            border-left: 1.5px solid #ddd;
            border-right: 1.5px solid #ddd;
        }
        .searchbar > input{
            border: none;
            outline: none;
            text-indent: 10px;
        }
        .searchbar > button{
            width: auto;
            height: auto;
            background: transparent;
            border: none;
            margin-right: 10px;
        }
        .searchbar > button > img{
            width: 27px;
            height: 27px;
        }
        .media-icon{
            width: 30px;
            height: 30px;
        }
        @media(min-width: 992px) and (max-width: 1199px) {
            #logo{
            width: 125px;
            height: 125px;
        }
            .titles_block > span{
            font-size: 14px;
            font-weight: bolder;
        }
            .header-icon{
            width: 83px;
            height: 70px;
        }
    }
    @media(min-width: 768px) and (max-width: 992px) {
        #logo{
            width: 125px;
            height: 125px;
        }
        .titles_block > span{
            font-size: 14px;
            font-weight: bolder;
        }
        .titles_block > .sub_title{display: none;}
            .header-icon{
            width: 70px;
            height: 65px;
        }
        .searchbar > button{display: none;}
        .searchbar > button > img{
            width: 20px;
            height: 20px;
        }
        .medias{display: none;}
    }
    @media(max-width: 767px) {
        #logo{
            width: 100px;
            height: 100px;
        }
        .medias{display: none;}
        .searchbar{display: none;}
        .titles_block > span{
            font-size: 12px;
            font-weight: bolder;
        }
        .titles_block > .sub_title_hidden_1{display: none;}
            .header-icon{
            width: 50px;
            height: 50px;
        }
    }
    @media(max-width: 396px) {
        #logo{
            width: 80px;
            height: 80px;
            margin-top: 15px;
        }
        .titles_block > span{
            font-size: 10px;
            font-weight: bolder;
        }
        .header-icon{
            width: 35px;
            height: 40px;
        }
        .sub_title_hidden_2 {display: none;}
    }
    .sublinks_1, .sublinks_2{
        width: auto;
        height: auto;
        display: none;
        flex-direction: column;
        background: #eee;
        border: 1px solid #ddd;
        border-radius: 5px;
        position: absolute;
        z-index: 1;
        transform: translateY(3%)
    }
    .sublinks_2 {
        transform: translate(-15%, 3%);
    }
    .sublinks_1 a, .sublinks_2 a{
        padding: 7px 50px;
        color: #000;
    }
    .sublinks_1 a:first-of-type, .sublinks_2 a:first-of-type{border-radius: 5px 5px 0 0}
    .sublinks_1 a:last-of-type, .sublinks_2 a:last-of-type{border-radius: 0 0 5px 5px;}
    .sublinks_1 a:hover, .sublinks_2 a:hover{
        text-decoration: none;
        color: #fff;
        background-color: #80b14dff;
    }
    .nav_subBlock{
        width: auto;
        height: auto;
    }
    .nav_subBlock:hover [class*="sublinks_"]{display: flex;}
    </style>
        `
    }
    subLinks_1() {
        return `
        <div class="sublinks_1">
                <a href="${this.getAttribute('href3')}#Cardiologie">Cardiologie</a>
                <a href="${this.getAttribute('href3')}#Chirurgie">Chirurgie</a>
                <a href="${this.getAttribute('href3')}#Traumatologie">Traumatologie</a>
                <a href="${this.getAttribute('href3')}#Maternite">Maternité</a>
               </div>
        `
    }
    subLinks_2() {
        return `
        <div class="sublinks_2">
                <a href="${this.getAttribute('href2')}#Consultations">Consultations</a>
                <a href="${this.getAttribute('href2')}#Examens">Examens</a>
                <a href="${this.getAttribute('href2')}#Traitements">Traitements</a>
               </div>
        `;
    }
}