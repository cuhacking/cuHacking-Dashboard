// DOM elements
const guideList = document.querySelector('#content');

// setup guides
const setupGuides = (data1, user) => {

    document.getElementById('login-box').style.display = 'none';
    document.getElementById('logout').style.display = 'block';

    var data = JSON.parse(data1);

    var dietaryRestrictions = "";
    var diet = data.data.application.personalInfo.dietaryRestrictions;
    if (diet.lactoseFree == true) {
        dietaryRestrictions += `<i class="fas fa-utensils" style="color: black;"></i> Lactose Free <br>`;
    }
    if (diet.nutFree == true) {
        dietaryRestrictions += `<i class="fas fa-utensils" style="color: black;"></i> Nut Free `;
    }
    if (diet.vegetarian == true) {
        dietaryRestrictions += `<i class="fas fa-utensils" style="color: black;"></i> Vegetarian <br>`;
    }
    if (diet.halal == true) {
        dietaryRestrictions += `<i class="fas fa-utensils" style="color: black;"></i> Halal `;
    }
    if (diet.glutenFree == true) {
        dietaryRestrictions += `<i class="fas fa-utensils" style="color: black;"></i> Gluten Free `;
    }
    if (diet.other != null) {
        dietaryRestrictions += `<i class="fas fa-utensils" style="color: black;"></i> Other: ${diet.other} `;
    }

    let html = `<div class="row my-4">
    <div class="col-md-8">
        <div class="row my-4">
            <div>
                <div class="col-md-4" id="qrcode">
                </div>
            </div>
            <div class="col-md-8 ml-4 mt-4">
                <h1 class="display-4"> ${data.data.name}
                </h1>
                <h5><i class="far fa-envelope" style="color: black;"></i> ${data.data.email}</h5>
                <h5><i class="fas fa-university" style="color: black;"></i> ${data.data.application.personalInfo.school}</h5>
            </div>
        </div>
        <div class="card my-3">
            <div class="card-body">
                <h4 class="heading-card heading-font mb-3"> Other Info</h4>
                <div class="card-text">
                    <table>
                        <tr>
                            <td>DIetry Restriction:&nbsp;&nbsp;</td>
                            <td>${dietaryRestrictions}</td>
                        </tr>
                        <tr>
                        <td>Color:</td>
                        <td>${data.data.color}</td>
                        </tr>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>`;

    guideList.innerHTML = html;
    new QRCode(document.getElementById("qrcode"), {
        text: user.uid,
        width: 184,
        height: 184,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    console.log(data.data.role);
    if (data.data.role == "admin") {
        document.querySelector(".admin-schedule").style.display = "block";
    }
};

const setupGuides2 = () => {
    document.getElementById('login-box').style.display = 'block';
    document.getElementById('logout').style.display = 'none';
    document.querySelector(".admin-schedule").style.display = "none";

    let html = "";
    guideList.innerHTML = html;
}